import AdmissionNav from '@/components/shared/header/AdmissionNav';
import PartnerWithUs from '@/components/AdmissionAboutCompo/PartnerWithUs';
import PartnerForm from '@/components/PartnerWithUs/PartnerForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Partner With Us | LSOE - London Source of Education',
  description: 'Join our team and earn incentives by referring students to our partner program. Become a sub-agent and collaborate with LSOE.',
  keywords: 'partner program, referral, sub-agent, LSOE partnership, education partnership',
};

export default function PartnerWithUsPage() {
  return (
    <div className="bg-base-100">
      <AdmissionNav />
      <PartnerWithUs />
      <PartnerForm />
      <AdmissionFooter />
    </div>
  );
}
