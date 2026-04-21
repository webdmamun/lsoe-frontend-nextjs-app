import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, HelpCircle, MapPin, Globe2,
  MessageCircle, GraduationCap, Clock, ChevronRight, Users,
  ShieldCheck, BookOpen,
} from 'lucide-react';

export const metadata = {
  title: 'Am I Eligible for UK University 2026? | LSOE',
  description:
    "Check if you're eligible for UK university in 2026. Entry requirements for UK & international students, qualifications, and next steps.",
  alternates: {
    canonical: '/am-i-eligible',
  },
  openGraph: {
    title: 'Am I Eligible for UK University 2026? | LSOE',
    description:
      "Check your UK university eligibility in 2026. Academic qualifications, English language requirements, and free guidance for Home and international students from LSOE.",
    url: '/am-i-eligible',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Am I Eligible for UK University — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Am I Eligible for UK University 2026? | LSOE',
    description:
      "Check UK university entry requirements for Home and international students. Free eligibility guidance from LSOE.",
    images: ['/og-image.png'],
  },
};

const ukQuals = [
  { qual: 'A-Levels', detail: 'Most undergraduate courses require 2–3 A-Levels. Specific grades depend on the course and university — for example, Business may accept BBC while Nursing may require BBB. LSOE will match you to courses that fit your grades.' },
  { qual: 'BTEC / Level 3 Diploma', detail: 'Equivalent to A-Levels on the UCAS tariff. A BTEC Extended Diploma with Distinction grades (D*D*D*) is equivalent to AAA at A-Level and is widely accepted at UK universities.' },
  { qual: 'T-Levels', detail: 'Accepted for many degree programmes. A T-Level with a Distinction* is equivalent to 3 A-Levels on the UCAS tariff, making it a strong route into higher education.' },
  { qual: 'Access to Higher Education Diploma', detail: 'Designed for adult learners returning to education after a gap. Widely accepted at UK universities and a well-established route for mature students who did not take A-Levels at school.' },
  { qual: 'GCSE Requirements', detail: 'Most courses require GCSE grade 4 (C) or above in English and Maths alongside Level 3 qualifications. Some competitive courses (Nursing, Teaching) require GCSE grade 5 (B) in both subjects.' },
  { qual: 'Foundation Year', detail: 'If you do not meet standard entry requirements, many universities offer a funded Foundation Year programme. This is a fully recognised pathway — and Student Finance England will fund it.' },
];

const intlQuals = [
  { region: 'Africa (Nigeria, Ghana, etc.)', qual: 'West African Senior School Certificate (WASSCE) / NECO — usually 5 credits including English and Maths required for undergraduate entry.' },
  { region: 'South Asia (India, Pakistan, Bangladesh)', qual: 'Higher Secondary Certificate (HSC) / 12th Grade Board Results — equivalent to UK A-Levels. Marks of 60–75%+ typically required.' },
  { region: 'Middle East / Gulf', qual: 'High School Certificate / Tawjihi — equivalent to A-Level standard. LSOE will assess your subject grades against UK course requirements.' },
  { region: 'East Africa (Kenya, Uganda, Tanzania)', qual: 'Kenya Certificate of Secondary Education (KCSE) / Uganda Advanced Certificate — widely accepted. LSOE works with applicants from all East African education systems.' },
  { region: 'Europe', qual: 'National Baccalaureate or equivalent school-leaving certificate. Most European qualifications are recognised through NARIC/ENIC-NARIC equivalency frameworks.' },
  { region: 'Other regions', qual: 'LSOE assesses qualifications from all countries individually. Contact us with your certificates and we will advise on the nearest UK equivalent and suitable courses.' },
];

