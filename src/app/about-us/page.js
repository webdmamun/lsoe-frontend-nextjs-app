import AdmissionNav from '@/components/shared/header/AdmissionNav';
import AboutBanner from '@/components/AdmissionAboutCompo/AboutBanner';
import AdmAboutDeails from '@/components/AdmissionAboutCompo/AdmAboutDetails';
import MissionVision from '@/components/AdmissionAboutCompo/MissionVision';
import WhyRenowned from '@/components/AdmissionAboutCompo/WhyRenowned';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';
import AboutGallary from '@/components/AdmissionAboutCompo/AboutGallary';
import PartnerWithUs from '@/components/AdmissionAboutCompo/PartnerWithUs';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'About Us | London School of Excellence',
  description: 'Learn about London School of Excellence - A premium UK education provider offering expert university admissions and global career opportunities.',
};

export default function AboutUsPage() {
  return (
    <>
      <AdmissionNav isDark={true} />
      <AboutBanner />
      <AdmAboutDeails />
      <MissionVision />
      <WhyRenowned />
      <OurPartners />
      <AboutGallary />
      <PartnerWithUs />
      <AdmissionFooter />
    </>
  );
}
