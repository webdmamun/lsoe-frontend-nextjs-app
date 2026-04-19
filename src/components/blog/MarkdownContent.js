import Link from 'next/link';

function isSafeUrl(url = '') {
  return url.startsWith('/') || url.startsWith('https://') || url.startsWith('http://');
}

export function headingId(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function renderInline(text, keyPrefix = 'in') {
  const regex = /(\*\*[^*]+?\*\*|\*[^*]+?\*|`[^`]+?`|!?\[[^\]]*?\]\([^\)]+?\))/g;
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    if (!part) return null;
    const k = `${keyPrefix}-${idx}`;

    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={k} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={k} className="italic text-slate-700">{part.slice(1, -1)}</em>;
    }
    if (/^`[^`]+`$/.test(part)) {
      return (
        <code key={k} className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded-md text-[0.85em] font-mono border border-slate-200">
          {part.slice(1, -1)}
        </code>
      );
    }

    const imgMatch = part.match(/^!\[([^\]]*)\]\(([^\)]+)\)$/);
    if (imgMatch) {
      const [, alt, src] = imgMatch;
      if (!isSafeUrl(src)) return null;
      return (
        <img key={k} src={src} alt={alt || 'Blog image'}
          className="w-full rounded-2xl border border-slate-100 shadow-sm my-8" loading="lazy" />
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      if (!isSafeUrl(href)) return <span key={k}>{label}</span>;
      const isExt = href.startsWith('http://') || href.startsWith('https://');
      if (isExt) {
        return (
          <a key={k} href={href} target="_blank" rel="noopener noreferrer"
            className="text-brand-secondary font-medium underline underline-offset-2 hover:text-brand-primary transition-colors">
            {label}
          </a>
        );
      }
      return (
        <Link key={k} href={href}
          className="text-brand-secondary font-medium underline underline-offset-2 hover:text-brand-primary transition-colors">
          {label}
        </Link>
      );
    }

    return <span key={k}>{part}</span>;
  });
}

export default function MarkdownContent({ content = '' }) {
  const lines = String(content || '').replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) { i += 1; continue; }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({ type: 'heading', level: headingMatch[1].length, text: headingMatch[2] });
      i += 1;
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
      blocks.push({ type: 'hr' });
      i += 1;
      continue;
    }

    if (line.startsWith('> ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        items.push(lines[i].trim().slice(2));
        i += 1;
      }
      blocks.push({ type: 'blockquote', text: items.join(' ') });
      continue;
    }

    if (/^(-|\*|\+)\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^(-|\*|\+)\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(-|\*|\+)\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    const paragraph = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6})\s+/.test(lines[i].trim()) &&
      !/^(-|\*|\+)\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith('> ') &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    if (paragraph.length) blocks.push({ type: 'p', text: paragraph.join(' ') });
  }

  return (
    <div>
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          const id = headingId(block.text);
          if (block.level === 1) return (
            <h1 key={idx} id={id} className="text-3xl font-black text-slate-900 mt-10 mb-5 leading-tight scroll-mt-28">
              {renderInline(block.text, `h1-${idx}`)}
            </h1>
          );
          if (block.level === 2) return (
            <h2 key={idx} id={id} className="text-2xl font-black text-slate-900 mt-12 mb-4 leading-snug scroll-mt-28 pb-3 border-b border-slate-100">
              {renderInline(block.text, `h2-${idx}`)}
            </h2>
          );
          if (block.level === 3) return (
            <h3 key={idx} id={id} className="text-xl font-bold text-slate-900 mt-8 mb-3 leading-snug scroll-mt-28">
              {renderInline(block.text, `h3-${idx}`)}
            </h3>
          );
          return (
            <h4 key={idx} id={id} className="text-lg font-bold text-slate-800 mt-6 mb-2 scroll-mt-28">
              {renderInline(block.text, `h4-${idx}`)}
            </h4>
          );
        }

        if (block.type === 'blockquote') return (
          <blockquote key={idx} className="my-7 pl-5 pr-5 py-4 border-l-4 border-brand-secondary bg-brand-secondary/5 rounded-r-2xl">
            <p className="text-slate-700 text-base leading-[1.8] italic m-0">
              {renderInline(block.text, `bq-${idx}`)}
            </p>
          </blockquote>
        );

        if (block.type === 'hr') return (
          <hr key={idx} className="my-10 border-slate-100" />
        );

        if (block.type === 'ul') return (
          <ul key={idx} className="my-6 space-y-3 pl-0 list-none">
            {block.items.map((item, itemIdx) => (
              <li key={`ul-${idx}-${itemIdx}`} className="flex items-start gap-3 text-slate-700 text-[16.5px] leading-[1.8]">
                <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0" />
                <span>{renderInline(item, `uli-${idx}-${itemIdx}`)}</span>
              </li>
            ))}
          </ul>
        );

        if (block.type === 'ol') return (
          <ol key={idx} className="my-6 space-y-3 pl-0 list-none">
            {block.items.map((item, itemIdx) => (
              <li key={`ol-${idx}-${itemIdx}`} className="flex items-start gap-3 text-slate-700 text-[16.5px] leading-[1.8]">
                <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold flex items-center justify-center mt-[0.25rem]">
                  {itemIdx + 1}
                </span>
                <span>{renderInline(item, `oli-${idx}-${itemIdx}`)}</span>
              </li>
            ))}
          </ol>
        );

        return (
          <p key={idx} className="text-[16.5px] text-slate-700 leading-[1.85] my-5">
            {renderInline(block.text, `p-${idx}`)}
          </p>
        );
      })}
    </div>
  );
}
