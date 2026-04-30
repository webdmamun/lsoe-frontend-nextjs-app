import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import {
  createUniqueHeadingId,
  headingId,
} from '@/lib/blog/markdownHeadings.mjs';

function isSafeUrl(url = '') {
  return url.startsWith('/') || url.startsWith('https://') || url.startsWith('http://');
}

function isExternalUrl(url = '') {
  return url.startsWith('https://') || url.startsWith('http://');
}

function getNodeText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (!Array.isArray(node.children)) return '';
  return node.children.map(getNodeText).join('');
}

function markdownProps(props = {}) {
  const { node, ...safeProps } = props;
  return safeProps;
}

function makeHeading(level, className, counts) {
  const Tag = `h${level}`;

  return function Heading({ node, children, ...props }) {
    const id = createUniqueHeadingId(getNodeText(node), counts);

    return (
      <Tag {...props} id={id} className={className}>
        {children}
      </Tag>
    );
  };
}

function createMarkdownComponents() {
  const headingCounts = new Map();

  return {
    h1: makeHeading(1, 'text-3xl font-black text-slate-900 mt-10 mb-5 leading-tight scroll-mt-28', headingCounts),
    h2: makeHeading(2, 'text-2xl font-black text-slate-900 mt-12 mb-4 leading-snug scroll-mt-28 pb-3 border-b border-slate-100', headingCounts),
    h3: makeHeading(3, 'text-xl font-bold text-slate-900 mt-8 mb-3 leading-snug scroll-mt-28', headingCounts),
    h4: makeHeading(4, 'text-lg font-bold text-slate-800 mt-6 mb-2 scroll-mt-28', headingCounts),
    h5: makeHeading(5, 'text-base font-bold text-slate-800 mt-6 mb-2 scroll-mt-28', headingCounts),
    h6: makeHeading(6, 'text-sm font-bold uppercase tracking-wide text-slate-600 mt-6 mb-2 scroll-mt-28', headingCounts),

  p({ children, ...props }) {
    return (
      <p {...markdownProps(props)} className="text-[16.5px] text-slate-700 leading-[1.85] my-5">
        {children}
      </p>
    );
  },

  a({ href = '', children, ...props }) {
    if (!isSafeUrl(href)) return <span>{children}</span>;

    const className = 'text-brand-secondary font-medium underline underline-offset-2 hover:text-brand-primary transition-colors';

    if (isExternalUrl(href)) {
      return (
        <a {...markdownProps(props)} href={href} target="_blank" rel="noopener noreferrer nofollow" className={className}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  },

  img({ src = '', alt = '', ...props }) {
    if (!isSafeUrl(src)) return null;

    return (
      <img
        {...markdownProps(props)}
        src={src}
        alt={alt || 'Blog image'}
        className="my-8 h-auto w-full max-w-full rounded-2xl border border-slate-100 object-contain shadow-sm"
        loading="lazy"
      />
    );
  },

  strong({ children, ...props }) {
    return (
      <strong {...markdownProps(props)} className="font-bold text-slate-900">
        {children}
      </strong>
    );
  },

  em({ children, ...props }) {
    return (
      <em {...markdownProps(props)} className="italic text-slate-700">
        {children}
      </em>
    );
  },

  del({ children, ...props }) {
    return (
      <del {...markdownProps(props)} className="text-slate-500 decoration-slate-400">
        {children}
      </del>
    );
  },

  code({ children, className = '', ...props }) {
    return (
      <code
        {...markdownProps(props)}
        className={`${className} rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800`}
      >
        {children}
      </code>
    );
  },

  pre({ children, ...props }) {
    return (
      <pre {...markdownProps(props)} className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-sm leading-6 text-slate-100">
        {children}
      </pre>
    );
  },

  blockquote({ children, ...props }) {
    return (
      <blockquote {...markdownProps(props)} className="my-7 rounded-r-2xl border-l-4 border-brand-secondary bg-brand-secondary/5 py-4 pl-5 pr-5">
        <div className="text-base italic leading-[1.8] text-slate-700">
          {children}
        </div>
      </blockquote>
    );
  },

  ul({ children, className = '', ...props }) {
    const isTaskList = className.includes('contains-task-list');

    return (
      <ul
        {...markdownProps(props)}
        className={`${isTaskList ? 'pl-0 list-none' : 'list-disc pl-6 marker:text-brand-secondary'} my-6 space-y-3 text-[16.5px] leading-[1.8] text-slate-700`}
      >
        {children}
      </ul>
    );
  },

  ol({ children, ...props }) {
    return (
      <ol {...markdownProps(props)} className="my-6 list-decimal space-y-3 pl-6 text-[16.5px] leading-[1.8] text-slate-700 marker:font-bold marker:text-brand-primary">
        {children}
      </ol>
    );
  },

  li({ children, className = '', ...props }) {
    const isTaskItem = className.includes('task-list-item');

    return (
      <li {...markdownProps(props)} className={`${isTaskItem ? 'flex items-start gap-2 pl-0' : 'pl-1'} text-slate-700`}>
        {children}
      </li>
    );
  },

  input({ checked, type, ...props }) {
    if (type !== 'checkbox') return <input {...markdownProps(props)} type={type} />;

    return (
      <input
        {...markdownProps(props)}
        type="checkbox"
        checked={checked}
        readOnly
        className="mt-2 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand-secondary"
      />
    );
  },

  hr(props) {
    return <hr {...markdownProps(props)} className="my-10 border-slate-100" />;
  },

  table({ children, ...props }) {
    return (
      <div className="my-8 w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table {...markdownProps(props)} className="min-w-full divide-y divide-slate-200 bg-white text-left text-sm">
          {children}
        </table>
      </div>
    );
  },

  thead({ children, ...props }) {
    return (
      <thead {...markdownProps(props)} className="bg-slate-50">
        {children}
      </thead>
    );
  },

  tbody({ children, ...props }) {
    return (
      <tbody {...markdownProps(props)} className="divide-y divide-slate-100">
        {children}
      </tbody>
    );
  },

  tr({ children, ...props }) {
    return (
      <tr {...markdownProps(props)} className="align-top">
        {children}
      </tr>
    );
  },

  th({ children, ...props }) {
    return (
      <th {...markdownProps(props)} className="whitespace-nowrap px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-700">
        {children}
      </th>
    );
  },

  td({ children, ...props }) {
    return (
      <td {...markdownProps(props)} className="min-w-[180px] px-4 py-3 text-sm leading-6 text-slate-700">
        {children}
      </td>
    );
  },
  };
}

export default function MarkdownContent({ content = '' }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      skipHtml={true}
      components={createMarkdownComponents()}
    >
      {String(content || '')}
    </ReactMarkdown>
  );
}

export { headingId };
