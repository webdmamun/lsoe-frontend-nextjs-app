import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { HeartPulse, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen, Wallet } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/courses/health' },
  title: 'Health & Social Care Courses at UK Universities',
  description:
    'Explore Nursing, Health Management, Public Health, Social Work, and Mental Health undergraduate programmes at UK universities. Free admissions support from London School of Excellence.',
  openGraph: {
    title: 'Health & Social Care Courses at UK Universities — LSOE',
    description:
      'Undergraduate Health and Social Care courses at UK universities — Nursing, Social Work, Public Health, and more. Free support from LSOE.',
    url: '/courses/health',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Health & Social Care Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health & Social Care Courses at UK Universities — LSOE',
    description: 'Browse Health & Social Care undergraduate courses at UK universities with free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Health and Social Care (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'A broad programme covering health policy, social care management, safeguarding, and person-centred approaches. Suitable for sector-entry roles.',
  },
  {
    title: 'Adult Nursing (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'NMC-approved programme covering acute and community nursing. Combines clinical placements with academic study. High NHS demand.',
  },
  {
    title: 'Mental Health Nursing (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Psychiatric care, therapeutic interventions, risk assessment, and recovery models. NMC registered on completion.',
  },
  {
    title: 'Social Work (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'SWE-approved degree covering child protection, adult safeguarding, community practice, and social work law.',
  },
  {
    title: 'Public Health (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Epidemiology, health promotion, disease prevention, and health policy analysis. Strong NHS and local authority career pathways.',
  },
  {
    title: 'Healthcare Management (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Combines business management principles with healthcare systems knowledge. Suitable for NHS administration and private health sector roles.',
  },
  {
    title: 'Paramedic Science (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'HCPC-approved degree covering pre-hospital care, clinical decision-making, and emergency medicine. Ambulance placement included.',
  },
  {
    title: 'Biomedical Science (BSc Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Laboratory diagnostics, pathology, haematology, and clinical biochemistry. IBMS accredited at many institutions.',
  },
];

const relatedCategories = [
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'IT & Computing', href: '/courses/computing' },
  { name: 'Law', href: '/courses/law' },
];

export default function HealthCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Health & Social Care', href: '/courses/health' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-rose-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Health & Social Care</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <HeartPulse className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-bold text-white">35+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Health & Social Care Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            Health and Social Care is one of the most in-demand graduate sectors in the UK.
            Whether you are aiming for NHS nursing, social work, or healthcare management,
            LSOE guides you to the right programme for your qualifications.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mb-8">
            For UK-based applicants, review{' '}
            <Link href="/study-in-uk-local-students" className="font-bold text-white underline hover:text-rose-300">flexible local study options</Link>{' '}
            and <Link href="/apply-uk-courses" className="font-bold text-white underline hover:text-rose-300">application steps for UK courses</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply-now" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-rose-700 rounded-full font-bold hover:bg-rose-50 transition-all">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
              <MessageCircle className="w-4 h-4" /> Ask an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Available Health & Social Care Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Representative selection of Health and Social Care programmes available through LSOE partner institutions. Clinical and regulated programmes require DBS checks and health assessments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full">{c.level}</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{c.duration}</span>
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
          <h2 className="text-xl font-black text-slate-900 mb-4">Typical Entry Requirements</h2>
          <ul className="space-y-3 mb-4">
            {[
              'A-Levels: Typically CDD–BBC depending on course (Science subjects advantageous for clinical routes)',
              'BTEC: Health and Social Care BTEC widely accepted — Merit profile typically sufficient',
              'Access to HE: Health-focused Access diploma preferred for clinical programmes',
              'DBS Check: Enhanced DBS required for all clinical and placement-based programmes',
              'English language: IELTS 6.5 or above required for NMC and SWE regulated programmes',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            Clinical programme requirements vary. LSOE advisors confirm exact requirements during your free consultation.
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
              <Link key={cat.href} href={cat.href} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-sm transition-all group">
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-primary">{cat.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-700 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to apply for a Health course?</h2>
          <p className="text-white/70 mb-8">Our advisors will guide you through regulated programme requirements and your UCAS application — at no cost to you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-700 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
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
