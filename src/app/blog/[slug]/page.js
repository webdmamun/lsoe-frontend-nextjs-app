import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import MarkdownContent from '@/components/blog/MarkdownContent';
import BlogTOC from '@/components/blog/BlogTOC';
import { formatReadingTimeLabel } from '@/lib/blog/blogUtils';
import { getPublishedBlogBySlug, listPublishedBlogs } from '@/lib/blog/blogService';
import Link from 'next/link';
import {
  ArrowRight, BookOpen, CalendarDays, ChevronRight,
  Clock, GraduationCap, MessageCircle, RefreshCw, Send, UserCircle2,
} from 'lucide-react';
import { notFound } from 'next/navigation';

const SITE_URL = 'https://www.londonschoolofexcellence.com';

export const revalidate = 300;

const COURSE_LINKS = [
  { href: '/courses/business', label: 'Business & Management', keywords: ['business', 'management', 'marketing', 'finance', 'hr'] },
  { href: '/courses/health', label: 'Health & Social Care', keywords: ['health', 'social care', 'nursing', 'public health', 'care'] },
  { href: '/courses/computing', label: 'Computing & IT', keywords: ['computing', 'it', 'technology', 'software', 'cyber', 'data'] },
  { href: '/courses/law', label: 'Law', keywords: ['law', 'legal'] },
  { href: '/courses/engineering', label: 'Engineering', keywords: ['engineering'] },
];

function getRelevantCourseLinks(post) {
  const haystack = [post.category, ...(post.tags || []), post.title, post.excerpt, post.content]
    .join(' ').toLowerCase();
  const matched = COURSE_LINKS.filter((item) => item.keywords.some((w) => haystack.includes(w)));
  return matched.length > 0 ? matched.slice(0, 2) : COURSE_LINKS.slice(0, 1);
}

function headingToId(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');
}

