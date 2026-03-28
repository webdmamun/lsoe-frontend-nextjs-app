import AdmissionNav from '@/components/shared/header/AdmissionNav';

import SlaveryPolicy from '@/components/PrivacyPpolicyCompo/SlaveryPolicy';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Modern Slavery Policy | London School of Excellence',
  description: 'Our commitment to preventing modern slavery and human trafficking. Read the London School of Excellence anti-slavery statement.',
  keywords: 'anti-slavery policy, LSOE ethics, human trafficking statement, educational compliance',
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
