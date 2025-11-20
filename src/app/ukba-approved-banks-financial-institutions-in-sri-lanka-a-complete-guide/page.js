import AdmissionNav from '@/components/shared/header/AdmissionNav';
import SriLankaBanksCover from '@/components/TempBlogCompo/SriLankaBanksCompo/SriLankaBanksCover';
import SriLankaBankContent from '@/components/TempBlogCompo/SriLankaBanksCompo/SriLankaBankContent';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'UKBA Approved Banks in Sri Lanka - LSOE',
  description: 'Complete guide to UKBA approved banks and financial institutions in Sri Lanka for UK student visa applications.',
};

export default function SriLankaBanksPage() {
  return (
    <div>
      <AdmissionNav />
      <SriLankaBanksCover />
      <SriLankaBankContent />
      <AdmissionFooter />
    </div>
  );
}
