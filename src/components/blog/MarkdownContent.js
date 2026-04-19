import Link from 'next/link';

function isSafeUrl(url = '') {
  return url.startsWith('/') || url.startsWith('https://') || url.startsWith('http://');
}

function renderInline(text, keyPrefix = 'in') {
  const regex = /(!?\[[^\]]*\]\([^\)]+\))/g;
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    if (!part) return null;

    const imageMatch = part.match(/^!\[([^\]]*)\]\(([^\)]+)\)$/);
    if (imageMatch) {
      const alt = imageMatch[1] || 'Blog image';
      const src = imageMatch[2] || '';
      if (!isSafeUrl(src)) return null;
      return (
        <img
          key={`${keyPrefix}-img-${idx}`}
          src={src}
          alt={alt}
          className="w-full rounded-2xl border border-slate-100 my-6"
          loading="lazy"
        />
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1] || 'Link';
      const href = linkMatch[2] || '#';
      if (!isSafeUrl(href)) return <span key={`${keyPrefix}-text-${idx}`}>{label}</span>;

      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      if (isExternal) {
        return (
          <a
            key={`${keyPrefix}-a-${idx}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-semibold hover:underline"
          >
            {label}
          </a>
        );
      }

      return (
        <Link key={`${keyPrefix}-l-${idx}`} href={href} className="text-brand-primary font-semibold hover:underline">
          {label}
        </Link>
      );
    }

    return <span key={`${keyPrefix}-t-${idx}`}>{part}</span>;
  });
}

export default function MarkdownContent({ content = '' }) {
  const lines = String(content || '').replace(/\r\n/g, '\n').split('\n');

  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      i += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      blocks.push({ type: 'heading', level, text: heading[2] });
      i += 1;
      continue;
    }

    if (/^(-|\*)\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^(-|\*)\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(-|\*)\s+/, ''));
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
    while (i < lines.length && lines[i].trim() && !/^(#{1,6})\s+/.test(lines[i].trim()) && !/^(-|\*)\s+/.test(lines[i].trim()) && !/^\d+\.\s+/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    blocks.push({ type: 'p', text: paragraph.join(' ') });
  }

  return (
    <div className="prose prose-slate max-w-none">
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          const common = 'font-black text-slate-900 mt-10 mb-4';
          if (block.level === 1) return <h1 key={idx} className={`text-3xl ${common}`}>{renderInline(block.text, `h1-${idx}`)}</h1>;
          if (block.level === 2) return <h2 key={idx} className={`text-2xl ${common}`}>{renderInline(block.text, `h2-${idx}`)}</h2>;
          if (block.level === 3) return <h3 key={idx} className={`text-xl ${common}`}>{renderInline(block.text, `h3-${idx}`)}</h3>;
          return <h4 key={idx} className={`text-lg ${common}`}>{renderInline(block.text, `h4-${idx}`)}</h4>;
        }

        if (block.type === 'ul') {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 text-slate-700 my-5">
              {block.items.map((item, itemIdx) => (
                <li key={`ul-${idx}-${itemIdx}`}>{renderInline(item, `uli-${idx}-${itemIdx}`)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === 'ol') {
          return (
            <ol key={idx} className="list-decimal pl-6 space-y-2 text-slate-700 my-5">
              {block.items.map((item, itemIdx) => (
                <li key={`ol-${idx}-${itemIdx}`}>{renderInline(item, `oli-${idx}-${itemIdx}`)}</li>
              ))}
            </ol>
          );
        }

        return (
          <p key={idx} className="text-slate-700 leading-relaxed my-4">
            {renderInline(block.text, `p-${idx}`)}
          </p>
        );
      })}
    </div>
  );
}
