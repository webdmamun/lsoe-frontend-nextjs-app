import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import Link from 'next/link';
import { ArrowRight, Building2, MapPin, Globe2, GraduationCap, MessageCircle } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/partner-institutions' },
  title: 'Partner Institutions — UK Universities in Our Network',
  description:
    'London School of Excellence works with a trusted network of UK universities and colleges. We connect Home and international students with the right institution for their qualifications and goals.',
  openGraph: {
    title: 'Partner Institutions — London School of Excellence',
    description:
      'UK universities and colleges in the LSOE admissions network. We connect students with the right institution for their profile and goals.',
    url: '/partner-institutions',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Partner Institutions — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Institutions — London School of Excellence',
    description:
      'Browse UK universities in the LSOE admissions network and find the right institution for your qualifications.',
    images: ['/og-image.png'],
  },
};

const institutionCategories = [
  {
    title: 'London Universities',
    icon: <MapPin className="w-5 h-5" />,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10',
    desc: 'Institutions based in Greater London, offering flexible full-time, part-time, and evening study modes.',
    examples: [
      'University of East London',
      'London Metropolitan University',
      'University of Roehampton',
      'Middlesex University London',
      'University of West London',
      'London South Bank University',
    ],
  },
  {
    title: 'UK-Wide Universities',
    icon: <Globe2 className="w-5 h-5" />,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    desc: 'Partner universities across England, Scotland, Wales, and Northern Ireland.',
    examples: [
      'Coventry University',
      'University of Hertfordshire',
      'Anglia Ruskin University',
      'University of Bedfordshire',
      'Teesside University',
      'University of Suffolk',
    ],
  },
  {
    title: 'Further Education Colleges',
    icon: <Building2 className="w-5 h-5" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    desc: 'Colleges offering Higher National Certificates (HNC), Higher National Diplomas (HND), and Foundation Degrees.',
    examples: [
      'Barking & Dagenham College',
      'Havering College',
      'Tower Hamlets College',
      'Southwark College',
      'Newham College of Further Education',
    ],
  },
];

const benefits = [
  {
    title: 'Shortlisting Based on Your Profile',
    desc: 'We do not send you to every university. We match your qualifications, location, and goals to the most suitable institutions in our network.',
  },
  {
    title: 'Direct Liaison with Admissions Teams',
    desc: 'Our established relationships with admissions departments allow us to follow up on your application and chase decisions promptly.',
  },
  {
    title: 'Support Through Offer Stage',
    desc: 'Once you receive an offer, we help you understand the conditions, negotiate where possible, and plan your next steps.',
  },
];

export default function PartnerInstitutionsPage() {
  return (
    <>
      <AdmissionNav isDark={true} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-sky-900 pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Building2 className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-bold text-white">Our Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Partner Institutions — UK Universities & Colleges
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            LSOE works with a trusted network of UK universities and further education colleges.
            We connect Home and international students with the right institution based on their
            qualifications, location preferences, and course goals.
          </p>
        </div>
      </section>

      {/* Institution categories */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {institutionCategories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${cat.bg} ${cat.color}`}>
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">{cat.title}</h2>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.examples.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <GraduationCap className={`w-4 h-4 shrink-0 ${cat.color}`} />
                    <span className="text-slate-700 text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-slate-400 text-sm">
            This is a representative selection. Our full network is larger. Contact us to find out if your preferred institution is in our network.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-10 text-center">
            How Our Network Benefits You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title} className="text-center px-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Find the right university for you
          </h2>
          <p className="text-white/70 mb-8">
            Tell us your qualifications, preferred location, and the type of course you are interested in.
            We will shortlist the best-matched options from our network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
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
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <AdmissionFooter />
    </>
  );
}
