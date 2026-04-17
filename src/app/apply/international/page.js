import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import ApplyNowForm from '@/components/ApplyNowCompo/ApplyNowForm';
import { Globe2 } from 'lucide-react';

export const metadata = {
  title: 'International Student Application — UK University Admissions',
  description:
    'Apply to a UK university from abroad with free expert support from London School of Excellence. Student Route visa guidance, UCAS admissions, accommodation support, and pre-arrival help for international students.',
  openGraph: {
    title: 'International Student Application — London School of Excellence',
    description:
      'Free UK university admissions support for international students. Visa guidance, UCAS, accommodation, and pre-arrival support from LSOE.',
    url: '/apply/international',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'International Student Application — LSOE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Student Application — London School of Excellence',
    description:
      'Free UK admissions support for international students. Visa, UCAS, accommodation, and pre-arrival guidance from LSOE.',
    images: ['/og-image.png'],
  },
};

export default function ApplyInternationalPage() {
  return (
    <>
      <AdmissionNav />
      <main className="bg-slate-50 min-h-screen pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
              <Globe2 className="w-4 h-4 text-sky-600" />
              <span className="text-sm font-bold text-sky-600">International Students</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-3">
              International University Application
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto">
              Applying to a UK university from outside the UK? Our advisors will guide you through
              the admissions process, Student Route visa requirements, and settling into UK student life — completely free.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <ApplyNowForm isStandalone={true} initialOrigin="international" />
          </div>
        </div>
      </main>
      <AdmissionFooter />
    </>
  );
}
