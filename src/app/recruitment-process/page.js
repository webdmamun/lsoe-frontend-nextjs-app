import AdmissionNav from '@/components/shared/header/AdmissionNav';
import RecruitmentProcessBanner from '@/components/RecruitmentProcessCompo/RecruitmentProcessBanner';
import RecruitmentProcessDetails from '@/components/RecruitmentProcessCompo/RecruitmentProcessDetails';
import EmploymentFooter from '@/components/shared/Footer/EmploymentFooter';

export const metadata = {
  title: 'Recruitment Process - LSOE',
  description: 'Learn about our recruitment process and how we match talent with opportunities.',
};

export default function RecruitmentProcessPage() {
  return (
    <>
      <AdmissionNav />
      <RecruitmentProcessBanner />
      <RecruitmentProcessDetails />
      <EmploymentFooter />
    </>
  );
}
