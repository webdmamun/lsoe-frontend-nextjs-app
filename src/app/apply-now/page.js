import AdmissionNav from '@/components/shared/header/AdmissionNav';
import ApplyNowForm from '@/components/ApplyNowCompo/ApplyNowForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Apply Now - LSOE',
  description: 'Submit your application to the London School of Excellence.',
};

export default function ApplyNowPage() {
  return (
    <>
      <AdmissionNav />
      <ApplyNowForm />
      <AdmissionFooter />
    </>
  );
}
