import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Wallet,
  GraduationCap,
  MessageCircle,
  Landmark,
  ChevronRight,
  Users,
  BookOpen,
  FileCheck,
  Star,
  Clock,
  Building2,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

export const metadata = {
  title: 'UK Student Finance Courses 2026 | Funded Degrees for Home & EU Students',
  description:
    'Study a funded UK degree with Student Finance England. Check student finance eligibility UK for home and EU students, tuition fee loans, maintenance loans, and funded courses UK. Apply free with LSOE.',
  alternates: {
    canonical: '/uk-student-finance-courses',
  },
  openGraph: {
    title: 'UK Student Finance Courses | Funded UK Degrees with LSOE',
    description:
      'Funded UK university courses for home and eligible EU students. Check eligibility, tuition fee loan, maintenance loan, and how to study without paying fees UK upfront. Free LSOE support.',
    url: '/uk-student-finance-courses',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'UK Student Finance Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Student Finance Courses | LSOE',
    description:
      'Funded UK degrees for home and eligible EU students. Student finance eligibility UK, courses covered, maintenance loan amounts, and how to apply — free LSOE guidance.',
    images: ['/og-image.png'],
  },
};

const benefits = [
  'No upfront tuition payment — your UK government student loan is paid straight to the university on your behalf',
  'Maintenance loan to help with rent, travel and daily study costs, paid to your bank account each term',
  'Income-based repayments — you repay only when you earn above the income threshold for your repayment plan',
  'Access UK-recognised degrees that boost your global career prospects and earning power',
  'Option to study full-time or part-time around existing work and family life commitments',
  'Any balance left after 30–40 years is automatically written off, plan dependent — you are never chased for life',
];

const ukEligibility = [
  'You are a UK or Irish citizen, or have settled status (ILR or EU Settlement Scheme)',
  'You have lived in the UK, Ireland, Channel Islands or Isle of Man for at least 3 years before your course starts',
  'You are studying your first higher education qualification (first-degree rule applies)',
  'Your chosen course is approved and recognised by Student Finance England',
  'You are enrolling at a recognised UK university or college partner',
];

const euEligibility = [
  'You have settled status or pre-settled status under the EU Settlement Scheme',
  'You were living in the UK by 31 December 2020 and meet the 3-year residency requirement',
  'You are an Irish citizen living in the UK or Ireland (Common Travel Area rights apply)',
  'You are a returning UK national family member from the EEA (specific criteria apply — contact LSOE)',
  'Pre-settled status holders usually need 3 years of continuous residency in the UK, Gibraltar, EEA or Switzerland',
];

const coursesCovered = [
  'Full-time undergraduate degrees (BA, BSc, BEng, LLB) — the most common funded course type',
  'Foundation degrees (FdA, FdSc) and Foundation Year programmes — ideal if you lack A-Levels',
  'Integrated master\'s degrees (MEng, MPharm) — funded as part of a single undergraduate programme',
  'Higher National Certificates (HNC) and Higher National Diplomas (HND) — practical vocational routes',
  'Certificates and Diplomas of Higher Education (CertHE, DipHE)',
  'Initial teacher training (ITT) — with additional bursaries available in some subjects',
  'Part-time degrees with pro-rata funding — study at reduced intensity alongside work',
  'Top-up degrees to convert an HND into a full honours degree — typically one year of funding',
];

const steps = [
  { title: 'Check your eligibility', detail: 'Use the LSOE free eligibility checker or review the SFE criteria. Confirming your status early avoids delays later.' },
  { title: 'Choose your course and university', detail: 'LSOE matches you with the right funded UK degree programme based on your background and career goals.' },
  { title: 'Apply to the university', detail: 'Submit your application with ID, qualifications and a personal statement. LSOE can help you write a strong one.' },
  { title: 'Create a Student Finance account', detail: 'Register at gov.uk/student-finance to start your SFE application — you can do this before you receive a university offer.' },
  { title: 'Submit your SFE application', detail: 'Include proof of residency, immigration status and course details. Apply at the same time as your university application.' },
  { title: 'Receive your approval letter', detail: 'SFE sends a funding confirmation letter showing your tuition fee loan and maintenance loan amounts.' },
  { title: 'Start your course', detail: 'Tuition is paid directly to your university; your maintenance loan arrives in three termly instalments throughout the year.' },
];

