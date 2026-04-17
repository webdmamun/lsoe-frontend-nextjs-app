import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { FlaskConical, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Postgraduate Courses at UK Universities — MSc, MBA, LLM',
  description:
    'Explore MSc, MBA, MA, and LLM postgraduate programmes at UK universities. Business, Computing, Law, and Health. Admissions guidance from London School of Excellence.',
  openGraph: {
    title: 'Postgraduate Courses at UK Universities — London School of Excellence',
    description:
      'MSc, MBA, LLM, and MA programmes at UK universities. Admissions guidance and support for postgraduate applicants from LSOE.',
    url: '/courses/postgraduate',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Postgraduate Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Postgraduate Courses at UK Universities — LSOE',
    description: 'Browse MSc, MBA, and LLM postgraduate programmes at UK universities with guidance from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'MBA — Master of Business Administration',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time / Online',
    desc: 'The flagship postgraduate management qualification. Covers strategy, leadership, operations, finance, and marketing. Suitable for professionals with 2+ years of work experience.',
  },
  {
    title: 'MSc International Business Management',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Global business strategy, cross-cultural management, and international trade law. Popular with graduates aiming for international careers or further academic study.',
  },
  {
    title: 'MSc Data Science and Analytics',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Advanced statistical modelling, machine learning, Python, and data visualisation. Strong demand from finance, healthcare, and tech sectors.',
  },
  {
    title: 'MSc Cybersecurity',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Advanced network security, threat intelligence, digital forensics, and security architecture. Aligned with NCSC and industry professional standards.',
  },
  {
    title: 'LLM — Master of Laws',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Specialist legal study for law graduates. Areas include International Law, Human Rights, Commercial Law, and Intellectual Property. Available at multiple UK law schools.',
  },
  {
    title: 'MA Education',
    level: 'Postgraduate',
    duration: '1–2 years',
    mode: 'Full-time / Part-time',
    desc: 'Educational leadership, curriculum development, and educational research. Suitable for teachers, trainers, and education policy professionals.',
  },
  {
    title: 'MSc Health Management',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Healthcare systems, strategic management in health, quality improvement, and health policy. Popular with NHS professionals and public health graduates.',
  },
  {
    title: 'MSc Finance and Investment',
    level: 'Postgraduate',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Investment analysis, portfolio management, financial modelling, and derivatives. Strong preparation for CFA and other professional finance examinations.',
  },
];

const relatedCategories = [
  { name: 'Business & Management',       href: '/courses/business' },
  { name: 'IT & Computing',             href: '/courses/computing' },
  { name: 'Law',                         href: '/courses/law' },
  { name: 'Business Top-Up Degrees',    href: '/courses/business-top-up' },
];

export default function PostgraduateCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Postgraduate', href: '/courses/postgraduate' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-pink-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Postgraduate</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <FlaskConical className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-bold text-white">30+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Postgraduate Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-4">
            A postgraduate degree can deepen your expertise, open senior career paths, and qualify
            you for professional routes that require a Masters or equivalent. LSOE can provide
            guidance on postgraduate options at our partner institutions.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-xl px-4 py-3 mb-8 max-w-2xl">
            <span className="text-amber-300 text-sm font-medium">
              Note: LSOE&apos;s primary expertise is undergraduate admissions. For postgraduate enquiries,
              please contact us and we will advise on the best route available to you.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-pink-800 rounded-full font-bold hover:bg-pink-50 transition-all"
            >
              Speak to an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Postgraduate Programmes Overview
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            A representative selection of postgraduate programmes at UK universities. Most
            programmes run for one year full-time. Part-time and online options are available
            at many institutions. Contact LSOE to discuss which programme best fits your background.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full">{c.level}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{c.duration}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">{c.mode}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry requirements */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-slate-900 mb-4">Typical Postgraduate Entry Requirements</h2>
          <ul className="space-y-3 mb-6">
            {[
              'An undergraduate Honours degree (2:2 minimum, 2:1 preferred for most programmes)',
              'Relevant work experience may be required for MBA and professional Masters programmes',
              'Professional qualifications may be considered alongside or in lieu of a degree',
              'International: Equivalent overseas undergraduate degree recognised by UK institutions',
              'English language: IELTS 6.5 overall with no component below 5.5 (varies by programme)',
              'Personal statement and references are typically required as part of the application',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            Postgraduate entry requirements vary significantly by programme and institution. Contact LSOE to discuss your specific profile.
          </p>
          <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-4">
            <Link href="/am-i-eligible" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <CheckCircle2 className="w-3.5 h-3.5" /> Check if I&apos;m eligible
            </Link>
            <Link href="/partner-institutions" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <BookOpen className="w-3.5 h-3.5" /> Our partner institutions
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Related Subject Areas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-sm transition-all group"
              >
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-primary">{cat.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-900 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to take your education further?
          </h2>
          <p className="text-white/70 mb-8">
            Speak to an LSOE advisor about postgraduate options that match your degree, experience,
            and career goals. We will point you in the right direction — at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-900 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Speak to an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
