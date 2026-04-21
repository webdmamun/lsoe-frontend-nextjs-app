import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/ucas-guide' },
  title: 'UCAS Guide — Step-by-Step UK University Application Help',
  description:
    'A plain-English guide to the UCAS application system for UK Home and international students. From creating your account to accepting your university offer, explained by London School of Excellence.',
  openGraph: {
    title: 'UCAS Guide — London School of Excellence',
    description:
      'Step-by-step walkthrough of the UCAS application process — from registration to accepting your offer — written in plain English by LSOE.',
    url: '/ucas-guide',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'UCAS Guide — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UCAS Guide — London School of Excellence',
    description:
      'Step-by-step UCAS application guide for Home and international students, from LSOE.',
    images: ['/og-image.png'],
  },
};

const steps = [
  {
    step: '1',
    title: 'Register on UCAS Hub',
    desc: 'Create a free account on the UCAS Hub (ucas.com). You will need a personal email address and your school or college\'s UCAS buzzword if you are applying through an institution.',
    tip: 'Use an email address you check regularly. All correspondence from universities goes here.',
  },
  {
    step: '2',
    title: 'Choose Up to 5 Courses',
    desc: 'Search for courses using UCAS Course Search. You can apply to up to 5 courses at up to 5 different universities in a single application cycle. Consider entry requirements, location, and course content carefully.',
    tip: 'Include a range of entry requirements — a reach choice, realistic choices, and a safe choice.',
  },
  {
    step: '3',
    title: 'Write Your Personal Statement',
    desc: 'Your personal statement is a 4,000-character essay explaining why you want to study your chosen subject, your relevant experience, and your ambitions. It is the same statement sent to all 5 choices.',
    tip: 'Start with your subject motivation, not your life story. Admissions tutors read thousands of statements.',
  },
  {
    step: '4',
    title: 'Get a Reference',
    desc: 'Your UCAS application requires an academic reference from a teacher, tutor, or employer. If you are applying through a school or college, they will submit this on your behalf. If applying independently, you arrange this yourself.',
    tip: 'Brief your referee about your achievements and which courses you are applying to.',
  },
  {
    step: '5',
    title: 'Submit and Pay',
    desc: 'Once your application is complete, it is sent to your referee. After they submit the reference, you submit to UCAS and pay the application fee (currently £28.50 for multiple choices). UCAS then forwards your application to each university.',
    tip: 'Check all spellings, grades, and dates carefully before submitting. Changes after submission are limited.',
  },
  {
    step: '6',
    title: 'Receive and Respond to Decisions',
    desc: 'Universities reply via the UCAS Hub with one of four outcomes: Unconditional Offer, Conditional Offer, Unsuccessful, or Withdrawn. You can track all decisions in one place and respond by the UCAS deadline.',
    tip: 'Conditional offers require you to meet specific grade conditions. Keep your school or college informed.',
  },
  {
    step: '7',
    title: 'Firm and Insurance Choices',
    desc: 'Once you have received all decisions, you must select a Firm choice (your first preference) and an Insurance choice (a backup with lower entry requirements). You decline any remaining offers at this point.',
    tip: 'Your Insurance choice should have lower entry requirements than your Firm choice to give you a real safety net.',
  },
  {
    step: '8',
    title: 'Results Day and Clearing',
    desc: 'On A-Level Results Day, UCAS automatically checks whether you have met your conditions. If you have met your Firm offer conditions, congratulations — you have a place. If not, UCAS Clearing opens, allowing you to find available places.',
    tip: 'Do not panic if you miss your conditions. Clearing has thousands of places and LSOE can support you.',
  },
];

const keyDates = [
  { label: 'October deadline', detail: 'For Oxford, Cambridge, and most Medicine courses' },
  { label: 'Late January deadline', detail: 'Main UCAS deadline for most undergraduate courses' },
  { label: 'June 30', detail: 'Applications received after January are still considered until June 30' },
  { label: 'A-Level Results Day', detail: 'Usually mid-August — UCAS automatically processes conditional offers' },
  { label: 'Clearing opens', detail: 'Same day as results — open to all applicants without a place' },
];

export default function UcasGuidePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Useful Links', href: '/useful-links' },
        { name: 'UCAS Guide', href: '/ucas-guide' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-violet-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.12),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-bold text-white">UCAS Application Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            UCAS Step-by-Step Guide — How to Apply to UK University
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            UCAS is the UK&apos;s centralised university application system. This guide walks you through
            each stage — from creating your account to accepting your offer — in plain English.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-10 text-center">
            The 8 Stages of a UCAS Application
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-base shrink-0">
                    {s.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-black text-slate-900 text-lg mb-2">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-start gap-2 bg-brand-primary/5 rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                      <p className="text-brand-primary text-xs font-medium leading-relaxed">
                        <strong>Tip:</strong> {s.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key dates */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Key UCAS Dates</h2>
          <div className="space-y-3">
            {keyDates.map((d) => (
              <div key={d.label} className="flex items-start gap-3 bg-slate-50 rounded-2xl px-6 py-4">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{d.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-4">
            Dates vary each year. Always check{' '}
            <a
              href="https://www.ucas.com/undergraduate/applying-to-university/when-apply"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-slate-600"
            >
              ucas.com
            </a>{' '}
            for the current cycle deadlines.
          </p>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Related Resources</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Am I Eligible?',           href: '/am-i-eligible' },
              { title: 'Student Finance UK',        href: '/student-finance-uk' },
              { title: 'Browse UK Courses',         href: '/courses' },
              { title: 'Application Assessment',    href: '/application-assessment' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand-primary/20 hover:shadow-sm transition-all group"
              >
                <span className="font-bold text-sm text-slate-800 group-hover:text-brand-primary">{link.title}</span>
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
            Get help with your UCAS application
          </h2>
          <p className="text-white/70 mb-8">
            LSOE advisors guide you through every stage of your UCAS application — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start Application
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
