import AdmissionNav from '@/components/shared/header/AdmissionNav';
import EmpoyementHubBanner from '@/components/EmpoyementHubCompo/EmpoyementHubBanner';
import EmploymentABT from '@/components/EmpoyementHubCompo/EmploymentABT';
import WhyChoiceEmploymentHub from '@/components/EmpoyementHubCompo/WhyChoiceEmploymentHub';
import TrendingJobsCompo from '@/components/EmpoyementHubCompo/TrendingJobsCompo';
import SupportEMP from '@/components/EmpoyementHubCompo/SupportEMP';
import EmploymentFooter from '@/components/shared/Footer/EmploymentFooter';

export const metadata = {
  title: 'Employment Services - LSOE',
  description: 'Explore employment opportunities in the UK with LSOE Employment Hub.',
};

export default function EmploymentPage() {
  return (
    <>
      <AdmissionNav />
      <EmpoyementHubBanner />
      <EmploymentABT />
      <WhyChoiceEmploymentHub />
      <TrendingJobsCompo />
      <SupportEMP />
      <EmploymentFooter />
    </>
  );
}
