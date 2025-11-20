import AdmissionNav from '@/components/shared/header/AdmissionNav';
import NigeriaBanksCover from '@/components/TempBlogCompo/NigeriaBanksCompo/NigeriaBanksCover';
import NigeriaBankContent from '@/components/TempBlogCompo/NigeriaBanksCompo/NigeriaBankContent';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'UKBA Approved Banks in Nigeria - LSOE',
  description: 'Guide to UKBA approved banks and financial institutions in Nigeria for UK student visa applications.',
};

export default function NigeriaBanksPage() {
  return (
    <div>
      <AdmissionNav />
      <NigeriaBanksCover />
      <NigeriaBankContent />
      <AdmissionFooter />
    </div>
  );
}
