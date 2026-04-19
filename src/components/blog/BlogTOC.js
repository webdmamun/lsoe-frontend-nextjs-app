'use client';

import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function BlogTOC({ headings, variant = 'sidebar' }) {
  const [open, setOpen] = useState(false);

  if (!headings || headings.length < 2) return null;

  const links = headings.map((h) => (
    <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
      <a
        href={`#${h.id}`}
        onClick={() => setOpen(false)}
        className="block py-1.5 text-sm leading-snug text-slate-500 hover:text-brand-primary transition-colors"
      >
        {h.level === 3 && <span className="mr-1.5 text-slate-300">–</span>}
        {h.text}
      </a>
    </li>
  ));

  if (variant === 'mobile') {
    return (
      <div className="lg:hidden mb-8 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between px-5 py-3.5 bg-slate-50 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-secondary" />
            In this article
          </span>
          {open
            ? <ChevronUp className="w-4 h-4 text-slate-400" />
            : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>
        {open && (
          <nav aria-label="Article contents" className="px-5 pb-4 pt-3 bg-white">
            <ul className="space-y-0">{links}</ul>
          </nav>
        )}
      </div>
    );
  }

  return (
    <nav aria-label="Article contents">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-3.5 h-3.5 text-brand-secondary" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Contents</span>
      </div>
      <ul className="space-y-0">{links}</ul>
    </nav>
  );
}
