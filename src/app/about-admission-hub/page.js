import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import AdmissionNav from '@/components/shared/header/AdmissionNav';
import OurGoal from '@/components/AdmissionAboutCompo/OurGoal';
import WhyRenowned from '@/components/AdmissionAboutCompo/WhyRenowned';
import MissionVision from '@/components/AdmissionAboutCompo/MissionVision';
import PartnerWithUs from '@/components/AdmissionAboutCompo/PartnerWithUs';
import AboutGallary from '@/components/AdmissionAboutCompo/AboutGallary';
import AboutBanner from '@/components/AdmissionAboutCompo/AboutBanner';
import AdmAboutDeails from '@/components/AdmissionAboutCompo/AdmAboutDetails';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';

export const metadata = {
  title: 'About Admission Hub - LSOE',
  description: 'Learn about LSOE Admission Hub - Your trusted partner for UK university admissions, student services, and educational guidance.',
};

export default function AboutAdmissionHubPage() {
  return (
    <>
      <AdmissionNav />
      <AboutBanner />
      <AdmAboutDeails />
      <MissionVision />
      <OurGoal />
      <WhyRenowned />
      <OurPartners />
      <AboutGallary />
      <PartnerWithUs />
      <AdmissionFooter />
    </>
  );
}
