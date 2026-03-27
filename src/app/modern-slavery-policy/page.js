import AdmissionNav from '@/components/shared/header/AdmissionNav';

import SlaveryPolicy from '@/components/PrivacyPpolicyCompo/SlaveryPolicy';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Modern Slavery Policy - LSOE',
  description: 'Our commitment to preventing modern slavery and human trafficking.',
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
