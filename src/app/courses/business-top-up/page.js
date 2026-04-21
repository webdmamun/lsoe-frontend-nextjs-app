import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { Trophy, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen, Wallet, Globe2 } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/courses/business-top-up' },
  title: 'Business Top-Up Degrees at UK Universities',
  description:
    'Explore one-year Business Top-Up degrees (Level 6) at UK universities. Convert your HND, Foundation Degree, or equivalent into a full Honours degree. Free admissions support from LSOE.',
  openGraph: {
    title: 'Business Top-Up Degrees at UK Universities — London School of Excellence',
    description:
      'One-year Level 6 Business Top-Up degrees for HND and Foundation Degree holders. Fast route to a full UK Honours degree. Free support from LSOE.',
    url: '/courses/business-top-up',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Business Top-Up Degrees — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Top-Up Degrees at UK Universities — LSOE',
    description: 'Convert your HND or Foundation Degree into a full Honours degree in one year. Free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Business Administration Top-Up (BA Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Final year of a Business Administration degree for students with an HND or Foundation Degree in a related subject. Covers strategic management and organisational leadership.',
  },
  {
    title: 'Business Management Top-Up (BA Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Develop advanced management capabilities, corporate strategy, and change management skills. Directly applicable to leadership and management roles.',
  },
  {
    title: 'Accounting and Finance Top-Up (BSc Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Advanced financial reporting, audit practice, and corporate finance. Supports progression towards ACCA, CIMA, or ICAEW professional qualifications.',
  },
  {
    title: 'Marketing Management Top-Up (BA Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Digital strategy, consumer psychology, brand management, and integrated marketing communications at Honours level.',
  },
  {
    title: 'International Business Top-Up (BA Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Global business strategy, cross-cultural management, and international trade law. Popular with internationally mobile graduates.',
  },
  {
    title: 'Human Resource Management Top-Up (BA Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Employment law, organisational development, talent strategy, and HR analytics. Aligned with CIPD Level 5 and 7 frameworks.',
  },
  {
    title: 'Project Management Top-Up (BSc Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Risk management, stakeholder engagement, agile and waterfall methodologies, and portfolio management. PRINCE2 and APM content.',
  },
  {
    title: 'Entrepreneurship and Innovation Top-Up (BA Hons)',
    level: 'Level 6 Top-Up',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Advanced entrepreneurial theory, startup funding, social enterprise, and innovation management. Project-based with business planning focus.',
  },
];

const relatedCategories = [
  { name: 'Business & Management',  href: '/courses/business' },
  { name: 'Foundation Year',        href: '/courses/foundation' },
  { name: 'Postgraduate',           href: '/courses/postgraduate' },
];

export default function BusinessTopUpPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Business Top-Up Degrees', href: '/courses/business-top-up' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-orange-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Business Top-Up Degrees</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Trophy className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold text-white">20+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Business Top-Up Degrees at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-4">
            If you hold a Business HND, Foundation Degree, or an equivalent Level 5 qualification,
            a Top-Up degree lets you complete a full UK Honours degree in just one year.
            LSOE advisors help you find the right institution and manage your application — free.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mb-4">
            Plan your next step with <Link href="/apply-uk-courses" className="font-bold text-white underline hover:text-orange-300">UK application steps</Link>{' '}
            and <Link href="/free-admission-support-uk" className="font-bold text-white underline hover:text-orange-300">free admissions support information</Link>.
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mb-8">
            Top-Up degrees are particularly popular with international students who arrive with
            partial qualifications, and UK students who completed college-level Business programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-800 rounded-full font-bold hover:bg-orange-50 transition-all"
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

      {/* What is a Top-Up */}
      <section className="bg-white py-14 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Trophy className="w-5 h-5" />, title: 'What is a Top-Up degree?', desc: 'A Level 6 programme that takes you from an HND or Foundation Degree to a full BA/BSc Honours degree in one academic year.' },
            { icon: <Globe2 className="w-5 h-5" />, title: 'Who is it for?', desc: 'Students who completed an HND, Foundation Degree, or equivalent Level 5 qualification and want to upgrade to a full UK Honours degree.' },
            { icon: <ArrowRight className="w-5 h-5" />, title: 'What comes next?', desc: 'With a full Honours degree, you can progress to postgraduate study, professional qualifications, or employment in management and leadership roles.' },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <h3 className="font-black text-slate-900 text-sm">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course list */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Available Business Top-Up Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            All programmes listed are Level 6 (final year) Honours top-up degrees. Most can be
            completed in one year full-time or up to two years part-time. Specific entry requirements
            and module content vary by institution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">{c.level}</span>
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
          <h2 className="text-xl font-black text-slate-900 mb-4">Typical Entry Requirements for Top-Up Degrees</h2>
          <ul className="space-y-3 mb-6">
            {[
              'HND (Higher National Diploma) in a Business-related subject at Merit or above',
              'Foundation Degree (FdA or FdSc) in a Business or related field',
              'Level 5 Diploma from a recognised awarding body (e.g. BTEC, Pearson, CMI)',
              'International equivalent: overseas college or university diploma at Level 5 or above',
              'English language: IELTS 5.5–6.0 overall (varies by institution)',
              'Relevant work experience may be considered alongside qualifications at some universities',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            LSOE advisors assess your specific qualifications to confirm eligibility and recommend the most suitable institution.
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
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Related Areas</p>
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
      <section className="bg-orange-800 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to complete your Honours degree?
          </h2>
          <p className="text-white/70 mb-8">
            LSOE assesses your existing qualifications, identifies the right Top-Up programme,
            and manages your university application — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply/uk-eu" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-800 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              UK / EU Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/apply/international" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              International Application
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
