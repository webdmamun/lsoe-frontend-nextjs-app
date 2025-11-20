import AdmissionNav from '@/components/shared/header/AdmissionNav';
import PrivacyPolicyBanner from '@/components/PrivacyPpolicyCompo/PrivacyPolicyBanner';
import PrivacyPolicyDetails from '@/components/PrivacyPpolicyCompo/PrivacyPolicyDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Privacy Policy - LSOE',
  description: 'Read our privacy policy and learn how we protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AdmissionNav />
      <PrivacyPolicyBanner />
      <PrivacyPolicyDetails />
      <AdmissionFooter />
    </>
  );
}
