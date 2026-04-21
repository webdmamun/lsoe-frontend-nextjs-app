import AdmissionNav from '@/components/shared/header/AdmissionNav';

import PrivacyPolicyDetails from '@/components/PrivacyPpolicyCompo/PrivacyPolicyDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  alternates: { canonical: '/privacy-policy' },
  title: 'Privacy Policy',
  description:
    'Read the London School of Excellence privacy policy. We are committed to protecting your personal data in line with UK GDPR and the Data Protection Act 2018.',
  openGraph: {
    title: 'Privacy Policy — London School of Excellence',
    description: 'How London School of Excellence collects, uses, and protects your personal data under UK GDPR.',
    url: '/privacy-policy',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Privacy Policy — London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — London School of Excellence',
    description: 'How LSOE collects, uses, and protects your personal data under UK GDPR.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AdmissionNav />

      <PrivacyPolicyDetails />
      <AdmissionFooter />
    </>
  );
}
