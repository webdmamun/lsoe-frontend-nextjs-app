import AdmissionNav from '@/components/shared/header/AdmissionNav';
import UACBanner from '@/components/UniversityAdmissionCompo/UACBanner';
import UACButtonGroup from '@/components/UniversityAdmissionCompo/UACButtonGroup';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'University Admission - LSOE',
  description: 'Apply for university admission in the UK with LSOE. We provide comprehensive support for international and UK/EU students.',
};

export default function UniversityAdmissionPage() {
  return (
    <>
      <AdmissionNav />
      <UACBanner />
      <UACButtonGroup />
      <AdmissionFooter />
    </>
  );
}