function extractHeadings(content) {
  if (!content) return [];
  return content.split('\n').reduce((acc, line) => {
    const m = line.trim().match(/^(#{2,3})\s+(.+)$/);
    if (m) acc.push({ level: m[1].length, text: m[2].trim(), id: headingToId(m[2].trim()) });
    return acc;
  }, []);
}

function fmtDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Article Not Found | London School of Excellence',
      description: 'The requested blog article could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const canonical = post.canonicalUrl || `/blog/${post.slug}`;
  // Use dedicated ogImage only — featuredImage is a portrait/square thumbnail,
  // not 1200×630, so it renders incorrectly on social previews.
  const ogImage = post.ogImage || '/og-image.png';

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${post.title} — LSOE` }],
      publishedTime: post.publishDate || undefined,
      authors: [post.authorName],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [ogImage],
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) notFound();

  const related = (await listPublishedBlogs({ category: post.category }))
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const courseLinks = getRelevantCourseLinks(post);
  const headings = extractHeadings(post.content);
  const hasTOC = headings.length >= 2;
  const tags = Array.isArray(post.tags) ? post.tags.filter(Boolean) : [];
  const updatedDiffersFromPublished = post.updatedAt && post.updatedAt !== post.publishDate;

  const canonical = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.ogImage || `${SITE_URL}/og-image.png`],
    author: { '@type': 'Person', name: post.authorName },
    publisher: {
      '@type': 'Organization',
      name: 'London School of Excellence',
      logo: {
        '@type': 'ImageObject',
        url: 'https://media.londonschoolofexcellence.com/lsoe-website-images/LSOE-logo-color.png',
      },
    },
    datePublished: post.publishDate,
    dateModified: post.updatedAt || post.publishDate,
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: post.title, href: `/blog/${post.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <AdmissionNav isDark={true} />

      <article className="bg-white">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-36 lg:pt-44 pb-12 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(1,39,89,0.6),transparent_60%)]" />

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Category + tags */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/50 text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white leading-[1.15] mb-5 lg:mb-6">
              {post.title}
            </h1>

            <p className="text-slate-300 text-lg leading-[1.7] max-w-2xl mb-7">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm text-slate-400 pb-6 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <UserCircle2 className="w-4 h-4 text-slate-500" />
                <span className="text-slate-300 font-medium">{post.authorName}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-slate-500" />
                Published {fmtDate(post.publishDate)}
              </span>
              {updatedDiffersFromPublished && (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                  Updated {fmtDate(post.updatedAt)}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                {formatReadingTimeLabel(post.readingTime)}
              </span>
            </div>

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="pt-5">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
                <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
                <li><Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
                <li className="text-slate-400 font-medium truncate max-w-[240px] sm:max-w-sm">{post.title}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* ── Article body ─────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

          {/* Featured image */}
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-md mb-12 border border-slate-100"
            />
          )}

          {/* Two-column layout when TOC available */}
          <div className={hasTOC ? 'lg:grid lg:grid-cols-[1fr_260px] lg:gap-14 xl:gap-16' : ''}>

            {/* Main content */}
            <div className="min-w-0">
              {hasTOC && <BlogTOC headings={headings} variant="mobile" />}

              <MarkdownContent content={post.content} />

              {/* Mid-article CTA */}
              <div className="my-10 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 border border-brand-secondary/20 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 mb-1 text-base">Need help with your UK application?</p>
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                      Our admissions team offers free, personalised guidance — from course selection to Student Finance.
                    </p>
                    <Link href="/apply-now"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                      Get free admissions support <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Plan Your Next Step */}
              <section className="mt-10 pt-10 border-t border-slate-100">
                <h2 className="text-xl font-black text-slate-900 mb-1.5">Plan Your Next Step</h2>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Use these resources to move your UK study plan forward.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <NextStepCard
                    href="/apply-now"
                    icon={<Send className="w-4 h-4" />}
                    title="Apply for Free"
                    description="Start your UK university application with expert support included."
                  />
                  <NextStepCard
                    href="/courses"
                    icon={<GraduationCap className="w-4 h-4" />}
                    title="Explore All Courses"
                    description="Browse all UK university course categories we support."
                  />
                  <NextStepCard
                    href="/student-finance-uk"
                    icon={<BookOpen className="w-4 h-4" />}
                    title="Student Finance Guide"
                    description="Understand your funding options for studying in the UK."
                  />
                  {courseLinks.map((item) => (
                    <NextStepCard
                      key={item.href}
                      href={item.href}
                      icon={<ArrowRight className="w-4 h-4" />}
                      title={item.label}
                      description="View courses in this subject area."
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* ── Sidebar (desktop only) ───────────────────────────────────── */}
            {hasTOC && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-5">

                  {/* TOC card */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <BlogTOC headings={headings} variant="sidebar" />
                  </div>

                  {/* Quick apply card */}
                  <div className="rounded-2xl bg-gradient-to-br from-brand-primary to-slate-800 p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2">Free Support</p>
                    <p className="font-black text-base mb-1.5 leading-snug">Ready to apply to a UK university?</p>
                    <p className="text-sm text-white/70 mb-4 leading-relaxed">
                      Our team guides you through every step — at no cost.
                    </p>
                    <Link href="/apply-now"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-secondary text-white text-sm font-bold rounded-xl hover:brightness-110 transition-all mb-2">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact-us"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 border border-white/15 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-colors">
                      <MessageCircle className="w-4 h-4" /> Book Consultation
                    </Link>
                  </div>

                </div>
              </aside>
            )}
          </div>
        </div>

        {/* ── Related posts ─────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-slate-50 py-16 px-6 border-t border-slate-100">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-2">Keep Reading</p>
              <h2 className="text-2xl font-black text-slate-900 mb-8">More from the LSOE Blog</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group block bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    {item.featuredImage && (
                      <img src={item.featuredImage} alt={item.title} className="w-full h-auto" loading="lazy" />
                    )}
                    <div className="p-5">
                      <p className="text-[11px] text-brand-secondary font-bold uppercase tracking-wider mb-2">{item.category}</p>
                      <h3 className="font-black text-slate-900 text-[15px] mb-2 leading-snug group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">{item.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-secondary group-hover:underline">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(38,178,230,0.1),transparent_65%)]" />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-3">Free Admissions Support</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
              Ready to Start Your UK University Journey?
            </h2>
            <p className="text-slate-400 text-base mb-8 leading-[1.75]">
              Turn this guide into action. Our admissions team helps you apply, plan your finances, and choose the right course — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply-now"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded-full font-bold hover:brightness-110 transition-all shadow-lg">
                Apply Now — It&apos;s Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                <MessageCircle className="w-4 h-4" /> Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

      </article>

      <AdmissionFooter />
    </>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function NextStepCard({ href, icon, title, description }) {
  return (
    <Link href={href}
      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:border-brand-secondary/30 hover:bg-brand-secondary/5 transition-all shadow-sm">
      <span className="w-8 h-8 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
        {icon}
      </span>
      <div>
        <p className="font-bold text-sm text-slate-900 group-hover:text-brand-primary transition-colors leading-snug">{title}</p>
        {description && <p className="text-xs text-slate-500 mt-0.5 leading-snug">{description}</p>}
      </div>
    </Link>
  );
}
