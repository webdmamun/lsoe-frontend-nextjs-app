import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AqfGuideBanner from '@/components/AqfGuideCompo/AqfGuideBanner';
import AqfGuideDetails from '@/components/AqfGuideCompo/AqfGuideDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'AQF Guide | London School of Excellence',
  description: 'A comprehensive Australian Qualifications Framework (AQF) guide for international students. Understand qualification levels and paths with London School of Excellence.',
  keywords: 'AQF levels, Australian education guide, qualification framework, study abroad advice, London School of Excellence',
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
