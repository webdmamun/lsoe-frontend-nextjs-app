import AdmissionNav from '@/components/shared/header/AdmissionNav';
import UKEUFormEmbedHub from '@/components/ApplyNowLeadCompo/UKEUCompo/UKEUFormEmbedHub';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Apply Now - UK/EU Students - LSOE',
  description: 'Apply for university admission as a UK or EU student.',
};

export default function ApplyNowUkEuPage() {
  return (
    <>
      <AdmissionNav />
      <UKEUFormEmbedHub />
      <AdmissionFooter />
    </>
  );
}
