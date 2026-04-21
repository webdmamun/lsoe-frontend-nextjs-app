import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import ApplyNowForm from '@/components/ApplyNowCompo/ApplyNowForm';
import { MapPin } from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/apply/uk-eu' },
  title: 'UK and EU Student Application — Free UCAS Support',
  description:
    'Apply to a UK university as a Home or EU student with free support from London School of Excellence. UCAS guidance, Student Finance England, and personal statement help from our local London advisors.',
  openGraph: {
    title: 'UK / EU Student Application — London School of Excellence',
    description:
      'Free UCAS support, Student Finance guidance, and local admissions help for UK Home and EU students. Start your application today.',
    url: '/apply/uk-eu',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'UK and EU Student Application — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK / EU Student Application — London School of Excellence',
    description:
      'Free UCAS support and Student Finance guidance for UK Home and EU students from LSOE.',
    images: ['/og-image.png'],
  },
};

export default function ApplyUkEuPage() {
  return (
    <>
      <AdmissionNav />
      <main className="bg-slate-50 min-h-screen pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-bold text-brand-primary">UK / EU Students</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-3">
              UK & EU University Application
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto">
              You&apos;re applying as a student based in the UK or EU. Our advisors will guide you
              through UCAS, Student Finance England, and finding the right course for you — completely free.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <ApplyNowForm isStandalone={true} initialOrigin="uk" />
          </div>
        </div>
      </main>
      <AdmissionFooter />
    </>
  );
}
