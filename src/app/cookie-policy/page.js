import React from 'react';
import AdmissionNav from '@/components/shared/header/AdmissionNav';
import CookiePolicy from '../../components/PrivacyPpolicyCompo/CookiePolicy';
import AdmissionFooter from '../../components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Cookie Policy - London School of Excellence',
  description: 'Learn about how we use cookies and similar tracking technologies to improve your experience on our website.',
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
