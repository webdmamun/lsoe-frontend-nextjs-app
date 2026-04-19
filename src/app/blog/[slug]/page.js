import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import MarkdownContent from '@/components/blog/MarkdownContent';
import { formatReadingTimeLabel } from '@/lib/blog/blogUtils';
import { getPublishedBlogBySlug, listPublishedBlogs } from '@/lib/blog/blogService';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ChevronRight, MessageCircle, UserCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

const SITE_URL = 'https://www.londonschoolofexcellence.com';

export const revalidate = 300;

const COURSE_LINKS = [
  { href: '/courses/business', label: 'Business & Management courses in the UK', keywords: ['business', 'management', 'marketing', 'finance', 'hr'] },
  { href: '/courses/health', label: 'Health & Social Care courses in the UK', keywords: ['health', 'social care', 'nursing', 'public health', 'care'] },
  { href: '/courses/computing', label: 'Computing and IT courses in the UK', keywords: ['computing', 'it', 'technology', 'software', 'cyber', 'data'] },
  { href: '/courses/law', label: 'Law courses at UK universities', keywords: ['law', 'legal'] },
  { href: '/courses/engineering', label: 'Engineering courses at UK universities', keywords: ['engineering'] },
];

function getRelevantCourseLinks(post) {
  const haystack = [post.category, ...(post.tags || []), post.title, post.excerpt, post.content]
    .join(' ')
    .toLowerCase();

  const matched = COURSE_LINKS.filter((item) => item.keywords.some((word) => haystack.includes(word)));
  if (matched.length > 0) return matched.slice(0, 2);
  return COURSE_LINKS.slice(0, 1);
}

export async function generateMetadata({ params }) {
  const post = await getPublishedBlogBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Article Not Found | London School of Excellence',
      description: 'The requested blog article could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const canonical = post.canonicalUrl || `/blog/${post.slug}`;
  const ogImage = post.ogImage || post.featuredImage || '/og-image.png';

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

export default async function BlogArticlePage({ params }) {
  const post = await getPublishedBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = (await listPublishedBlogs({ category: post.category }))
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);
  const courseLinks = getRelevantCourseLinks(post);

  const canonical = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.ogImage || post.featuredImage || `${SITE_URL}/og-image.png`],
    author: {
      '@type': 'Person',
      name: post.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'London School of Excellence',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pub-7c1483b325f34a29a5b9ac96b82f4941.r2.dev/lsoe-website-images/LSOE-logo-color.png',
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
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 py-3 flex flex-wrap items-center gap-1 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className="text-slate-800 font-medium truncate max-w-[240px]">{post.title}</span>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.14),transparent_60%)]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">{post.category}</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">{post.title}</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5"><UserCircle2 className="w-4 h-4" /> {post.authorName}</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {new Date(post.publishDate).toLocaleDateString('en-GB')}</span>
              <span>Last updated: {new Date(post.updatedAt || post.publishDate).toLocaleDateString('en-GB')}</span>
              <span>{formatReadingTimeLabel(post.readingTime)}</span>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            {post.featuredImage ? (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full max-h-[480px] object-cover rounded-3xl border border-slate-100 shadow-sm mb-10"
              />
            ) : null}

            <MarkdownContent content={post.content} />

            <section className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h2 className="text-xl font-black text-slate-900 mb-3">Plan Your Next Step</h2>
              <p className="text-sm text-slate-600 mb-4">
                After reading this guide, use these pages to move forward with your UK study plan.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/apply-now" className="font-semibold text-brand-primary hover:underline">
                    Apply now with free admissions support
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="font-semibold text-brand-primary hover:underline">
                    Explore all UK course categories
                  </Link>
                </li>
                <li>
                  <Link href="/student-finance-uk" className="font-semibold text-brand-primary hover:underline">
                    Understand Student Finance England support
                  </Link>
                </li>
                {courseLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="font-semibold text-brand-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="bg-slate-50 py-16 px-6 border-t border-slate-100">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group block bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="font-black text-slate-900 text-base mb-2 leading-snug group-hover:text-brand-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{item.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:underline">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-brand-primary py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to Start Your UK Application Journey?</h2>
            <p className="text-white/75 mb-8">Our team can help you turn blog insights into a clear next action plan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                <MessageCircle className="w-4 h-4" /> Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </article>

      <AdmissionFooter />
    </>
  );
}