const englishReqs = [
  { test: 'IELTS Academic', score: 'Usually 5.5–6.5 overall (varies by course and university). Most undergraduate courses at LSOE partner universities accept IELTS 5.5–6.0.' },
  { test: 'TOEFL iBT', score: 'Usually 72–90 overall. Accepted by most UK universities alongside IELTS as a widely recognised proficiency measure.' },
  { test: 'Pearson PTE Academic', score: 'Usually 51–65. Increasingly accepted across UK institutions as an alternative to IELTS.' },
  { test: 'Cambridge B2 First / C1 Advanced', score: 'Accepted by most UK universities. C1 Advanced (formerly CAE) satisfies entry for most undergraduate and postgraduate courses.' },
  { test: 'Duolingo English Test', score: 'Accepted by some institutions. Always confirm with the specific university before taking this test.' },
  { test: 'No test required', score: 'If you studied in English for 2+ years at secondary or higher level in a country where English is the main medium of instruction, many universities will waive the language test.' },
];

const minRequirements = [
  { icon: '🎓', title: 'Academic Qualifications', body: 'Minimum 2–3 A-Levels (or equivalent) for undergraduate entry, or an Access to HE Diploma for mature students. Postgraduate courses typically require a 2:2 honours degree.' },
  { icon: '🗣️', title: 'English Language', body: 'IELTS 5.5–6.5 (or equivalent) for most courses. Exempt if you studied in English for 2+ years. Some universities offer pre-sessional English programmes if you are slightly below the threshold.' },
  { icon: '🪪', title: 'Visa (International Students)', body: 'International students need a UK Student Visa (previously Tier 4). You need a Confirmation of Acceptance for Studies (CAS) from a UKVI-licensed university — all LSOE partner universities hold this licence.' },
  { icon: '🎂', title: 'Minimum Age', body: 'Most UK universities require students to be at least 17 or 18 years old at the start of their course. Mature students (21+) are also welcome, and many programmes specifically support adult returners.' },
];

const faqs = [
  {
    question: 'Am I eligible for UK university without A-Levels?',
    answer: 'Yes. A-Levels are not the only entry route. UK universities accept BTEC, T-Levels, Access to Higher Education Diplomas, HND completions, and Foundation Year programmes. Mature students (21+) can also apply based on work experience and professional qualifications. LSOE will identify the right pathway for your background.',
  },
  {
    question: 'Can I apply with overseas qualifications (HSC, WAEC, IB)?',
    answer: 'Yes. UK universities accept qualifications from most countries worldwide. West African WASSCE/NECO (5 credits), South Asian HSC/12th Grade results, International Baccalaureate, European Baccalaureate, and most national school-leaving certificates are accepted. LSOE will map your specific certificates to UK entry requirements and recommend suitable courses.',
  },
  {
    question: 'Is IELTS mandatory for UK university?',
    answer: 'Not always. IELTS is the most common English test, but universities also accept TOEFL, Pearson PTE, Cambridge B2/C1, and Duolingo. If English was your medium of instruction for 2+ years at secondary or university level, many institutions will waive the language requirement entirely. LSOE can confirm exemption eligibility for your specific background.',
  },
  {
    question: 'What IELTS score do I need for UK university?',
    answer: 'Most undergraduate programmes at LSOE partner universities require IELTS 5.5–6.0 overall with no band below 5.5. Competitive programmes (Medicine, Law, Teaching) may require IELTS 6.5 or above. Postgraduate courses typically require IELTS 6.0–6.5. Always check the specific course requirements, as they vary by programme.',
  },
  {
    question: 'Is there an age limit for UK university?',
    answer: 'There is no maximum age for UK university study. The minimum age is usually 17–18 at course start. Mature students (21+) and older adult learners are actively welcomed at UK universities. Many LSOE partner institutions offer flexible part-time and blended-learning programmes designed around work and family commitments.',
  },
  {
    question: 'Can I study in the UK without a student visa?',
    answer: 'UK and Irish citizens, and people with settled or pre-settled status, do not need a student visa. International students from most non-UK countries need a UK Student Visa (formerly Tier 4 visa). To apply, you need a Confirmation of Acceptance for Studies (CAS) from a UKVI-licenced university. All LSOE partner universities are UKVI-licensed.',
  },
  {
    question: 'What is a Foundation Year and who is it for?',
    answer: 'A Foundation Year is an extra introductory year before your undergraduate degree, designed for students who narrowly miss standard entry requirements or who have been out of education for some time. It is fully funded by Student Finance England and leads directly into Year 1 of a degree at the same university. No additional application is needed once you are enrolled in the Foundation Year pathway.',
  },
  {
    question: 'Can I get into UK university with low grades?',
    answer: 'Yes — there are options. Foundation Year programmes accept students with lower-than-standard grades. Some universities also consider contextual admissions, taking into account your personal circumstances alongside your grades. LSOE advisors specialise in finding appropriate programmes for applicants who may not meet standard entry requirements at higher-ranked institutions.',
  },
  {
    question: 'Do mature students (25+) need the same qualifications?',
    answer: 'Not always. UK universities use flexible entry criteria for mature applicants. Work experience, professional qualifications, and references can supplement — or in some cases replace — formal academic qualifications. The Access to Higher Education Diploma is specifically designed for mature learners returning to education and is accepted by most UK universities.',
  },
  {
    question: 'How long does it take to get a UK university offer?',
    answer: 'Through UCAS, decisions typically take 2–8 weeks depending on the institution and time of year. LSOE partner universities often provide faster direct admissions decisions — sometimes within 1–2 weeks of a complete application. LSOE manages the process end-to-end, including your personal statement, reference letters, and document submission.',
  },
];

