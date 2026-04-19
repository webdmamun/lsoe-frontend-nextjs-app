'use client';

import { useEffect, useMemo, useState } from 'react';
import { Loader2, Save, Send, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { estimateReadingTimeMinutes, slugify } from '@/lib/blog/blogUtils';
import DashboardShell from '@/components/office/DashboardShell';

const DEFAULT_FORM = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featuredImage: '',
  authorName: 'LSOE Admissions Team',
  publishDate: '',
  status: 'draft',
  metaTitle: '',
  metaDescription: '',
  ogImage: '',
  canonicalUrl: '',
  tags: '',
  category: 'General',
};

function toLocalDateTimeInput(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => `${n}`.padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function BlogForm({
  initialData = null,
  onSubmit,
  heading,
  description,
  submitLabel = 'Save',
}) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    if (!initialData) {
      setForm(DEFAULT_FORM);
      return;
    }

    setForm({
      title: initialData.title || '',
      slug: initialData.slug || '',
      excerpt: initialData.excerpt || '',
      content: initialData.content || '',
      featuredImage: initialData.featuredImage || '',
      authorName: initialData.authorName || 'LSOE Admissions Team',
      publishDate: toLocalDateTimeInput(initialData.publishDate),
      status: initialData.status || 'draft',
      metaTitle: initialData.metaTitle || '',
      metaDescription: initialData.metaDescription || '',
      ogImage: initialData.ogImage || '',
      canonicalUrl: initialData.canonicalUrl || '',
      tags: Array.isArray(initialData.tags) ? initialData.tags.join(', ') : '',
      category: initialData.category || 'General',
    });
    setSlugTouched(Boolean(initialData.slug));
  }, [initialData]);

  useEffect(() => {
    if (slugTouched) return;
    setForm((prev) => ({ ...prev, slug: slugify(prev.title) }));
  }, [form.title, slugTouched]);

  const readingTimePreview = useMemo(() => estimateReadingTimeMinutes(form.content), [form.content]);

  const setField = (key, value) => {
    setApiError('');
    setErrors((prev) => ({ ...prev, [key]: '' }));
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.title.trim()) nextErrors.title = 'Title is required';
    if (!form.slug.trim()) nextErrors.slug = 'Slug is required';
    if (!form.excerpt.trim()) nextErrors.excerpt = 'Excerpt is required';
    if (!form.content.trim()) nextErrors.content = 'Content is required';
    if (!form.metaTitle.trim()) nextErrors.metaTitle = 'Meta title is required';
    if (!form.metaDescription.trim()) nextErrors.metaDescription = 'Meta description is required';
    if (!form.authorName.trim()) nextErrors.authorName = 'Author name is required';
    if (!form.category.trim()) nextErrors.category = 'Category is required';

    if (form.status === 'published' && !form.publishDate) {
      nextErrors.publishDate = 'Publish date is required for published posts';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      await onSubmit({
        ...form,
        slug: slugify(form.slug),
        publishDate: form.publishDate ? new Date(form.publishDate).toISOString() : null,
        tags: form.tags,
      });
    } catch (error) {
      setApiError(error?.message || 'Failed to save blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardShell>
    <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <Link href="/office-dashboard/blog" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline mb-3">
              <ArrowLeft className="w-4 h-4" /> Back to blog list
            </Link>
            <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Blog Manager</p>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">{heading}</h1>
            <p className="text-sm text-slate-500 mt-2">{description}</p>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1.5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
              form.status === 'published'
                ? 'bg-green-100 text-green-700 border-green-200'
                : 'bg-amber-100 text-amber-700 border-amber-200'
            }`}>
              {form.status === 'published' ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
              {form.status === 'published' ? 'Published' : 'Draft'}
            </span>
            <p className="text-xs text-slate-400">~{readingTimePreview} min read</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {apiError ? (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-medium">
              {apiError}
            </div>
          ) : null}

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm">
            <div className="pb-2 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Core Content</h2>
              <p className="text-xs text-slate-500 mt-1">Main article text shown on the public blog page.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Title" error={errors.title} helpText="Use a clear keyword-focused title.">
                <input value={form.title} onChange={(e) => setField('title', e.target.value)} className={inputClass(errors.title)} placeholder="Post title" />
              </Field>
              <Field label="Slug" error={errors.slug} helpText="URL-friendly and unique.">
                <input
                  value={form.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setField('slug', e.target.value);
                  }}
                  className={inputClass(errors.slug)}
                  placeholder="post-slug"
                />
              </Field>
            </div>

            <Field label="Excerpt" error={errors.excerpt}>
              <textarea value={form.excerpt} onChange={(e) => setField('excerpt', e.target.value)} rows={3} className={inputClass(errors.excerpt)} placeholder="Short summary shown on /blog" />
            </Field>

            <Field label="Content (Markdown)" error={errors.content}>
              <textarea value={form.content} onChange={(e) => setField('content', e.target.value)} rows={16} className={inputClass(errors.content)} placeholder="Write post content using markdown headings, lists, links, and images." />
              <p className="text-xs text-slate-400 mt-1">Supported: headings (`##`), lists, links (`[text](url)`), and images (`![alt](url)`).</p>
            </Field>
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm">
            <div className="pb-2 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Publishing</h2>
              <p className="text-xs text-slate-500 mt-1">Control visibility, scheduling, and author details.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label="Status">
                <select value={form.status} onChange={(e) => setField('status', e.target.value)} className={inputClass()}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </Field>
              <Field label="Publish Date" error={errors.publishDate}>
                <input type="datetime-local" value={form.publishDate} onChange={(e) => setField('publishDate', e.target.value)} className={inputClass(errors.publishDate)} />
              </Field>
              <Field label="Author Name" error={errors.authorName}>
                <input value={form.authorName} onChange={(e) => setField('authorName', e.target.value)} className={inputClass(errors.authorName)} placeholder="LSOE Admissions Team" />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Category" error={errors.category}>
                <input value={form.category} onChange={(e) => setField('category', e.target.value)} className={inputClass(errors.category)} placeholder="Student Finance" />
              </Field>
              <Field label="Tags (comma separated)">
                <input value={form.tags} onChange={(e) => setField('tags', e.target.value)} className={inputClass()} placeholder="student finance, uk admissions" />
              </Field>
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm">
            <div className="pb-2 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900">Media + SEO</h2>
              <p className="text-xs text-slate-500 mt-1">Metadata used for search engines and social previews.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Featured Image URL">
                <input value={form.featuredImage} onChange={(e) => setField('featuredImage', e.target.value)} className={inputClass()} placeholder="https://..." />
              </Field>
              <Field label="OG Image URL">
                <input value={form.ogImage} onChange={(e) => setField('ogImage', e.target.value)} className={inputClass()} placeholder="https://..." />
              </Field>
            </div>

            <Field label="Meta Title" error={errors.metaTitle}>
              <input value={form.metaTitle} onChange={(e) => setField('metaTitle', e.target.value)} className={inputClass(errors.metaTitle)} placeholder="SEO title" />
            </Field>

            <Field label="Meta Description" error={errors.metaDescription}>
              <textarea value={form.metaDescription} onChange={(e) => setField('metaDescription', e.target.value)} rows={3} className={inputClass(errors.metaDescription)} placeholder="SEO description" />
            </Field>

            <Field label="Canonical URL (optional)">
              <input value={form.canonicalUrl} onChange={(e) => setField('canonicalUrl', e.target.value)} className={inputClass()} placeholder="https://www.londonschoolofexcellence.com/blog/your-slug" />
            </Field>
          </section>

          <div className="sticky bottom-0 bg-white/95 backdrop-blur border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Status: <span className="font-bold text-slate-700 capitalize">{form.status}</span>
              {form.status === 'draft' && (
                <span className="ml-2 text-amber-600">· Mark as published below before saving to go live</span>
              )}
            </p>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setField('status', form.status === 'published' ? 'draft' : 'published')}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border font-bold text-sm transition-all disabled:opacity-60 ${
                  form.status === 'published'
                    ? 'border-amber-300 text-amber-700 hover:bg-amber-50'
                    : 'border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                }`}
              >
                <Send className="w-4 h-4" />
                {form.status === 'published' ? 'Set to Draft' : 'Mark as Published'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white font-bold hover:brightness-110 transition-all disabled:opacity-60"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {submitLabel}
              </button>
            </div>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}

function Field({ label, children, error, helpText = '' }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
      <div className="mt-1">{children}</div>
      {error ? <p className="mt-1 text-xs font-medium text-red-600">{error}</p> : helpText ? <p className="mt-1 text-xs text-slate-400">{helpText}</p> : null}
    </label>
  );
}

function inputClass(hasError = false) {
  return `w-full px-3 py-2.5 rounded-xl border bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/40 ${
    hasError ? 'border-red-300' : 'border-slate-200'
  }`;
}
