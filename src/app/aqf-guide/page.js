import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AqfGuideBanner from '@/components/AqfGuideCompo/AqfGuideBanner';
import AqfGuideDetails from '@/components/AqfGuideCompo/AqfGuideDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'AQF Guide',
  description: 'An overview of the Australian Qualifications Framework (AQF) for reference purposes.',
  robots: { index: false, follow: false },
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
