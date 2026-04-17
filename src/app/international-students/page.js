import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import BreadcrumbSchema from '@/components/common/BreadcrumbSchema';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Globe2,
  Plane,
  Home,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';

export const metadata = {
  title: 'International Students — UK University Admissions Support',
  description:
    'London School of Excellence helps international students apply to UK universities. Expert guidance on UK admissions, Student Route visa, accommodation, and pre-arrival support. Free service since 2013.',
  openGraph: {
    title: 'International Students — London School of Excellence',
    description:
      'Free UK university admissions support for international students. Visa guidance, UCAS applications, accommodation support, and pre-arrival help from LSOE.',
    url: '/international-students',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'International Students — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Students — London School of Excellence',
    description:
      'Free UK university admissions and visa support for international students from London School of Excellence.',
    images: ['/og-image.png'],
  },
};

const benefits = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'UK Admissions from Abroad',
    desc: 'We manage your full UK university application remotely, from course selection to offer acceptance — no need to travel until your visa is confirmed.',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Student Route Visa Guidance',
    desc: 'We explain the Student Route visa requirements, documentation, and timelines so your application is prepared correctly from the start.',
    bg: 'bg-brand-primary/10',
    iconColor: 'text-brand-primary',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Accommodation Support',
    desc: 'Finding student housing in the UK from abroad is difficult. We help identify safe, affordable options near your chosen institution.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'Arrival & Pre-Arrival Help',
    desc: 'From NHS registration to bank account setup, we provide pre-arrival checklists and guidance so you arrive prepared.',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
];

const included = [
  'Free initial consultation — online or by phone',
  'Course and university shortlisting for your profile',
  'UCAS application preparation and submission support',
  'Student Route visa document guidance',
  'CAS letter and Biometric Residence Permit (BRP) advice',
  'Accommodation search assistance',
  'Pre-arrival checklist and onboarding support',
];

export default function InternationalStudentsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'International Students', href: '/international-students' },
      ]} />
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 overflow-hidden pt-40 pb-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Globe2 className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-bold text-white">International Students</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Study in the UK — Expert Admissions Support from Abroad
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Applying to a UK university as an international student involves more than just an application.
            Our London-based advisors guide you through admissions, the Student Route visa, accommodation,
            and arrival — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply/international"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-full font-bold text-base shadow-lg hover:bg-sky-600 transition-all duration-300"
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
              How We Support International Students
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              End-to-end support from application to arrival — managed remotely wherever you are in the world.
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
                <CheckCircle2 className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular Courses for International Students */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Popular Courses for International Students
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm">
              These subject areas attract high numbers of international students at UK universities.
              LSOE provides free admissions support for all of them.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Foundation Year',       href: '/courses/foundation',    desc: 'Pathway to Year 1' },
              { name: 'Postgraduate',          href: '/courses/postgraduate',  desc: 'MBA, MSc & more' },
              { name: 'Business & Management', href: '/courses/business',      desc: '60+ programmes' },
              { name: 'IT & Computing',        href: '/courses/computing',     desc: 'High-demand tech roles' },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex flex-col items-center text-center bg-white border border-gray-100 hover:border-sky-400/40 hover:shadow-sm rounded-2xl p-5 transition-all"
              >
                <span className="font-black text-slate-800 group-hover:text-sky-600 text-sm transition-colors">
                  {cat.name}
                </span>
                <span className="text-slate-400 text-xs mt-1">{cat.desc}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm hover:underline"
            >
              Browse all UK courses <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Apply to a UK University?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Complete your application details online. Our team will reach out within one working day to discuss next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply/international"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
