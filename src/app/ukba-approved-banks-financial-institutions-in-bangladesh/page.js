import AdmissionNav from '@/components/shared/header/AdmissionNav';
import BDBankCover from '@/components/TempBlogCompo/BDBankCompo/BDBankCover';
import BDBankContent from '@/components/TempBlogCompo/BDBankCompo/BDBankContent';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'UKBA Approved Banks in Bangladesh - LSOE',
  description: 'Complete guide to UKBA approved banks and financial institutions in Bangladesh for UK student visa applications.',
};

export default function BDBanksPage() {
  return (
    <>
      <AdmissionNav />
      <BDBankCover />
      <BDBankContent />
      <AdmissionFooter />
    </>
  );
}
