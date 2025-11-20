import AdmissionNav from '@/components/shared/header/AdmissionNav';
import SVABanner from '@/components/StudentVisaAdviceCompo/SVABanner';
import SVACompo from '@/components/StudentVisaAdviceCompo/SVACompo';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Student Visa Advice - LSOE',
  description: 'Get expert student visa advice for studying in the UK. Comprehensive guidance for international students.',
};

export default function StudentVisaAdvicePage() {
  return (
    <>
      <AdmissionNav />
      <SVABanner />
      <SVACompo />
      <AdmissionFooter />
    </>
  );
}
