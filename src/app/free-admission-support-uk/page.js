import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, HandCoins, MessageCircle, ChevronRight } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/free-admission-support-uk' },
  title: 'Free Admission Support UK | No Hidden Fees Since 2013',
  description:
    'Get completely free UK university admission support from London School of Excellence. No hidden fees, no consultation charges, and trusted student guidance since 2013.',
  openGraph: {
    title: 'Free Admission Support UK | London School of Excellence',
    description:
      'No-fee university admission support in the UK. Trusted by students since 2013 with transparent guidance from LSOE.',
    url: '/free-admission-support-uk',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Free Admission Support UK — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Admission Support UK | LSOE',
    description:
      'Free UK admissions guidance with no hidden costs. Trusted support since 2013 from LSOE.',
    images: ['/og-image.png'],
  },
};

const benefits = [
  'No hidden fees: guidance, applications, and follow-up support are free',
  'Trusted support model serving UK and international learners since 2013',
  'Transparent advice on course fit, funding, and eligibility before you apply',
  'Application help that reduces mistakes and improves submission quality',
];

const eligibility = [
  'Support is available for UK Home, eligible EU, and international applicants',
  'Applicants must meet course and university entry criteria to progress',
  'Funding options depend on residency and personal circumstances',
  'We can still guide you toward alternatives if your first choice is not suitable',
];

const categories = [
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'Health & Social Care', href: '/courses/health' },
  { name: 'IT & Computing', href: '/courses/computing' },
  { name: 'Law', href: '/courses/law' },
  { name: 'Engineering', href: '/courses/engineering' },
  { name: 'Business Top-Up', href: '/courses/business-top-up' },
];

const trustSignals = [
  'Supporting students since 2013',
  '10,000+ students supported',
  '140+ university partners',
  '100% free consultation',
  'No hidden fees',
];

export default function FreeAdmissionSupportUkPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Free Admission Support UK', href: '/free-admission-support-uk' },
      ]} />
      <AdmissionNav isDark={true} />

      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.14),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">Trusted Since 2013</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Free Admission Support in the UK with No Hidden Fees
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            London School of Excellence has supported students since 2013 with fully free admissions guidance.
            You do not pay consultancy fees, application fees to us, or hidden service charges.
          </p>
          <nav aria-label="breadcrumb" className="mt-8 pt-6 border-t border-white/10">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
              <li className="text-slate-400 font-medium">Free Admission Support UK</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((item) => (
            <div key={item} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-3">
              <HandCoins className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Who Can Use This Free Service?</h2>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Start with <Link href="/am-i-eligible" className="font-bold text-brand-primary hover:underline">Am I Eligible?</Link>{' '}
            and review funding via <Link href="/student-finance-uk" className="font-bold text-brand-primary hover:underline">Student Finance UK</Link>.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-3">Courses We Commonly Support</h2>
          <p className="text-sm text-slate-500 mb-6">
            Explore popular categories and let our team help you choose the right route.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-primary/30 hover:shadow-sm transition-all">
                <p className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-500">
            You can also review <Link href="/useful-links" className="font-bold text-brand-primary hover:underline">all student resources</Link> and{' '}
            <Link href="/apply-uk-courses" className="font-bold text-brand-primary hover:underline">application steps for UK courses</Link>.
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

      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Use Our Free Admissions Service Today</h2>
          <p className="text-white/75 mb-8">
            No hidden costs. No pressure. Just practical guidance to help you start the right UK course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900 transition-colors">
              Talk to our team
            </Link>
          </div>
          <p className="mt-7 text-white/60 text-sm">
            Quick links: <Link href="/apply-now" className="underline hover:text-white">Apply Now</Link> ·{' '}
            <Link href="/courses" className="underline hover:text-white">Browse Courses</Link> ·{' '}
            <Link href="/am-i-eligible" className="underline hover:text-white">Check Eligibility</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
