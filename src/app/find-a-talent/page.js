import AdmissionNav from '@/components/shared/header/AdmissionNav';
import FindATalentBanner from '@/components/FindATalentCompo/FindATalentBanner';
import FindATalentForm from '@/components/FindATalentCompo/FindATalentForm';
import EmploymentFooter from '@/components/shared/Footer/EmploymentFooter';

export const metadata = {
  title: 'Find Talent - LSOE',
  description: 'Recruit talented professionals for your organization. Post jobs and find qualified candidates.',
};

export default function FindATalentPage() {
  return (
    <>
      <AdmissionNav />
      <FindATalentBanner />
      <FindATalentForm />
      <EmploymentFooter />
    </>
  );
}