const trustStats = [
  { value: '2013', label: 'Established', sub: 'Over a decade supporting students' },
  { value: '10,000+', label: 'Students Guided', sub: 'UK and internationally' },
  { value: '140+', label: 'University Partners', sub: 'Recognised UK institutions' },
  { value: '100%', label: 'Free Service', sub: 'No fees charged to students' },
];

export default function AmIEligiblePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Am I Eligible?', href: '/am-i-eligible' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 to-brand-primary pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(38,178,230,0.15),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">UK University Entry Requirements 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Am I Eligible for UK University?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            UK universities accept a wide range of qualifications from the UK and overseas — including A-Levels, BTEC, Access Diplomas,
            and international certificates. This guide explains what is typically required, what alternatives exist if you don&apos;t meet standard entry,
            and how LSOE can help you find the right pathway for your background.
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-8">
            If you are UK-based, also compare{' '}
            <Link href="/study-in-uk-local-students" className="font-bold text-white underline hover:text-brand-secondary">
              local student pathways
            </Link>{' '}
            and{' '}
            <Link href="/uk-student-finance-courses" className="font-bold text-white underline hover:text-brand-secondary">
              student finance course routes
            </Link>{' '}
            before you apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded-full font-black hover:brightness-110 transition-all shadow-lg w-full sm:w-auto"
            >
              Start My Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> Ask a Free Question
            </Link>
          </div>
          <p className="mt-4 text-white/40 text-xs">Free consultation · No obligation · Reply within 24 hours</p>
          <p className="mt-6 text-white/50 text-xs flex items-center justify-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-60" /> Select your student type below to jump to your section
          </p>
          <nav aria-label="breadcrumb" className="mt-6 pt-6 border-t border-white/10">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
              <li className="text-slate-400 font-medium">Am I Eligible?</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── STUDENT TYPE SELECTOR ───────────────────────────────────────────── */}
      <section className="bg-slate-100 py-10 px-6 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Which category are you?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="#uk-students"
              className="group flex items-center gap-4 bg-white border-2 border-blue-200 rounded-2xl px-6 py-5 hover:border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-black text-slate-900 text-sm mb-0.5">🇬🇧 UK / EU Student</p>
                <p className="text-xs text-slate-500 leading-snug">British, Irish, settled status, or pre-settled EU</p>
              </div>
              <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#international-students"
              className="group flex items-center gap-4 bg-white border-2 border-green-200 rounded-2xl px-6 py-5 hover:border-green-500 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                <Globe2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-black text-slate-900 text-sm mb-0.5">🌍 International Student</p>
                <p className="text-xs text-slate-500 leading-snug">Overseas passport, student visa required</p>
              </div>
              <ChevronRight className="w-4 h-4 text-green-400 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── MINIMUM REQUIREMENTS ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Minimum Requirements to Study in the UK</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Before looking at specific qualifications, there are four core requirements that all students — UK and international — need to meet.
            These are the baseline for any UK university application, regardless of your background or nationality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {minRequirements.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-black text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Not sure where you stand? Our{' '}
            <Link href="/contact-us" className="font-bold text-brand-primary hover:underline">free consultation</Link>{' '}
            gives you a personalised eligibility assessment within 24 hours.
          </p>
        </div>
      </section>

      {/* ── UK / EU QUALIFICATIONS ───────────────────────────────────────────── */}
      <section id="uk-students" className="bg-slate-50 py-20 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-2xl px-5 py-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-black text-blue-900 text-sm">🇬🇧 UK / EU Students</p>
              <p className="text-xs text-blue-600">British · Irish · Settled Status · Pre-Settled EU</p>
            </div>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4">UK / EU Student Qualifications</h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            If you studied in the UK or the EU, you likely already hold qualifications that are directly recognised by UK universities.
            The UCAS tariff system converts different qualification types into a common points scale, making it straightforward to compare
            your results against course entry requirements. Below are the most common UK qualification routes:
          </p>
          <div className="space-y-4">
            {ukQuals.map((q) => (
              <div key={q.qual} className="bg-white rounded-2xl px-6 py-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="font-bold text-slate-900 text-sm mb-1.5">{q.qual}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{q.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Check your UCAS tariff points at{' '}
            <a href="https://www.ucas.com/ucas/tariff-calculator" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline">
              ucas.com
            </a>{' '}
            or speak to an LSOE advisor about courses that match your grades.
          </p>
          <div className="mt-6">
            <Link
              href="/apply/uk-eu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold text-sm hover:brightness-110 transition-all"
            >
              Apply as UK / EU Student <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL QUALIFICATIONS ─────────────────────────────────────── */}
      <section id="international-students" className="bg-white py-20 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-5 py-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
              <Globe2 className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-black text-green-900 text-sm">🌍 International Students</p>
              <p className="text-xs text-green-600">Overseas passport · Student visa required · Non-UK qualifications</p>
            </div>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4">International Student Qualifications</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            UK universities accept qualifications from most countries in the world. Equivalency is assessed using the{' '}
            <a href="https://www.enic.org.uk" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline">ENIC-NARIC</a>{' '}
            framework, which maps international certificates to their UK equivalent. LSOE will assess your specific qualifications during your free consultation
            and match you with courses you are realistically likely to be accepted onto.
          </p>
          <div className="space-y-4">
            {intlQuals.map((q) => (
              <div key={q.region} className="bg-slate-50 rounded-2xl px-6 py-5 border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="font-bold text-slate-900 text-sm mb-1.5">{q.region}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{q.qual}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/apply/international"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-bold text-sm hover:bg-green-700 transition-all"
            >
              Apply as International Student <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ENGLISH LANGUAGE ─────────────────────────────────────────────────── */}
      <section id="english-requirements" className="bg-slate-50 py-20 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-3">English Language Requirements</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            If English is not your first language, most UK universities require formal proof of English proficiency.
            The most widely accepted test is IELTS Academic, but several alternatives are now accepted across the UK sector.
            Required scores vary by course — competitive programmes (Medicine, Law, Nursing) typically require higher bands.
            Check the specific requirements on your target course page, or ask LSOE to advise based on your profile.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {englishReqs.map((r) => (
              <div key={r.test} className="bg-white rounded-2xl px-6 py-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <p className="font-bold text-slate-900 text-sm mb-1.5">{r.test}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{r.score}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Official IELTS information at{' '}
            <a href="https://www.ielts.org" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline">ielts.org</a>.
            For visa-related English requirements, see{' '}
            <a href="https://www.gov.uk/student-visa/knowledge-of-english" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline">gov.uk/student-visa</a>.
          </p>
        </div>
      </section>

      {/* ── CAN YOU STUDY WITHOUT IELTS ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold text-blue-800">English Test Waiver</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Can You Study in the UK Without IELTS?</h2>
          <p className="text-slate-700 mb-5 leading-relaxed">
            Yes — many students are eligible for an English language test waiver. If you have spent two or more years in secondary
            or higher education where English was the medium of instruction, most UK universities will not require a separate IELTS score.
            This applies to students from Nigeria, Ghana, Kenya, India, Pakistan, Bangladesh and many other countries where English is
            an official or instructional language.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: 'Medium of Instruction Letter', body: 'A letter from your school or university confirming English was used for teaching. Most universities accept this as proof.' },
              { title: 'Pre-Sessional English Programme', body: 'If you are slightly below the IELTS threshold, many universities offer a pre-sessional course (6–12 weeks) that counts toward your English requirement.' },
              { title: 'Internal University Tests', body: 'Some institutions run their own English assessments for applicants who do not have an external test result. LSOE can identify universities that offer this.' },
            ].map((item) => (
              <li key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3 hover:shadow-sm transition-all">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-slate-800 mb-0.5">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500">
            Unsure if your education qualifies for a waiver?{' '}
            <Link href="/contact-us" className="font-bold text-brand-primary hover:underline">Ask an LSOE advisor</Link> — we assess this case-by-case.
          </p>
        </div>
      </section>

      {/* ── FOUNDATION YEAR ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-emerald-800">Alternative Entry Route</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Foundation Year — If You Don&apos;t Meet Standard Requirements</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            A Foundation Year is an extra introductory year offered by many UK universities for students who narrowly miss standard
            entry requirements — or who have been out of education for some time. It is not a lesser route: it is a structured,
            university-level programme that leads directly into Year 1 of a full undergraduate degree at the same institution.
          </p>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Importantly, Foundation Year programmes are fully funded by Student Finance England — meaning eligible UK home students
            can access the same tuition fee loan and maintenance loan as standard degree students.
            No additional university application is required once you are enrolled on the Foundation Year pathway.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              '✅ Funded by Student Finance England',
              '✅ Leads directly into Year 1 of a full degree',
              '✅ Designed for students with lower grades',
              '✅ Available in Business, Health, Computing, Law and more',
              '✅ Ideal for mature students returning to education',
              '✅ No separate university application needed',
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/courses/foundation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              View Foundation Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-800 rounded-full font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* ── MATURE STUDENTS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-4">
            <Clock className="w-4 h-4 text-purple-700" />
            <span className="text-xs font-bold text-purple-800">Mature Students (Age 25+)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Eligibility for Mature Students</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            There is no upper age limit for UK university. Mature students — typically those aged 21 and over who have been out of
            education for at least 3 years — are assessed differently from school-leavers. Many UK universities use flexible entry
            criteria that consider work experience, professional qualifications, and personal statements alongside formal grades.
          </p>
          <p className="text-slate-700 mb-6 leading-relaxed">
            The Access to Higher Education Diploma is the most popular route for mature students without A-Levels.
            It takes one year to complete and is widely accepted across UK universities as a full equivalent to A-Level entry.
            Part-time and blended-learning options allow mature students to study while continuing to work or manage family responsibilities.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Work experience and professional qualifications accepted by many universities',
              'Access to Higher Education Diploma — 1-year course accepted nationwide',
              'Part-time degree options with pro-rata Student Finance funding',
              'Flexible application assessment — grades alone do not determine eligibility',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Book Free Mature Student Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">UK vs International Students — Requirements at a Glance</h2>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            Entry requirements, English standards, visa needs and fee classifications differ significantly between UK home students and international applicants.
            This table shows the key differences at a glance.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[580px] text-sm bg-white">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">Requirement</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">UK / EU Home Student</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">International Student</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Qualifications', 'A-Levels, BTEC, Access Diploma, T-Levels', 'National school-leaving cert (WASSCE, HSC, IB, etc.)'],
                  ['English Language', 'Usually not required (native/settled)', 'IELTS 5.5–6.5 or equivalent (waiver may apply)'],
                  ['Tuition Fees', 'Home rate — up to £9,535/yr', 'International rate — £12,000–£25,000+/yr'],
                  ['Student Finance', 'SFE loan available (tuition + maintenance)', 'Not eligible for SFE — self-fund or scholarship'],
                  ['Visa Required', 'No (UK/Irish/settled/pre-settled)', 'Yes — UK Student Visa (CAS required)'],
                  ['Foundation Year', 'Funded by SFE', 'Not SFE funded — check institution fees'],
                ].map(([req, uk, intl]) => (
                  <tr key={req} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-700">{req}</td>
                    <td className="px-5 py-4 text-slate-600">{uk}</td>
                    <td className="px-5 py-4 text-slate-600">{intl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            EU students with settled/pre-settled status and 3-year UK residency are treated as home students for fee and funding purposes.
            See our <Link href="/uk-student-finance-courses" className="font-bold text-brand-primary hover:underline">Student Finance guide</Link> for full detail.
          </p>
        </div>
      </section>

      {/* ── WHAT IF YOU DON'T MEET REQUIREMENTS ─────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">What If You Don&apos;t Meet the Requirements?</h2>
          <p className="text-slate-700 mb-5 leading-relaxed">
            Not meeting standard entry requirements does not mean you cannot study at a UK university.
            There are several funded and alternative pathways that LSOE can help you explore, depending on your specific situation.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              { title: 'Foundation Year', body: 'The most common route for students who narrowly miss entry requirements. Funded by SFE for eligible UK home students. Leads directly into a full degree.' },
              { title: 'Access to Higher Education Diploma', body: '1-year programme specifically designed for adults returning to education. Widely accepted by UK universities as an A-Level equivalent.' },
              { title: 'HND → Degree Top-Up', body: 'If you already hold an HND, many universities offer a 1-year funded top-up to a full honours degree.' },
              { title: 'LSOE Free Consultation', body: 'Our advisors assess your specific background and identify the most realistic and funded route into UK higher education — at no cost to you.' },
            ].map((item) => (
              <li key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3 hover:shadow-sm transition-all">
                <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-slate-800 mb-0.5">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-slate-900 text-sm mb-1">Not sure which route fits you?</p>
              <p className="text-sm text-slate-600">Tell us your background — we will advise you honestly about your options. Free, no commitment.</p>
            </div>
            <Link
              href="/contact-us"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Get Free Advice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <ShieldCheck className="w-4 h-4 text-brand-secondary" />
            <span className="text-xs font-bold text-white">Trusted UK Admission Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Trusted by Students Across the UK and Beyond</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Since 2013, LSOE has helped thousands of UK home, EU and international students find the right university pathway —
            free of charge. Our advisors specialise in non-standard applications, international qualifications, and mature student entry.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
              <p className="text-2xl sm:text-3xl font-black text-brand-secondary mb-1">{stat.value}</p>
              <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm mb-8">Common questions about UK university eligibility — answered by LSOE advisors.</p>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-slate-800 text-sm flex items-center justify-between gap-3">
                  <span>{item.question}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Have a specific question?{' '}
            <Link href="/contact-us" className="font-bold text-brand-primary hover:underline">Contact our team</Link> — we reply within 24 hours.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-primary py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Not Sure If You Qualify?</h2>
          <p className="text-white/75 mb-3 leading-relaxed">
            We assess applications from students with all types of qualifications — UK, EU, and international.
            Tell us your background and we will advise you honestly, quickly, and for free.
          </p>
          <p className="text-white/50 text-sm mb-10">Free consultation · No obligation · Reply within 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-black hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto"
            >
              Start My Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> Ask a Free Question
            </Link>
          </div>
          <p className="mt-8 text-white/50 text-sm">
            <Link href="/courses" className="underline hover:text-white">Browse Courses</Link> ·{' '}
            <Link href="/apply-uk-courses" className="underline hover:text-white">Apply UK Courses</Link> ·{' '}
            <Link href="/student-finance-uk" className="underline hover:text-white">Student Finance Guide</Link> ·{' '}
            <Link href="/free-admission-support-uk" className="underline hover:text-white">Free Admission Support</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
