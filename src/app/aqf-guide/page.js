import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AqfGuideBanner from '@/components/AqfGuideCompo/AqfGuideBanner';
import AqfGuideDetails from '@/components/AqfGuideCompo/AqfGuideDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'AQF Guide - LSOE',
  description: 'Australian Qualifications Framework guide for international students.',
};

export default function AqfGuidePage() {
  return (
    <>
      <AdmissionNav />
      <AqfGuideBanner />
      <AqfGuideDetails />
      <AdmissionFooter />
    </>
  );
}
