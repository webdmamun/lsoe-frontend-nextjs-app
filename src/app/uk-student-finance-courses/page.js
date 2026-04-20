import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Wallet, GraduationCap, MessageCircle, Landmark, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'UK Student Finance Courses | Funded Study Options for Home & EU Students',
  description:
    'Explore UK university courses that may be funded through Student Finance England. Learn funded study options, eligibility, and how London School of Excellence supports Home and eligible EU students for free.',
  openGraph: {
    title: 'UK Student Finance Courses | London School of Excellence',
    description:
      'Find UK courses linked to Student Finance England support. Understand eligibility, funded options, and your next step with free LSOE guidance.',
    url: '/uk-student-finance-courses',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'UK Student Finance Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Student Finance Courses | LSOE',
    description:
      'Student Finance England course pathways for UK and eligible EU students with free admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const benefits = [
  'Understand what Student Finance England can cover before you apply',
  'Match your profile to suitable UK universities and funded study routes',
  'Get guidance on tuition fee loans and maintenance loans in plain English',
  'Receive free application support from first enquiry to final enrolment',
];

const eligibility = [
  'UK Home students typically qualify for Student Finance England support',
  'Eligible EU students with settled or pre-settled status may also qualify',
  'Most learners must be starting their first undergraduate qualification',
  'Funding rules differ by nation, status, and previous study history',
];

const categories = [
  { name: 'Business & Management Courses', href: '/courses/business' },
  { name: 'Health & Social Care Courses', href: '/courses/health' },
  { name: 'IT & Computing Courses', href: '/courses/computing' },
  { name: 'Law Courses', href: '/courses/law' },
  { name: 'Engineering Courses', href: '/courses/engineering' },
  { name: 'Foundation Year Courses', href: '/courses/foundation' },
];

const faqs = [
  {
    question: 'Can UK local students apply for Student Finance England support?',
    answer:
      'Most UK Home students can apply for Student Finance England support, subject to personal circumstances and course eligibility.',
  },
  {
    question: 'Can eligible EU students access UK student finance?',
    answer:
      'Some EU students with settled or pre-settled status may qualify, depending on residency history and current rules.',
  },
  {
    question: 'Do I need to choose a course before checking finance options?',
    answer:
      'It is better to review course options and funding together so your final choice matches both eligibility and long-term goals.',
  },
];

const trustSignals = [
  'Supporting students since 2013',
  '10,000+ students supported',
  '140+ university partners',
  '100% free consultation',
  'No hidden fees',
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
        { name: 'UK Student Finance Courses', href: '/uk-student-finance-courses' },
      ]} />
      <AdmissionNav isDark={true} />

      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.14),transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Landmark className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-bold text-white">Student Finance England Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            UK Student Finance Courses for Home and Eligible EU Students
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Looking for UK courses that align with Student Finance England support? LSOE helps local and eligible EU students
            identify funded university pathways, check eligibility, and apply with confidence.
          </p>
          <nav aria-label="breadcrumb" className="mt-8 pt-6 border-t border-white/10">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
              <li className="text-slate-400 font-medium">UK Student Finance Courses</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((item) => (
            <div key={item} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Eligibility Snapshot</h2>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3">
                <Wallet className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500 leading-relaxed">
            Need details on your exact status? Use our <Link href="/am-i-eligible" className="font-bold text-brand-primary hover:underline">eligibility checker</Link>{' '}
            and full <Link href="/student-finance-uk" className="font-bold text-brand-primary hover:underline">Student Finance UK guide</Link>.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-3">Popular Course Categories with Funding Potential</h2>
          <p className="text-sm text-slate-500 mb-6">
            Browse high-demand subject areas and then talk to our team about funded options for your profile.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-brand-primary/30 hover:shadow-sm transition-all"
              >
                <p className="font-bold text-sm text-slate-800 group-hover:text-brand-primary transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Also see <Link href="/courses" className="font-bold text-brand-primary hover:underline">all UK courses</Link> and the{' '}
            <Link href="/study-in-uk-local-students" className="font-bold text-brand-primary hover:underline">local student study guide</Link>.
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-5">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-slate-800 text-sm">
                  {item.question}
                </summary>
                <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to Start Your Funded UK Study Journey?</h2>
          <p className="text-white/75 mb-8">
            Get course matching, finance guidance, and application support from our London team at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-full font-bold hover:bg-emerald-800 transition-colors">
              <GraduationCap className="w-4 h-4" /> Talk to our team
            </Link>
          </div>
          <p className="mt-7 text-white/60 text-sm">
            Next steps: <Link href="/apply-now" className="underline hover:text-white">Apply Now</Link> ·{' '}
            <Link href="/courses" className="underline hover:text-white">Browse Courses</Link> ·{' '}
            <Link href="/am-i-eligible" className="underline hover:text-white">Check Eligibility</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