const categories = [
  { name: 'Business & Management Courses', href: '/courses/business' },
  { name: 'Health & Social Care Courses', href: '/courses/health' },
  { name: 'IT & Computing Courses', href: '/courses/computing' },
  { name: 'Law Courses', href: '/courses/law' },
  { name: 'Engineering Courses', href: '/courses/engineering' },
  { name: 'Foundation Year Courses', href: '/courses/foundation' },
];

const maintenanceLoan = [
  { location: 'Living at home (with parents)', amount: 'Up to £8,610', icon: '🏠' },
  { location: 'Living away from home, outside London', amount: 'Up to £10,227', icon: '🏙️' },
  { location: 'Living away from home, in London', amount: 'Up to £13,349', icon: '🏛️' },
  { location: 'Studying abroad (part of UK course)', amount: 'Up to £11,427', icon: '✈️' },
];

const trustStats = [
  { value: '2013', label: 'Established', sub: 'Over a decade of student support' },
  { value: '10,000+', label: 'Students Supported', sub: 'Across UK and internationally' },
  { value: '140+', label: 'University Partners', sub: 'Recognised UK institutions' },
  { value: '100%', label: 'Free Service', sub: 'No hidden fees, ever' },
];

const faqs = [
  {
    question: 'What is Student Finance England?',
    answer:
      'Student Finance England (SFE) is the official UK government student loan service that provides tuition fee loans and maintenance loans to eligible students studying higher education in England. It is not a scholarship — it is a government-backed loan system designed to make higher education accessible to everyone who qualifies.',
  },
  {
    question: 'Who qualifies for student finance eligibility UK?',
    answer:
      'UK and Irish citizens, people with settled or pre-settled status, refugees, and those with indefinite leave to remain — provided they have lived in the UK for at least 3 years before the course starts. You must also be studying an approved course at a recognised institution for the first time at that qualification level.',
  },
  {
    question: 'Can EU students still get Student Finance after Brexit?',
    answer:
      'Yes, but typically only EU students with settled status, pre-settled status (with 3 years UK/EEA residency), or Irish citizenship. New EU arrivals after 31 December 2021 are usually classed as international students and are not eligible for SFE funding. LSOE advisors can assess your specific situation.',
  },
  {
    question: 'Can I get Student Finance with pre-settled status?',
    answer:
      'Yes, in most cases. If you have pre-settled status under the EU Settlement Scheme and have been ordinarily resident in the UK, EEA or Switzerland for 3 years immediately before your course starts, you are likely eligible for both the tuition fee loan and the maintenance loan. Pre-settled status alone without the 3-year residency does not qualify.',
  },
  {
    question: 'How many years do I need to live in the UK for Student Finance?',
    answer:
      'The standard requirement is 3 years of ordinary residence in the UK (or Ireland, Channel Islands, Isle of Man) immediately before the first day of your course. For EU students with pre-settled status, the 3 years can include time in the EEA or Switzerland. Temporary absences for study or work abroad normally do not break the residency requirement.',
  },
  {
    question: 'What courses are covered by Student Finance UK?',
    answer:
      'Student Finance England funds full-time and part-time undergraduate degrees, foundation degrees, HNCs, HNDs, CertHE, DipHE, integrated master\'s degrees, initial teacher training, and top-up degrees. The course must be at a recognised UK higher education provider and must last at least 2 years to attract full funding.',
  },
  {
    question: 'Can I get Student Finance for part-time study?',
    answer:
      'Yes. Part-time students can apply for a pro-rata tuition fee loan if their course intensity is at least 25% of an equivalent full-time course. Maintenance loans are also available for part-time students enrolled at 25% intensity or above. Part-time funding allows you to work alongside your studies, which many mature students prefer.',
  },
  {
    question: 'How much can I borrow from Student Finance?',
    answer:
      'Tuition fee loans cover up to £9,535 per year for 2025/26. Maintenance loan amounts depend on household income, where you study, and where you live: up to £13,349 for London students living away from home, up to £10,227 outside London, or up to £8,610 if living with parents. Lower household income means a higher maintenance loan.',
  },
  {
    question: 'Do I have to repay Student Finance if I do not get a job?',
    answer:
      'No. Repayments are income-contingent — you only repay when your earnings exceed the threshold for your plan (currently £25,000 per year for Plan 5 / post-2023 starters). If you are unemployed, self-employed below the threshold, or earning under the limit, no repayments are taken. After 30–40 years, any remaining balance is written off automatically.',
  },
  {
    question: 'Can I get Student Finance for a second degree?',
    answer:
      'Usually no — the first-degree rule means SFE will not fund a full second undergraduate degree. However, exceptions exist: medicine, dentistry, teaching (PGCE), and HND-to-degree top-ups often qualify. Students who did not complete their first degree may also qualify for partial or full funding depending on the years already funded.',
  },
  {
    question: 'Can I get Student Finance without A-Levels?',
    answer:
      'Yes. A-Levels are not required for Student Finance — you only need to meet the residency and immigration criteria, and be accepted onto an approved higher education course. Many funded courses accept BTEC qualifications, Access to Higher Education diplomas, HND completions, or relevant work experience. Foundation Year programmes are specifically designed for students without traditional A-Level entry routes and are fully funded.',
  },
  {
    question: 'How long does a Student Finance application take?',
    answer:
      'Typically 6–8 weeks, though it can take longer during peak periods (June–September). Apply as early as possible — ideally 2–3 months before your course start date. You can apply before receiving a firm university offer. LSOE recommends submitting your SFE application at the same time as your university application.',
  },
];

export default function UkStudentFinanceCoursesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Student Finance', href: '/student-finance-uk' },
        { name: 'UK Student Finance Courses', href: '/uk-student-finance-courses' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.14),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Landmark className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-bold text-white">Student Finance England Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            UK Student Finance Courses — Study a Funded Degree in the UK (2026 Guide)
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-3">
            Most UK home students — and many eligible EU students — can study a full degree without paying fees upfront.
            Student Finance England covers your tuition and provides a maintenance loan for rent and living costs.
            LSOE helps you check student finance eligibility UK, choose funded courses UK, and apply with confidence — completely free.
          </p>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-8">
            This guide covers 2026 eligibility rules, maintenance loan amounts, foundation year routes, mature student funding, and a step-by-step application walkthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/am-i-eligible"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full font-black text-base hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-900/40"
            >
              Check Your Eligibility in 60 Seconds <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              Apply Now — It&apos;s Free
            </Link>
          </div>
          <p className="mt-4 text-emerald-400/80 text-xs font-medium">Free consultation · No obligation · Reply within 24 hours</p>
          <nav aria-label="breadcrumb" className="mt-8 pt-6 border-t border-white/10">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
              <li><Link href="/student-finance-uk" className="hover:text-slate-300 transition-colors">Student Finance</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
              <li className="text-slate-400 font-medium">UK Student Finance Courses</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── WHAT IS SFE ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-5">What Is Student Finance England?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Student Finance England (SFE) is the official UK government student loan service that funds university study for eligible students.
            It is not a scholarship you have to compete for — it is a right-based loan system that ensures anyone who qualifies can access higher education
            regardless of their financial background. SFE funds over one million students per year across England.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3 font-bold">Student Finance covers two main costs:</p>
          <ul className="space-y-3 mb-5">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700"><strong>Tuition Fee Loan</strong> — paid directly to your university (up to £9,535 per year for 2025/26). You never handle this money yourself.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700"><strong>Maintenance Loan</strong> — paid to your bank account each term to help cover rent, food, travel and study materials.</span>
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed">
            You only start repaying once you finish your course <strong>and</strong> earn above the income threshold.
            If you earn below the threshold — or never earn above it — you never repay a penny.
            This makes it one of the safest ways to finance a UK university education, and why it is described as &quot;study without paying fees UK&quot; in practical terms.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mt-3">
            For a complete breakdown of loan types, repayment plans (Plan 2 vs Plan 5), and interest rates, see our full{' '}
            <Link href="/student-finance-uk" className="font-bold text-brand-primary hover:underline">Student Finance UK guide</Link>.
          </p>
        </div>
      </section>

      {/* ── MAINTENANCE LOAN AMOUNTS ─────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
            <Wallet className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-emerald-800">2025/26 Amounts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Maximum Maintenance Loan in 2026 — How Much Can You Get?</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            The maintenance loan is income-assessed — the less your household earns, the more you receive.
            The amounts below are the <strong>maximum</strong> available for students with a household income of £25,000 or less (2025/26 academic year).
            Students from higher-income households receive a reduced amount, but everyone gets a minimum baseline.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {maintenanceLoan.map((item) => (
              <div key={item.location} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-xl font-black text-emerald-700 mb-1">{item.amount}</p>
                  <p className="text-sm text-slate-600">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Figures are maximums for 2025/26 for full-time undergraduate students with household income ≤ £25,000.
            Actual amounts vary by household income. London rate applies when your university is in the London weighting area.
            Check <a href="https://www.gov.uk/student-finance" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-primary hover:underline">gov.uk/student-finance</a> for your personalised estimate.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 text-center">Benefits of Studying with Student Finance</h2>
          <p className="text-slate-500 text-center mb-8 max-w-2xl mx-auto">
            Student Finance is designed to remove financial barriers. Here is why thousands of students use it every year.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((item) => (
              <div key={item} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UK HOME ELIGIBILITY ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Who Is Eligible for Student Finance UK?</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            To qualify for Student Finance England, you need to meet three core conditions: at least 3 years of UK residency,
            eligible immigration status, and an approved course. Meet all three and you are classed as a UK home student —
            entitled to both the tuition fee loan and the maintenance loan regardless of your family&apos;s income level.
          </p>
          <h3 className="text-xl font-black text-slate-900 mb-4">UK Home Student Eligibility</h3>
          <ul className="space-y-4 mb-6">
            {ukEligibility.map((item) => (
              <li key={item} className="bg-white rounded-2xl border border-slate-100 px-6 py-4 flex gap-3 hover:shadow-sm transition-all">
                <Wallet className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500 leading-relaxed">
            Already hold a UK degree? Funding for a second degree is limited, but exceptions apply (medicine, teaching, HND top-up).
            Use our <Link href="/am-i-eligible" className="font-bold text-brand-primary hover:underline">free eligibility checker</Link>
            {' '}or read the full <Link href="/student-finance-uk" className="font-bold text-brand-primary hover:underline">Student Finance UK guide</Link>.
          </p>
        </div>
      </section>

      {/* ── MID-PAGE CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-emerald-900 py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-black text-lg mb-1">Not sure if you qualify?</p>
            <p className="text-emerald-300 text-sm">Check your student finance eligibility in 60 seconds — it&apos;s free and takes no commitment.</p>
          </div>
          <Link
            href="/am-i-eligible"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-lg w-full sm:w-auto"
          >
            Check Eligibility Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── EU ELIGIBILITY ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
            <Users className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-emerald-800">For EU Students</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">EU Students — Can You Still Get Student Finance After Brexit?</h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Yes — many EU students still qualify, but the rules changed after 31 December 2020. Your eligibility depends on your
            immigration status and how long you have lived in the UK. Students with pre-settled or settled status who meet the
            3-year residency rule are treated the same as UK home students and can access the same funded courses UK.
          </p>
          <ul className="space-y-4 mb-6">
            {euEligibility.map((item) => (
              <li key={item} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3 hover:shadow-sm transition-all">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            New EU students arriving after 2021 without settled status are normally classed as <strong>international students</strong> and
            pay international fees — but LSOE can advise on alternative funded pathways and scholarships that may apply to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> Talk to an LSOE Advisor
            </Link>
            <Link
              href="/am-i-eligible"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-800 rounded-full font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              Check My Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Home vs EU vs International Students — Funding Comparison</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Understanding which category you fall into determines what funding you can access.
            The table below summarises the key differences between UK home, eligible EU, and international students.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[600px] text-sm bg-white">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">Category</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">UK Home Student</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">Eligible EU Student</th>
                  <th className="px-5 py-4 text-left font-black text-xs uppercase tracking-wider">International Student</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-700">SFE Eligibility</td>
                  <td className="px-5 py-4 text-emerald-700 font-semibold">✅ Full access</td>
                  <td className="px-5 py-4 text-emerald-700 font-semibold">✅ Conditional</td>
                  <td className="px-5 py-4 text-red-600 font-semibold">❌ Not eligible</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-700">Tuition Fee Loan</td>
                  <td className="px-5 py-4 text-slate-700">Up to £9,535/yr</td>
                  <td className="px-5 py-4 text-slate-700">Up to £9,535/yr</td>
                  <td className="px-5 py-4 text-slate-500">Not available</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-700">Maintenance Loan</td>
                  <td className="px-5 py-4 text-slate-700">Up to £13,349/yr</td>
                  <td className="px-5 py-4 text-slate-700">Up to £13,349/yr</td>
                  <td className="px-5 py-4 text-slate-500">Not available</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-700">Tuition Fee Rate</td>
                  <td className="px-5 py-4 text-slate-700">Home rate (≤ £9,535)</td>
                  <td className="px-5 py-4 text-slate-700">Home rate (≤ £9,535)</td>
                  <td className="px-5 py-4 text-slate-700">£12,000–£25,000+</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-700">Residency Requirement</td>
                  <td className="px-5 py-4 text-slate-700">3 yrs UK/Ireland</td>
                  <td className="px-5 py-4 text-slate-700">3 yrs UK/EEA/CH</td>
                  <td className="px-5 py-4 text-slate-500">Not applicable</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-700">Repayment</td>
                  <td className="px-5 py-4 text-slate-700">Income-contingent</td>
                  <td className="px-5 py-4 text-slate-700">Income-contingent</td>
                  <td className="px-5 py-4 text-slate-500">Paid upfront / own</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            EU eligibility applies to students with settled/pre-settled status who also meet the 3-year residency requirement.
            Speak to <Link href="/contact-us" className="font-bold text-brand-primary hover:underline">an LSOE advisor</Link> to confirm your exact category.
          </p>
        </div>
      </section>

      {/* ── NO A-LEVELS ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold text-blue-800">No A-Levels? No Problem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Can I Get Student Finance Without A-Levels?</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Yes — Student Finance England does not require A-Levels. Your loan eligibility is based entirely on your residency status
            and immigration status, not your previous qualifications. Universities set their own entry requirements, but there are many
            funded pathways that do not require A-Levels.
          </p>
          <p className="text-slate-700 mb-5 leading-relaxed">
            The most common alternative routes into funded higher education include:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: 'Foundation Year Programme', detail: 'A funded extra year before your degree. Designed for students without A-Levels or those returning to education. Fully covered by Student Finance.' },
              { title: 'Access to Higher Education Diploma', detail: 'A one-year qualification accepted by hundreds of UK universities as equivalent to A-Levels. Eligible for Advanced Learner Loans.' },
              { title: 'BTEC Level 3 Qualifications', detail: 'Extended Diploma (D*D*D* equivalent to AAA at A-Level) widely accepted for direct degree entry.' },
              { title: 'HND to Degree Top-Up', detail: 'If you already hold an HND, many universities offer a funded one-year top-up to a full honours degree.' },
            ].map((item) => (
              <li key={item.title} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3 hover:shadow-sm transition-all">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-slate-800 mb-0.5">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-500">
            Browse <Link href="/courses/foundation" className="font-bold text-brand-primary hover:underline">Foundation Year Courses</Link> at LSOE partner universities,
            or <Link href="/contact-us" className="font-bold text-brand-primary hover:underline">speak to an advisor</Link> about your options.
          </p>
        </div>
      </section>

      {/* ── MATURE STUDENTS ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-4">
            <Clock className="w-4 h-4 text-purple-700" />
            <span className="text-xs font-bold text-purple-800">Mature Students (25+)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Student Finance for Mature Students (Age 25+)</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            There is no upper age limit for Student Finance England. Whether you are 25, 45 or older, if you meet the residency
            and eligibility criteria you are entitled to the same tuition fee loan and maintenance loan as younger students.
            Age alone never disqualifies you.
          </p>
          <p className="text-slate-700 mb-5 leading-relaxed">
            Many mature students worry they are &quot;too old&quot; to go back into education — but Student Finance data shows a significant
            proportion of new starters are aged 25 and over. Part-time options also make it possible to study while working or
            managing family responsibilities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: '🎯', title: 'Same Eligibility Rules', body: 'Residency and immigration status — age is not a factor for SFE qualification.' },
              { icon: '⏰', title: 'Part-Time Funding Available', body: 'Study at 25–75% intensity and receive a pro-rata maintenance loan alongside your work.' },
              { icon: '📋', title: 'Work Experience Counts', body: 'Many universities accept relevant professional experience instead of traditional qualifications.' },
              { icon: '🔄', title: 'Career Change Support', body: 'Mature students changing careers are among the highest-retention groups in UK higher education.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="font-bold text-sm text-slate-800 mb-1">{item.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-slate-800 text-sm mb-1">Ready to return to education?</p>
              <p className="text-sm text-slate-600">Our advisors specialise in mature student applications. Free consultation, no commitment.</p>
            </div>
            <Link
              href="/contact-us"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Book Free Chat <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COURSES COVERED ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">What Courses Are Covered by Student Finance UK?</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Student Finance England funds a wide range of higher education qualifications at recognised UK universities.
            LSOE partners with institutions offering funded courses in Business, Computing, Health & Social Care, Accounting,
            Law, Education and Engineering. To attract full funding, courses generally need to last at least 2 years.
            Below are all the course types currently eligible for a UK government student loan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {coursesCovered.map((item) => (
              <div key={item} className="bg-slate-50 rounded-2xl border border-slate-100 p-5 flex gap-3 hover:shadow-sm transition-all">
                <BookOpen className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-black text-slate-900 mb-3 mt-4">Popular Funded Course Categories at LSOE Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-slate-50 rounded-2xl border border-slate-100 p-5 hover:border-brand-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <p className="font-bold text-sm text-slate-800 group-hover:text-brand-primary transition-colors">{cat.name}</p>
                <p className="text-xs text-slate-500 mt-1 group-hover:text-brand-primary/70 transition-colors">View courses →</p>
              </Link>
            ))}
          </div>
          <div className="text-sm text-slate-500">
            Also see <Link href="/courses" className="font-bold text-brand-primary hover:underline">all UK funded courses</Link> and our{' '}
            <Link href="/study-in-uk-local-students" className="font-bold text-brand-primary hover:underline">local student study guide</Link>.
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">How to Apply for Student Finance UK — Step by Step</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Apply early — processing can take 6–8 weeks during peak season (June–September).
            You can apply to Student Finance England at the same time as submitting your university application — you do not need to wait for an offer.
          </p>
          <ol className="space-y-4">
            {steps.map((step, idx) => (
              <li key={step.title} className="bg-white rounded-2xl border border-slate-100 p-5 flex gap-4 hover:shadow-sm transition-all">
                <div className="w-9 h-9 shrink-0 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm mb-1">{step.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-3">
            <FileCheck className="w-6 h-6 text-emerald-700 shrink-0" />
            <p className="text-sm text-emerald-900 leading-relaxed flex-1">
              Ready to start? <Link href="/am-i-eligible" className="font-bold underline">Check your eligibility</Link> first,
              then <Link href="/apply-now" className="font-bold underline">apply with LSOE</Link> for free end-to-end support.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY LSOE ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Why Choose LSOE?</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            LSOE is a specialist UK admissions consultancy with over a decade of experience helping home, EU and international students
            access funded UK degrees. Our service is completely free — we are funded by university partnerships, not student fees.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Official partner with accredited UK universities offering Student Finance England funded degrees',
              'Free eligibility check and one-to-one application support — no fees charged to students',
              'Specialist advisors for UK home students, settled-status applicants, pre-settled EU students, and mature learners',
              'End-to-end guidance — from choosing your funded course UK to submitting your SFE application',
              'Trusted by thousands of students across London, Hornchurch, Leeds and the wider UK since 2013',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg w-full sm:w-auto"
            >
              Apply Now with LSOE <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-full font-bold hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">Trusted Across the UK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Trusted by Students Across the UK</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Since 2013, LSOE has helped thousands of home and international students access funded UK university places.
            Our service is free, our advisors are specialists, and our results speak for themselves.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">{stat.value}</p>
              <p className="text-white font-bold text-sm mb-1">{stat.label}</p>
              <p className="text-slate-500 text-xs leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-8 flex flex-wrap justify-center gap-2">
          {['No hidden fees', 'Free consultation', 'Income-based repayment', 'UK government backed', 'British Council certified'].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-400">
              <Star className="w-3 h-3 text-emerald-400" /> {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-sm mb-8">Student finance eligibility UK — answers to the most common questions.</p>
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
            Have a question not listed here?{' '}
            <Link href="/contact-us" className="font-bold text-brand-primary hover:underline">Contact our team</Link> — we reply within 24 hours.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-primary py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Ready to Start Your Funded UK Study Journey?
          </h2>
          <p className="text-white/75 mb-3 leading-relaxed">
            Get course matching, student finance guidance, and application support from our London team — completely free of charge.
          </p>
          <p className="text-white/50 text-sm mb-10">Free consultation · No obligation · Our team replies within 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-black text-base hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto">
              Apply Now — It&apos;s Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/am-i-eligible" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-colors w-full sm:w-auto">
              <GraduationCap className="w-4 h-4" /> Check My Eligibility
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
          </div>
          <p className="mt-8 text-white/50 text-sm">
            <Link href="/apply-now" className="underline hover:text-white">Apply Now</Link> ·{' '}
            <Link href="/courses" className="underline hover:text-white">Browse Courses</Link> ·{' '}
            <Link href="/am-i-eligible" className="underline hover:text-white">Check Eligibility</Link> ·{' '}
            <Link href="/student-finance-uk" className="underline hover:text-white">Full Finance Guide</Link> ·{' '}
            <Link href="/contact-us" className="underline hover:text-white">Contact Us</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
