import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import Link from 'next/link';
import { MapPin, Globe2, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Apply Now — Choose Your Application Path',
  description:
    'Start your UK university application with London School of Excellence. Choose the right path for UK / EU students or international applicants. Free expert support since 2013.',
  openGraph: {
    title: 'Apply Now — London School of Excellence',
    description:
      'Free UK university admissions support for Home, EU, and international students. Choose your application path and get started today.',
    url: '/apply-now',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Apply Now — London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply Now — London School of Excellence',
    description:
      'Free UK university admissions support for Home, EU, and international students. Choose your application path.',
    images: ['/og-image.png'],
  },
};

const paths = [
  {
    key: 'uk',
    label: 'UK / EU Students',
    emoji: '🇬🇧',
    href: '/apply/uk-eu',
    badge: 'Most Common',
    badgeColor: 'bg-brand-primary text-white',
    border: 'border-brand-primary/30 hover:border-brand-primary',
    bg: 'hover:bg-brand-primary/5',
    features: [
      'Student Finance England guidance',
      'UCAS application support',
      'Flexible study options',
      'Local UK-based advisor',
    ],
    cta: 'Start UK Application',
    ctaStyle:
      'bg-brand-primary text-white shadow-[0_8px_20px_rgba(1,39,89,0.2)] hover:shadow-[0_10px_30px_rgba(1,39,89,0.35)]',
    icon: <MapPin className="w-6 h-6" />,
    iconBg: 'bg-brand-primary/10 text-brand-primary',
  },
  {
    key: 'intl',
    label: 'International Students',
    emoji: '🌍',
    href: '/apply/international',
    badge: null,
    border: 'border-slate-200 hover:border-brand-secondary',
    bg: 'hover:bg-sky-50/50',
    features: [
      'Admissions support from abroad',
      'Student Route visa guidance',
      'Accommodation assistance',
      'Pre-arrival support',
    ],
    cta: 'Start International Application',
    ctaStyle:
      'bg-slate-800 text-white hover:bg-slate-900',
    icon: <Globe2 className="w-6 h-6" />,
    iconBg: 'bg-slate-100 text-slate-600',
  },
];

export default function ApplyNowPage() {
  return (
    <>
      <AdmissionNav />
      <main className="min-h-screen bg-slate-50 pt-36 pb-28 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              Free Admissions Support Since 2013
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-5">
              Choose Your Application Path
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              Tell us where you are based so we can connect you with the right guidance for your circumstances.
            </p>
          </div>

          {/* Path cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {paths.map((path) => (
              <Link
                key={path.key}
                href={path.href}
                className={`group relative flex flex-col p-8 bg-white rounded-3xl border-2 transition-all duration-300 shadow-sm hover:shadow-xl ${path.border} ${path.bg}`}
              >
                {path.badge && (
                  <span className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${path.badgeColor}`}>
                    {path.badge}
                  </span>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${path.iconBg}`}>
                  {path.icon}
                </div>

                <h2 className="text-xl font-black text-slate-900 mb-1">{path.label}</h2>

                <ul className="mt-4 mb-8 space-y-2.5">
                  {path.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${path.ctaStyle}`}
                >
                  {path.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Not sure link */}
          <p className="text-center text-slate-500 text-sm">
            Not sure which applies to you?{' '}
            <Link href="/contact-us" className="font-bold text-brand-primary hover:underline inline-flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              Talk to our team
            </Link>
          </p>
        </div>
      </main>
      <AdmissionFooter />
    </>
  );
}
