import AdmissionNav from '@/components/shared/header/AdmissionNav';

import SlaveryPolicy from '@/components/PrivacyPpolicyCompo/SlaveryPolicy';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  alternates: { canonical: '/modern-slavery-policy' },
  title: 'Modern Slavery Policy',
  description:
    'Read the London School of Excellence annual modern slavery and human trafficking statement. Our commitment to ethical business practices and prevention.',
  openGraph: {
    title: 'Modern Slavery Policy — London School of Excellence',
    description: 'Our commitment to preventing modern slavery and human trafficking. Annual statement from London School of Excellence.',
    url: '/modern-slavery-policy',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Modern Slavery Policy — London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Slavery Policy — London School of Excellence',
    description: 'Annual modern slavery and human trafficking statement from London School of Excellence.',
    images: ['/og-image.png'],
  },
};

export default function ModernSlaveryPolicyPage() {
  return (
    <>
      <AdmissionNav />

      <SlaveryPolicy />
      <AdmissionFooter />
    </>
  );
}
