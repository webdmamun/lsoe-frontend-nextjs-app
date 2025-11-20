import AdmissionNav from '@/components/shared/header/AdmissionNav';
import StAcoBanner from '@/components/StudentAccommodationCompo/StAcoBanner';
import DetailsStudentsAcco from '@/components/StudentAccommodationCompo/DetailsStudentsAcco';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Student Accommodation - LSOE',
  description: 'Find suitable student accommodation in the UK. We help international students secure comfortable housing.',
};

export default function StudentAccommodationPage() {
  return (
    <>
      <AdmissionNav />
      <StAcoBanner />
      <DetailsStudentsAcco />
      <AdmissionFooter />
    </>
  );
}
