import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { BookOpen, ArrowRight, CheckCircle2, ChevronRight, MessageCircle, Wallet, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Foundation Year Courses at UK Universities',
  description:
    'Explore Foundation Year programmes at UK universities. One-year pathways for students without standard A-Level entry qualifications, including international and mature students. Free support from LSOE.',
  openGraph: {
    title: 'Foundation Year Programmes at UK Universities — LSOE',
    description:
      'One-year Foundation Year programmes that prepare you for undergraduate study at UK universities. Available for Home and international applicants. Free support from LSOE.',
    url: '/courses/foundation',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Foundation Year Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Year Courses at UK Universities — LSOE',
    description: 'Browse Foundation Year programmes at UK universities with free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const courses = [
  {
    title: 'Foundation Year in Business & Social Sciences',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Prepares students for progression to Business, Marketing, Economics, Law, or Social Sciences degrees. Covers academic writing, research skills, and subject-specific content.',
  },
  {
    title: 'Foundation Year in Engineering & Technology',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Bridges the gap into Engineering or Computing degrees. Covers core Maths, Physics, and technical skills. Suitable for applicants without A-Level Sciences.',
  },
  {
    title: 'Foundation Year in Health & Life Sciences',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Pathway for progression into Nursing, Health Management, Public Health, and Social Work programmes. Includes biology, health ethics, and academic study skills.',
  },
  {
    title: 'Foundation Year in Law & Criminology',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Introductory legal concepts, critical thinking, and academic skills as preparation for LLB Law, Criminology, or Criminal Justice degree programmes.',
  },
  {
    title: 'Foundation Year in Computing & IT',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Develops programming fundamentals, mathematical reasoning, and digital literacy as a pathway to Computer Science or IT undergraduate programmes.',
  },
  {
    title: 'International Foundation Year',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time',
    desc: 'Specifically designed for international students. Combines academic English, subject-specific study, and UK university preparation. Available across multiple subject areas.',
  },
  {
    title: 'Foundation Year in Education & Humanities',
    level: 'Foundation',
    duration: '1 year full-time',
    mode: 'Full-time / Part-time',
    desc: 'Entry pathway for students progressing to Education, Psychology, Sociology, or Humanities degrees. Includes essay writing, critical analysis, and academic conventions.',
  },
  {
    title: 'Extended Degree (4-Year with Integrated Foundation)',
    level: 'Foundation + Undergraduate',
    duration: '4 years full-time',
    mode: 'Full-time',
    desc: 'An integrated 4-year programme where Year 1 is the Foundation year and Years 2–4 are the full undergraduate degree. Seamless progression without a separate application.',
  },
];

const relatedCategories = [
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'IT & Computing',        href: '/courses/computing' },
  { name: 'Engineering',           href: '/courses/engineering' },
  { name: 'Health & Social Care',  href: '/courses/health' },
];

export default function FoundationCoursesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Foundation Year', href: '/courses/foundation' },
      ]} />

      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-violet-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">Foundation Year</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <BookOpen className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-bold text-white">15+ Programmes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Foundation Year Courses at UK Universities
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-4">
            If you do not meet the standard entry requirements for an undergraduate degree, a Foundation
            Year is a well-established pathway into UK higher education. It is widely accepted and
            LSOE can guide you through the application process — free of charge.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mb-4">
            Start with <Link href="/study-in-uk-local-students" className="font-bold text-white underline hover:text-violet-300">local student pathways</Link>{' '}
            and <Link href="/apply-uk-courses" className="font-bold text-white underline hover:text-violet-300">application guidance for UK courses</Link>{' '}
            to map your best entry route.
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mb-8">
            Foundation programmes are available for UK Home students, EU students, and international
            applicants. Upon successful completion, students typically progress directly to Year 1
            of a degree at the same institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-violet-800 rounded-full font-bold hover:bg-violet-50 transition-all"
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

      {/* What is a Foundation Year? */}
      <section className="bg-white py-14 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <GraduationCap className="w-5 h-5" />, title: 'Who is it for?', desc: 'Students with lower grades than required, mature students returning to study, international applicants without standard UK qualifications, or those changing subject direction.' },
            { icon: <BookOpen className="w-5 h-5" />, title: 'What does it involve?', desc: 'One year of subject-specific study designed to build the academic and technical skills needed for your chosen degree. Taught at university level.' },
            { icon: <ArrowRight className="w-5 h-5" />, title: 'What happens after?', desc: 'Upon passing your Foundation Year, you progress directly to Year 1 of the linked undergraduate degree at the same university — no second application needed.' },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
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
            Available Foundation Year Programmes
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Foundation Year programmes are available across most major subject areas. LSOE advisors
            match you to the right pathway based on your current qualifications and degree goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {courses.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-base mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full">{c.level}</span>
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
          <h2 className="text-xl font-black text-slate-900 mb-4">Typical Entry Requirements for Foundation Year</h2>
          <ul className="space-y-3 mb-6">
            {[
              'A-Levels: 48–80 UCAS points (lower than standard degree entry) — typically D/E grades or below',
              'BTEC: Pass or Merit profile accepted at many institutions',
              'GCSEs: Typically 5 GCSEs at Grade 4/C or above, including English and Maths',
              'Mature students: Experience and personal statement can offset formal qualifications',
              'International: Secondary school certificate equivalent; IELTS 4.5–5.5 for International Foundation Year',
              'Age 18+: No upper age limit; Foundation Years welcome mature and returning students',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-400 text-xs mb-6">
            Foundation Year entry requirements vary by institution and subject area. Contact LSOE to assess your eligibility.
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
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Courses to progress to</p>
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
      <section className="bg-violet-800 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Not sure if a Foundation Year is right for you?
          </h2>
          <p className="text-white/70 mb-8">
            Our advisors assess your qualifications and recommend the best entry route — whether
            that is a Foundation Year, direct entry, or a top-up degree. Completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply/uk-eu" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet-800 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
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
