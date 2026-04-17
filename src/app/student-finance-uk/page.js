import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Wallet, AlertCircle, GraduationCap, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Student Finance UK — Loans, Grants & Funding Explained',
  description:
    'Understand Student Finance England for UK and EU students. Tuition fee loans, maintenance loans, grants, repayment rules, and how to apply — explained by London School of Excellence.',
  openGraph: {
    title: 'Student Finance UK — London School of Excellence',
    description:
      'A clear guide to Student Finance England — tuition fee loans, maintenance loans, grants, repayment, and eligibility for UK Home students.',
    url: '/student-finance-uk',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Student Finance UK — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Finance UK — London School of Excellence',
    description:
      'Clear guide to Student Finance England — loans, grants, eligibility, and how to apply, explained by LSOE.',
    images: ['/og-image.png'],
  },
};

const loans = [
  {
    title: 'Tuition Fee Loan',
    amount: 'Up to £9,535 per year',
    desc: 'Paid directly to your university to cover tuition fees. You do not receive this money yourself. Repayment only starts once you earn above the threshold.',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
  },
  {
    title: 'Maintenance Loan',
    amount: 'Up to £13,348 per year',
    desc: 'Paid directly to you to cover living costs such as rent, food, and travel. The amount depends on household income and whether you live at home or away.',
    icon: <Wallet className="w-5 h-5" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

const repaymentFacts = [
  'Repayment begins only after you finish your course',
  'You must earn above £25,000 per year before repayments start (Plan 5)',
  'Repayments are 9% of income above the threshold',
  'Any unpaid balance is written off after 40 years',
  'If your income drops below the threshold, repayments pause automatically',
];

const eligibilityPoints = [
  'You must be a UK national or have settled/pre-settled status',
  'The course must be your first undergraduate degree',
  'The university must be recognised by Student Finance England',
  'You must be studying in England (different rules apply for Scotland, Wales, and Northern Ireland)',
  'EU students with settled status may qualify — check current eligibility rules',
];

export default function StudentFinanceUkPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Useful Links', href: '/useful-links' },
        { name: 'Student Finance UK', href: '/student-finance-uk' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Wallet className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold text-white">Student Finance England</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Student Finance UK — Loans, Grants & Funding Explained
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            If you are a UK Home student applying to university, Student Finance England
            provides loans to cover your tuition fees and living costs. Here is what you need to know.
          </p>
        </div>
      </section>

      {/* Loan types */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 text-center">
            Types of Student Finance Available
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {loans.map((loan) => (
              <div key={loan.title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${loan.bg} ${loan.color}`}>
                  {loan.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">{loan.title}</h3>
                <p className="text-brand-primary font-bold text-sm mb-3">{loan.amount}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{loan.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Note:</strong> Loan amounts change each academic year. Always check the official{' '}
              <a
                href="https://www.gov.uk/student-finance"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold hover:text-amber-900"
              >
                gov.uk/student-finance
              </a>{' '}
              website for the latest figures.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            Eligibility Requirements
          </h2>
          <ul className="space-y-4">
            {eligibilityPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 bg-slate-50 rounded-2xl px-6 py-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Repayment */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            How Repayment Works
          </h2>
          <p className="text-slate-500 mb-8 text-sm">
            Student loans work differently from commercial loans. Key facts:
          </p>
          <ul className="space-y-4">
            {repaymentFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                <span className="text-slate-700 text-sm">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Courses you can fund */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-slate-900 mb-2">
            Courses You Can Fund with Student Finance England
          </h2>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Student Finance England applies to full undergraduate programmes at qualifying UK universities.
            LSOE can help you apply for the right course and Student Finance at the same time — completely free.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Business & Management', href: '/courses/business' },
              { name: 'IT & Computing',        href: '/courses/computing' },
              { name: 'Health & Social Care',  href: '/courses/health' },
              { name: 'Law',                   href: '/courses/law' },
              { name: 'Engineering',           href: '/courses/engineering' },
              { name: 'Foundation Year',       href: '/courses/foundation' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-brand-primary/5 border border-gray-100 hover:border-brand-primary/20 rounded-xl transition-all"
              >
                <span className="text-sm font-bold text-slate-700 group-hover:text-brand-primary transition-colors">
                  {cat.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-primary transition-colors" />
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/courses" className="text-brand-primary text-sm font-bold hover:underline">
              Browse all UK courses →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Need help with your Student Finance application?
          </h2>
          <p className="text-white/70 mb-8">
            Our advisors explain Student Finance in plain English and help you apply correctly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply/uk-eu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply as UK / EU Student
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
          <p className="mt-8 text-white/50 text-sm">
            Also see:{' '}
            <Link href="/am-i-eligible" className="text-white/70 hover:text-white underline">Am I Eligible?</Link>
            {' · '}
            <Link href="/ucas-guide" className="text-white/70 hover:text-white underline">UCAS Guide</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
