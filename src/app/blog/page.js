import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import { formatReadingTimeLabel } from '@/lib/blog/blogUtils';
import { listPublishedBlogs } from '@/lib/blog/blogService';
import { DEFAULT_BLOG_IMAGE_URL, getBlogImageUrls } from '@/lib/blog/blogImages.mjs';
import Link from 'next/link';
import { ArrowRight, BookOpenText, CalendarDays, MessageCircle, UserCircle2 } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/blog' },
  title: 'LSOE Blog | UK Admissions, Student Finance and Study Advice',
  description:
    'Practical guides on UK university admissions, Student Finance England, UCAS applications, Student Route visas, and study pathways — from LSOE advisors.',
  openGraph: {
    title: 'LSOE Blog | UK Admissions and Student Finance Insights',
    description: 'Helpful guides for UK and international students covering admissions, funding, and course selection.',
    url: '/blog',
    images: [{ url: DEFAULT_BLOG_IMAGE_URL, width: 1024, height: 1024, alt: 'LSOE Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LSOE Blog | Admissions and Student Finance Guides',
    description: 'Read practical UK admissions and student finance advice from London School of Excellence.',
    images: [DEFAULT_BLOG_IMAGE_URL],
  },
};

export const revalidate = 300;

export default async function BlogIndexPage() {
  const posts = await listPublishedBlogs();

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
      ]} />
      <AdmissionNav isDark={true} />

      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.14),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpenText className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Admissions Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">UK Study and Admissions Blog</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Actionable guidance for UK local and international students on admissions strategy, student finance, and choosing the right course pathway.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-slate-500 mb-8">
            Explore practical resources on UK university admissions, Student Finance support, and application planning.
          </p>

          {posts.length === 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center text-slate-500">
              No published blog posts yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                const images = getBlogImageUrls(post);

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <img
                        src={images.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">{post.category}</p>
                      <h2 className="text-lg font-black text-slate-900 mb-3 leading-snug group-hover:text-brand-primary transition-colors">{post.title}</h2>
                      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                        <span className="inline-flex items-center gap-1"><UserCircle2 className="w-3.5 h-3.5" /> {post.authorName}</span>
                        <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {new Date(post.publishDate).toLocaleDateString('en-GB')}</span>
                        <span>{formatReadingTimeLabel(post.readingTime)}</span>
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary group-hover:underline">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Need Personal Guidance for Your Next Step?</h2>
          <p className="text-white/75 mb-8">Speak with our advisors to turn these insights into a practical application plan.</p>
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

      <AdmissionFooter />
    </>
  );
}
