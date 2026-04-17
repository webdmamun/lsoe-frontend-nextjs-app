import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { Briefcase, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen, Wallet } from 'lucide-react';

export const metadata = {
  title: 'Business & Management Courses at UK Universities',
  description:
    'Explore Business Administration, Accounting, Marketing, Finance, HRM, and Entrepreneurship undergraduate programmes at UK universities. Free admissions support from London School of Excellence.',
  openGraph: {
    title: 'Business Courses at UK Universities — London School of Excellence',
    description:
      'Undergraduate Business and Management courses at UK universities. Free admissions support for Home and international students from LSOE.',
    url: '/courses/business',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Business Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Courses at UK Universities — LSOE',
    description: 'Browse Business & Management undergraduate courses at UK universities with free support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Business Administration (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'A broad foundation in business strategy, operations, marketing, and finance. Suitable for students aiming for management or entrepreneurship roles.',
  },
  {
    title: 'International Business (BA Hons)',
    level: 'Undergraduate',
    duration: '3–4 years (with placement)',
    desc: 'Focuses on global trade, cross-cultural management, and international marketing. Popular with internationally mobile students.',
  },
  {
    title: 'Accounting and Finance (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Covers financial reporting, management accounting, auditing, and corporate finance. Leads to professional qualifications like ACCA or CIMA.',
  },
  {
    title: 'Marketing (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Consumer behaviour, digital marketing, brand management, and market research. High demand in media, retail, and tech sectors.',
  },
  {
    title: 'Human Resource Management (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Employment law, organisational behaviour, talent management, and HR strategy. Aligned with CIPD professional standards.',
  },
  {
    title: 'Entrepreneurship and Innovation (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Business modelling, venture creation, innovation strategy, and startup finance. Practical, project-based learning approach.',
  },
  {
    title: 'Project Management (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Covers risk management, stakeholder engagement, agile methodologies, and leadership. PRINCE2 and APM aligned content.',
  },
  {
    title: 'Finance (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Investment analysis, financial modelling, risk assessment, and derivatives. Strong quantitative and analytical focus.',
  },
];

const relatedCategories = [
  { name: 'IT & Computing', href: '/courses/computing' },
  { name: 'Law', href: '/courses/law' },
  { name: 'Health & Social Care', href: '/courses/health' },
];

export default function BusinessCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Business & Management', href: '/courses/business' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-brand-primary pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Business & Management</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Briefcase className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">60+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Business & Management Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            Business and Management is one of the most popular undergraduate subjects in the UK.
            LSOE advisors help you find the right programme, prepare your UCAS application, and
            secure a place at a suitable university — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-primary rounded-full font-bold hover:bg-brand-secondary hover:text-white transition-all"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Ask an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Available Business Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Below is a representative selection of Business and Management programmes available through
            our partner institutions. Entry requirements and specific modules vary by university.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-full">{c.level}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{c.duration}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry requirements note */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-slate-900 mb-4">Typical Entry Requirements</h2>
          <ul className="space-y-3 mb-6">
            {[
              'A-Levels: Typically BBC–ABB (varies by university and course)',
              'BTEC: Distinction Merit Merit (DMM) or Distinction Distinction Merit (DDM) equivalent',
              'Access to HE Diploma: 60 credits with Merit/Distinction profile',
              'International: Equivalent qualifications assessed by LSOE on a case-by-case basis',
              'English language: IELTS 6.0 overall (for non-native English speakers)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            Entry requirements change each cycle. LSOE advisors will confirm exact requirements during your consultation.
          </p>
          <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-4">
            <Link href="/am-i-eligible" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <CheckCircle2 className="w-3.5 h-3.5" /> Check if I&apos;m eligible
            </Link>
            <Link href="/ucas-guide" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <BookOpen className="w-3.5 h-3.5" /> UCAS application guide
            </Link>
            <Link href="/student-finance-uk" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:underline">
              <Wallet className="w-3.5 h-3.5" /> Student Finance UK
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Other Subject Areas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to apply for a Business course?
          </h2>
          <p className="text-white/70 mb-8">
            Tell us your qualifications and preferred course direction. We will match you to the right programme and guide your application — free.
          </p>
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
