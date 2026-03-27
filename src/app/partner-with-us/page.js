import AdmissionNav from '@/components/shared/header/AdmissionNav';
import PartnerWithUs from '@/components/AdmissionAboutCompo/PartnerWithUs';
import PartnerForm from '@/components/PartnerWithUs/PartnerForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Partner With Us | London School of Excellence',
  description: 'Join the London School of Excellence global network. Partner with a premier UK educational hub to refer students and earn incentives.',
  keywords: 'education partnership, recruitment agent, UK university partner, LSOE collaboration, sub-agent program',
};

export default function PartnerWithUsPage() {
  return (
    <div className="bg-base-100">
      <AdmissionNav isDark={true} />
      <PartnerWithUs />
      <PartnerForm />
      <AdmissionFooter />
    </div>
  );
}
