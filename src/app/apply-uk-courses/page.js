import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, ListChecks, MessageCircle, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Apply for UK Courses | Step-by-Step Admissions Support',
  description:
    'Apply for UK university courses with confidence. Follow a simple step-by-step application process with free support from London School of Excellence, including eligibility and student finance guidance.',
  openGraph: {
    title: 'Apply for UK Courses | London School of Excellence',
    description:
      'Simple UK course application steps with free expert support from LSOE, from eligibility checks to final submission.',
    url: '/apply-uk-courses',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Apply for UK Courses — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for UK Courses | LSOE',
    description:
      'Step-by-step UK course application support with free guidance from LSOE.',
    images: ['/og-image.png'],
  },
};

const steps = [
  'Choose your preferred subject area and course goals',
  'Check your eligibility and supporting documents',
  'Confirm funding route, including Student Finance England where relevant',
  'Submit your application with advisor review before final submission',
];

const eligibility = [
  'Academic requirements vary by course and university',
  'Residency status affects student finance and tuition category',
  'English language proof may be required for some applicants',
  'Mature and non-traditional backgrounds can still be considered',
];

const categories = [
  { name: 'Business Courses', href: '/courses/business' },
  { name: 'Health Courses', href: '/courses/health' },
  { name: 'Computing Courses', href: '/courses/computing' },
  { name: 'Law Courses', href: '/courses/law' },
  { name: 'Engineering Courses', href: '/courses/engineering' },
  { name: 'Postgraduate Courses', href: '/courses/postgraduate' },
];

const faqs = [
  {
    question: 'Can I apply for UK courses with LSOE support for free?',
    answer:
      'Yes. LSOE application guidance is free for students, with no hidden consultancy charges.',
  },
  {
    question: 'Should I check eligibility before applying?',
    answer:
      'Yes. Checking eligibility first helps you choose suitable courses and avoid avoidable application delays.',
  },
  {
    question: 'Can I apply if I am a mature learner or changing career?',
    answer:
      'Yes. Many UK universities consider mature applicants and career changers when entry criteria are met.',
  },
];

const trustSignals = [
  'Supporting students since 2013',
  '10,000+ students supported',
  '140+ university partners',
  '100% free consultation',
  'No hidden fees',
];

export default function ApplyUkCoursesPage() {
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
        { name: 'Apply UK Courses', href: '/apply-uk-courses' },
      ]} />
      <AdmissionNav isDark={true} />
      <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-3 flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          <span className="text-slate-800 font-medium">Apply UK Courses</span>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-slate-900 to-brand-primary pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.14),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <ClipboardCheck className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Simple Application Route</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Apply for UK Courses in Simple Steps
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you are a first-time applicant or returning to study, LSOE helps you complete each stage clearly,
            correctly, and on time. Our application support is free.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Step-by-Step Application Process</h2>
          <ul className="space-y-4">
            {steps.map((step, idx) => (
              <li key={step} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm font-black shrink-0">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Eligibility Checks Before You Apply</h2>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Complete these checks first: <Link href="/am-i-eligible" className="font-bold text-brand-primary hover:underline">Am I Eligible?</Link>{' '}
            and <Link href="/student-finance-uk" className="font-bold text-brand-primary hover:underline">Student Finance UK guide</Link>.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-3">Choose a Course Category</h2>
          <p className="text-sm text-slate-500 mb-6">Start with a subject area and we will guide your full application journey.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-primary/30 hover:shadow-sm transition-all">
                <p className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Helpful pages: <Link href="/uk-student-finance-courses" className="font-bold text-brand-primary hover:underline">UK student finance courses</Link>{' '}
            and <Link href="/study-in-uk-local-students" className="font-bold text-brand-primary hover:underline">study in the UK for local students</Link>.
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Start Your UK Course Application Today</h2>
          <p className="text-white/75 mb-8">
            We help you apply correctly the first time and keep your process moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-700 text-white rounded-full font-bold hover:bg-sky-800 transition-colors">
              <ListChecks className="w-4 h-4" /> Talk to our team
            </Link>
          </div>
          <p className="mt-7 text-white/60 text-sm">
            Direct links: <Link href="/apply-now" className="underline hover:text-white">Apply Now</Link> ·{' '}
            <Link href="/courses" className="underline hover:text-white">Browse Courses</Link> ·{' '}
            <Link href="/am-i-eligible" className="underline hover:text-white">Check Eligibility</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
