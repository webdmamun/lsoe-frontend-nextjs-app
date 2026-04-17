import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  GraduationCap,
  Wallet,
  Clock,
  Users,
  MessageCircle,
} from 'lucide-react';

export const metadata = {
  title: 'UK and EU Students — Free University Admissions Support',
  description:
    'London School of Excellence provides free UK university admissions support for Home and EU students. Expert guidance on UCAS applications, Student Finance England, and flexible study options since 2013.',
  openGraph: {
    title: 'UK / EU Students — London School of Excellence',
    description:
      'Free UCAS support, Student Finance England guidance, and local admissions help for UK Home and EU students. Expert support since 2013.',
    url: '/uk-eu-students',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'UK and EU Students — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK / EU Students — London School of Excellence',
    description:
      'Free UCAS support and Student Finance guidance for UK Home and EU students from LSOE.',
    images: ['/og-image.png'],
  },
};

const benefits = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Student Finance England',
    desc: 'We explain tuition fee loans, maintenance loans, and grant eligibility so you know exactly what financial support is available to you.',
    bg: 'bg-brand-primary/10',
    iconColor: 'text-brand-primary',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'UCAS Application Support',
    desc: 'From choosing the right courses to writing a compelling personal statement, we guide you through every stage of the UCAS process.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Study Options',
    desc: 'Explore weekend, evening, and part-time programmes designed for students who need to balance study with work or family commitments.',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Local UK-Based Support',
    desc: 'Our advisors are based in London and available for in-person and online consultations — no call centres, no automated responses.',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
];

const included = [
  'Free initial consultation — no fees charged',
  'Course shortlisting matched to your profile',
  'Personal statement review and feedback',
  'UCAS application tracking support',
  'Student Finance England eligibility check',
  'University offer negotiation where possible',
];

export default function UkEuStudentsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'UK / EU Students', href: '/uk-eu-students' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-primary overflow-hidden pt-40 pb-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(38,178,230,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm font-bold text-white">UK / EU Students</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Free University Admissions Support for UK & EU Students
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are applying for the first time or changing your career direction, our London-based advisors
            guide you through UCAS, Student Finance England, and everything in between — at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply/uk-eu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded-full font-bold text-base shadow-lg hover:shadow-brand-secondary/40 hover:brightness-110 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              How We Support UK & EU Students
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Tailored guidance at every step — from shortlisting courses to receiving your first offer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${b.bg} ${b.iconColor}`}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">What Is Included</h2>
            <p className="text-slate-500">Everything below is provided free of charge.</p>
          </div>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-slate-50 rounded-2xl px-6 py-4">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular UK Courses */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Popular Courses for UK &amp; EU Students
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm">
              Student Finance England applies to full undergraduate programmes at qualifying UK universities.
              Explore the most popular subject areas below.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Business & Management', href: '/courses/business',   desc: '60+ programmes' },
              { name: 'Health & Social Care',  href: '/courses/health',     desc: 'NHS-aligned courses' },
              { name: 'IT & Computing',        href: '/courses/computing',  desc: 'Tech & cyber courses' },
              { name: 'Law',                   href: '/courses/law',        desc: 'LLB & criminology' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex flex-col items-center text-center bg-white border border-gray-100 hover:border-brand-primary/30 hover:shadow-sm rounded-2xl p-5 transition-all"
              >
                <span className="font-black text-slate-800 group-hover:text-brand-primary text-sm transition-colors">
                  {cat.name}
                </span>
                <span className="text-slate-400 text-xs mt-1">{cat.desc}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:underline"
            >
              Browse all UK courses <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Start Your Application?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            It takes less than 5 minutes to fill in your details. Our team will be in touch within one working day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply/uk-eu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
