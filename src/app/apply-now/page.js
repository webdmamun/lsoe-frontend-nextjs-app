import AdmissionNav from '@/components/shared/header/AdmissionNav';
import ApplyNowForm from '@/components/ApplyNowCompo/ApplyNowForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Apply Now | London School of Excellence',
  description: 'Begin your journey to a UK degree. Submit your application to the London School of Excellence for expert university placement and visa support.',
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
