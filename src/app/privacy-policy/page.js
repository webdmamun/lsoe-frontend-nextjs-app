import AdmissionNav from '@/components/shared/header/AdmissionNav';

import PrivacyPolicyDetails from '@/components/PrivacyPpolicyCompo/PrivacyPolicyDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Privacy Policy | London School of Excellence',
  description: 'Learn how London School of Excellence protects your personal data through our comprehensive privacy policy and data protection protocols.',
  keywords: 'privacy policy, student data protection, GDPR compliance, LSOE privacy',
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
