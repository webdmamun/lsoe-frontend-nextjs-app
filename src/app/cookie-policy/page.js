import React from 'react';
import AdmissionNav from '@/components/shared/header/AdmissionNav';
import CookiePolicy from '../../components/PrivacyPpolicyCompo/CookiePolicy';
import AdmissionFooter from '../../components/shared/Footer/AdmissionFooter';

export const metadata = {
  alternates: { canonical: '/cookie-policy' },
  title: 'Cookie Policy',
  description:
    'Learn how London School of Excellence uses cookies and similar tracking technologies on its website, and how to manage your preferences.',
  openGraph: {
    title: 'Cookie Policy — London School of Excellence',
    description: 'How LSOE uses cookies on its website and your options for managing cookie preferences.',
    url: '/cookie-policy',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Cookie Policy — London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy — London School of Excellence',
    description: 'How LSOE uses cookies on its website and your options for managing cookie preferences.',
    images: ['/og-image.png'],
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <AdmissionNav />
      <div className="flex-1">
        <CookiePolicy />
      </div>
      <AdmissionFooter />
    </main>
  );
}
