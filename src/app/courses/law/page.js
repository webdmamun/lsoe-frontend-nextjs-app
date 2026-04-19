import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { Scale, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, BookOpen, Wallet } from 'lucide-react';

export const metadata = {
  title: 'Law Courses at UK Universities — LLB and Legal Programmes',
  description:
    'Explore LLB Law, Law with Business, Law with Criminology, and International Law undergraduate programmes at UK universities. Free admissions support from London School of Excellence.',
  openGraph: {
    title: 'Law Courses at UK Universities — London School of Excellence',
    description:
      'Undergraduate Law programmes at UK universities — LLB Law, Criminology, International Law, and more. Free admissions support from LSOE.',
    url: '/courses/law',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Law Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Courses at UK Universities — LSOE',
    description: 'Browse Law undergraduate courses at UK universities with free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Law (LLB Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Covers contract law, tort, criminal law, constitutional law, equity, and land law. The qualifying law degree (QLD) for entry to the legal profession in England and Wales.',
  },
  {
    title: 'Law with Business (LLB Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Combines core law modules with business law, company law, and commercial practice. Popular with students aiming for commercial or corporate law careers.',
  },
  {
    title: 'Law with Criminology (LLB Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Integrates legal theory with criminological study — crime causation, policing, sentencing, and the criminal justice system.',
  },
  {
    title: 'International Law (LLB Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Public international law, human rights, international trade, and conflict law. Suitable for students aiming for diplomacy or international legal practice.',
  },
  {
    title: 'Criminal Justice (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Covers the entire criminal justice system — police, courts, prisons, probation, and policy. Strong employment pathways in public services.',
  },
  {
    title: 'Legal Practice (Graduate Diploma)',
    level: 'Postgraduate / Conversion',
    duration: '1 year full-time',
    desc: 'Professional qualification for non-law graduates seeking entry to the solicitor profession. Covers core practice areas required by the SRA.',
  },
  {
    title: 'Law with Human Rights (LLB Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Human rights law, European Convention on Human Rights, equality law, and international humanitarian law. Strong NGO and public sector career links.',
  },
  {
    title: 'Paralegal Studies (BA Hons)',
    level: 'Undergraduate',
    duration: '3 years full-time',
    desc: 'Legal research, document management, court procedures, and professional ethics. Direct entry route to paralegal and legal assistant roles.',
  },
];

const relatedCategories = [
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'IT & Computing', href: '/courses/computing' },
  { name: 'Health & Social Care', href: '/courses/health' },
];

export default function LawCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Law', href: '/courses/law' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-amber-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Law</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white">20+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Law Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
            Law is a prestigious and versatile degree that opens doors across multiple sectors.
            LSOE helps you understand which LLB programmes match your career aspirations and
            guides your UCAS application — for free.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mb-8">
            Build your plan with{' '}
            <Link href="/apply-uk-courses" className="font-bold text-white underline hover:text-amber-300">UK course application steps</Link>{' '}
            and <Link href="/free-admission-support-uk" className="font-bold text-white underline hover:text-amber-300">free admissions support details</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply-now" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-amber-800 rounded-full font-bold hover:bg-amber-50 transition-all">
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
            Available Law Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Representative selection of Law programmes at LSOE partner institutions across the UK. Entry requirements and accreditations vary by university and programme type.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">{c.level}</span>
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
              'A-Levels: Typically BBB–AAB; any subjects accepted (no specific requirement)',
              'BTEC: Distinction Merit Merit (DMM) or higher equivalent',
              'Access to HE: 60 credits, 45 at Level 3 with Distinction/Merit profile',
              'International: A-Level equivalent qualifications from most countries accepted',
              'English language: IELTS 6.5 overall for LLB programmes (Law is language-intensive)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            Entry requirements vary by institution and programme type. LSOE advisors confirm exact requirements during your free consultation.
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
      <section className="bg-amber-700 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to apply for a Law course?</h2>
          <p className="text-white/70 mb-8">LSOE advisors help you choose the right LLB programme and prepare a strong UCAS application — completely free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-amber-800 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
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
