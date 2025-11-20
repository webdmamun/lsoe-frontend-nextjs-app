import AdmissionNav from '@/components/shared/header/AdmissionNav';
import EmploymentAboutBanner from '@/components/EmploymentAboutCompo/EmploymentAboutBanner';
import EmAboutDetails from '@/components/EmploymentAboutCompo/EmAboutDetails';
import MissionVissionEmpHub from '@/components/EmploymentAboutCompo/MissionVissionEmpHub';
import EmploymentFooter from '@/components/shared/Footer/EmploymentFooter';

export const metadata = {
  title: 'About Employment Hub - LSOE',
  description: 'Discover LSOE Employment Hub - Your partner for career opportunities and employment services in the UK.',
};

export default function AboutEmploymentHubPage() {
  return (
    <>
      <AdmissionNav />
      <EmploymentAboutBanner />
      <EmAboutDetails />
      <MissionVissionEmpHub />
      <EmploymentFooter />
    </>
  );
}
