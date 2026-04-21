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
  alternates: { canonical: '/about-us' },
  title: 'About Us — Trusted UK Admissions Consultancy Since 2013',
  description:
    'Since 2013, LSOE has helped 10,000+ students gain places at UK universities. Learn about our mission, expert advisors, and 140+ university partnerships.',
  openGraph: {
    title: 'About London School of Excellence — Trusted Since 2013',
    description:
      'Since 2013, LSOE has guided students into top UK universities. Discover our story, expert team, and commitment to every student\'s success.',
    url: '/about-us',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'About London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About London School of Excellence — Trusted Since 2013',
    description:
      'Since 2013, LSOE has helped students gain places at leading UK universities. Learn about our mission and team.',
    images: ['/og-image.png'],
  },
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
