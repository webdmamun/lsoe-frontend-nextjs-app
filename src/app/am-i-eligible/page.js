import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle, HelpCircle, MapPin, Globe2, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Am I Eligible? — UK University Entry Requirements',
  description:
    'Find out if you meet UK university entry requirements. Academic qualifications, English language standards, and eligibility criteria for Home, EU, and international students — explained by LSOE.',
  openGraph: {
    title: 'Am I Eligible? — UK University Entry Requirements | LSOE',
    description:
      'Check your eligibility for UK university entry. Academic qualifications, English language requirements, and guidance for Home and international students from LSOE.',
    url: '/am-i-eligible',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Am I Eligible — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Am I Eligible? — UK University Entry Requirements',
    description:
      'Check UK university entry requirements for Home and international students with guidance from LSOE.',
    images: ['/og-image.png'],
  },
};

const ukQuals = [
  { qual: 'A-Levels', detail: 'Most undergraduate courses require 2–3 A-Levels. Specific grades depend on the course and university.' },
  { qual: 'BTEC / Level 3 Diploma', detail: 'Equivalent to A-Levels. Distinction grades are typically required for competitive courses.' },
  { qual: 'T-Levels', detail: 'Accepted for many degree programmes. Equivalent to 3 A-Levels on the UCAS tariff.' },
  { qual: 'Access to Higher Education Diploma', detail: 'Designed for adult learners returning to education. Widely accepted at universities.' },
  { qual: 'GCSE Requirements', detail: 'Most courses require GCSE grade 4 (C) or above in English and Maths in addition to Level 3 qualifications.' },
  { qual: 'Foundation Year', detail: 'If you do not meet standard entry requirements, many universities offer a foundation year pathway.' },
];

const intlQuals = [
  { region: 'Africa (Nigeria, Ghana, etc.)', qual: 'West African Senior School Certificate (WASSCE) / NECO — usually 5 credits required' },
  { region: 'South Asia (India, Pakistan, Bangladesh)', qual: 'Higher Secondary Certificate (HSC) / 12th Grade Board Results' },
  { region: 'Middle East / Gulf', qual: 'High School Certificate / Tawjihi — equivalent to A-Level standard' },
  { region: 'East Africa (Kenya, Uganda, Tanzania)', qual: 'Kenya Certificate of Secondary Education (KCSE) / Uganda Advanced Certificate' },
  { region: 'Europe', qual: 'National Baccalaureate or equivalent school-leaving certificate' },
  { region: 'Other regions', qual: 'Contact us — we assess qualifications from all countries individually' },
];

const englishReqs = [
  { test: 'IELTS Academic', score: 'Usually 5.5–6.5 overall (varies by course and university)' },
  { test: 'TOEFL iBT', score: 'Usually 72–90 overall' },
  { test: 'Pearson PTE Academic', score: 'Usually 51–65' },
  { test: 'Cambridge B2 First / C1 Advanced', score: 'Accepted by most universities' },
  { test: 'Duolingo English Test', score: 'Accepted by some institutions (check per university)' },
  { test: 'No test required', score: 'If you studied in English for 2+ years at secondary or higher level' },
];

export default function AmIEligiblePage() {
  return (
    <>
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-brand-primary pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(38,178,230,0.15),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Entry Requirements</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Am I Eligible for UK University?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            UK universities accept a wide range of qualifications from the UK and overseas.
            This guide explains what is typically required and how your qualifications may be assessed.
          </p>
          <p className="mt-5 text-sm text-slate-400 max-w-2xl mx-auto">
            If you are UK-based, compare{' '}
            <Link href="/study-in-uk-local-students" className="font-bold text-white underline hover:text-brand-secondary">
              local student pathways
            </Link>{' '}
            and{' '}
            <Link href="/uk-student-finance-courses" className="font-bold text-white underline hover:text-brand-secondary">
              student finance course routes
            </Link>{' '}
            before you apply.
          </p>
        </div>
      </section>

      {/* UK qualifications */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-brand-primary" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">UK / EU Student Qualifications</h2>
          </div>
          <div className="space-y-4">
            {ukQuals.map((q) => (
              <div key={q.qual} className="bg-white rounded-2xl px-6 py-5 border border-slate-100 shadow-sm">
                <p className="font-bold text-slate-900 text-sm mb-1">{q.qual}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{q.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/apply/uk-eu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold text-sm hover:brightness-110 transition-all"
            >
              Apply as UK / EU Student
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* International qualifications */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-sky-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">International Student Qualifications</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            UK universities accept qualifications from most countries. Below are common qualifications we see from international applicants. LSOE will assess your specific qualifications during your consultation.
          </p>
          <div className="space-y-4">
            {intlQuals.map((q) => (
              <div key={q.region} className="bg-slate-50 rounded-2xl px-6 py-5 border border-slate-100">
                <p className="font-bold text-slate-900 text-sm mb-1">{q.region}</p>
                <p className="text-slate-500 text-sm">{q.qual}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/apply/international"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-full font-bold text-sm hover:bg-sky-700 transition-all"
            >
              Apply as International Student
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* English language */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-3">English Language Requirements</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            If English is not your first language, most UK universities require proof of English proficiency. Accepted tests and minimum scores:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {englishReqs.map((r) => (
              <div key={r.test} className="bg-white rounded-2xl px-6 py-4 border border-slate-100 shadow-sm">
                <p className="font-bold text-slate-900 text-sm mb-1">{r.test}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{r.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Not sure if you qualify?
          </h2>
          <p className="text-white/70 mb-8">
            We assess applications from students with all types of qualifications. Tell us your background and we will advise you honestly and quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start My Application
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
          <p className="mt-7 text-white/60 text-sm">
            Helpful pages:{' '}
            <Link href="/apply-uk-courses" className="underline hover:text-white">Apply UK Courses</Link>
            {' · '}
            <Link href="/free-admission-support-uk" className="underline hover:text-white">Free Admission Support UK</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
