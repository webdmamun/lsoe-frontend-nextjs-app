import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AboutBanner from '@/components/AdmissionAboutCompo/AboutBanner';
import AdmAboutDeails from '@/components/AdmissionAboutCompo/AdmAboutDetails';
import MissionVision from '@/components/AdmissionAboutCompo/MissionVision';
import OurGoal from '@/components/AdmissionAboutCompo/OurGoal';
import WhyRenowned from '@/components/AdmissionAboutCompo/WhyRenowned';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';
import AboutGallary from '@/components/AdmissionAboutCompo/AboutGallary';
import PartnerWithUs from '@/components/AdmissionAboutCompo/PartnerWithUs';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'About Us - LSOE',
  description: 'Learn about London Source of Education - Your gateway to UK education and employment opportunities.',
};

export default function AboutUsPage() {
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
