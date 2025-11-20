import AdmissionNav from '@/components/shared/header/AdmissionNav';
import IntFormEmbedHub from '@/components/ApplyNowLeadCompo/IntCompo/IntFormEmbedHub';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Apply Now - International Students - LSOE',
  description: 'Apply for university admission as an international student. Start your UK education journey.',
};

export default function ApplyNowInternationalPage() {
  return (
    <>
      <AdmissionNav />
      <IntFormEmbedHub />
      <AdmissionFooter />
    </>
  );
}
