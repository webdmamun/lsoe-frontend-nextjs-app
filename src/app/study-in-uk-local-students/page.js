import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, Clock3, Users, MessageCircle, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Study in the UK for Local Students | Flexible University Pathways',
  description:
    'Already living in the UK? Explore flexible university pathways with free local admissions support from London School of Excellence. Compare part-time and full-time options, funding routes, and next steps.',
  openGraph: {
    title: 'Study in the UK for Local Students | London School of Excellence',
    description:
      'UK-based students can access flexible study routes, local guidance, and free admissions support from LSOE.',
    url: '/study-in-uk-local-students',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Study in the UK for Local Students — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in the UK for Local Students | LSOE',
    description:
      'Flexible study pathways for students already in the UK, with free local admissions support from LSOE.',
    images: ['/og-image.png'],
  },
};

const benefits = [
  {
    icon: <Clock3 className="w-5 h-5 text-amber-600" />,
    title: 'Flexible Study Options',
    desc: 'Choose from full-time, part-time, evening, and weekend routes based on your work and family commitments.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-brand-primary" />,
    title: 'Local London-Based Support',
    desc: 'Meet our team in person or online and get practical advice tailored to UK local student needs.',
  },
  {
    icon: <Users className="w-5 h-5 text-sky-600" />,
    title: 'Pathways for Career Changers',
    desc: 'Returning to study or switching sectors? We map realistic pathways into business, health, law, and computing.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
    title: 'Free End-to-End Guidance',
    desc: 'From choosing a course to final enrolment, our guidance remains free with no hidden charges.',
  },
];

const eligibility = [
  'Suitable for students already living in the UK and planning local university study',
  'Particularly relevant for UK Home students and settled/pre-settled status holders',
  'Mature learners and working professionals are welcome across many pathways',
  'Your route depends on qualifications, residency status, and chosen subject area',
];

const categories = [
  { name: 'Business & Management', href: '/courses/business' },
  { name: 'Health & Social Care', href: '/courses/health' },
  { name: 'IT & Computing', href: '/courses/computing' },
  { name: 'Law', href: '/courses/law' },
  { name: 'Foundation Year', href: '/courses/foundation' },
  { name: 'Postgraduate', href: '/courses/postgraduate' },
];

const trustSignals = [
  'Supporting students since 2013',
  '10,000+ students supported',
  '140+ university partners',
  '100% free consultation',
  'No hidden fees',
];

export default function StudyInUkLocalStudentsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Study in UK for Local Students', href: '/study-in-uk-local-students' },
      ]} />
      <AdmissionNav isDark={true} />

      <section className="relative bg-gradient-to-br from-slate-900 to-brand-primary pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(38,178,230,0.14),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">For Students Already in the UK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Study in the UK for Local Students
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            If you are already based in the UK, you may have access to flexible routes into university.
            LSOE helps local students compare study modes, funding options, and course pathways that fit real-life commitments.
          </p>
          <nav aria-label="breadcrumb" className="mt-8 pt-6 border-t border-white/10">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 opacity-30" /></li>
              <li className="text-slate-400 font-medium">Study in UK for Local Students</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center mb-4">{item.icon}</div>
              <h2 className="text-lg font-black text-slate-900 mb-2">{item.title}</h2>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">Eligibility and Study Planning</h2>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Start with <Link href="/am-i-eligible" className="font-bold text-brand-primary hover:underline">Am I Eligible?</Link>{' '}
            and review <Link href="/student-finance-uk" className="font-bold text-brand-primary hover:underline">Student Finance UK support</Link>.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-3">Explore Course Categories</h2>
          <p className="text-sm text-slate-500 mb-6">
            Choose a subject area, then we will help you identify flexible UK study pathways that fit your schedule.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="bg-white p-4 rounded-2xl border border-slate-100 hover:border-brand-primary/30 hover:shadow-sm transition-all">
                <p className="text-sm font-bold text-slate-800 hover:text-brand-primary transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Helpful pages: <Link href="/uk-eu-students" className="font-bold text-brand-primary hover:underline">UK / EU student guidance</Link> and{' '}
            <Link href="/apply-uk-courses" className="font-bold text-brand-primary hover:underline">UK course application steps</Link>.
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to Apply as a UK Local Student?</h2>
          <p className="text-white/75 mb-8">
            Tell us your current location, qualifications, and preferred subject. Our advisors will guide your next move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-now" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-700 text-white rounded-full font-bold hover:bg-sky-800 transition-colors">
              Talk to our team
            </Link>
          </div>
          <p className="mt-7 text-white/60 text-sm">
            Useful links: <Link href="/apply-now" className="underline hover:text-white">Apply Now</Link> ·{' '}
            <Link href="/courses" className="underline hover:text-white">Browse Courses</Link> ·{' '}
            <Link href="/am-i-eligible" className="underline hover:text-white">Check Eligibility</Link>
          </p>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
