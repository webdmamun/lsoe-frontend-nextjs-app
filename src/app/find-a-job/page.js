import AdmissionNav from '@/components/shared/header/AdmissionNav';
import FindAJobBanner from '@/components/FindAJob/FindAJobBanner';
import FindAJobForm from '@/components/FindAJob/FindAJobForm';
import EmploymentFooter from '@/components/shared/Footer/EmploymentFooter';

export const metadata = {
  title: 'Find a Job - LSOE',
  description: 'Search and apply for jobs in the UK. Browse opportunities across various sectors.',
};

export default function FindAJobPage() {
  return (
    <>
      <AdmissionNav />
      <FindAJobBanner />
      <FindAJobForm />
      <EmploymentFooter />
    </>
  );
}
