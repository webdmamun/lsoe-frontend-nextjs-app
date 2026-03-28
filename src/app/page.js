import AdmissionNav from '@/components/shared/header/AdmissionNav';
import GlobalBanner from '@/components/homeCompo/GlobalBanner/GlobalBanner';
import BannerBottom from '@/components/homeCompo/bannerBottom/BannerBottom';
import StudyDestinations from '@/components/homeCompo/studyDestinations/StudyDestinations';
import ComprehensiveSupportWUA from '@/components/WorldUniversityAdmissionCompo/ComprehensiveSupportWUA';
import ReviewsSection from '@/components/homeCompo/Reviews/ReviewsSection';
import EnquiryForm from '@/components/homeCompo/enquiryForm/EnquiryForm';
import ReferralProgram from '@/components/homeCompo/ReferralProgram/ReferralProgram';
import ApplicationProcess from '@/components/homeCompo/ApplicationProcess/ApplicationProcess';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';
import FAQSection from '@/components/homeCompo/faqCompo/FAQSection';
import NewsletterSignup from '@/components/homeCompo/newsletterSignup/NewsletterSignup';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'London School of Excellence | Your Gateway to Global UK Education',
  description: 'London School of Excellence providing world-class university admission services for both Home and International students. Get expert guidance for UCAS applications, free consultancy, and admission support at top UK universities.',
  keywords: 'UK education hub, Home student admission, international university placement, London School of Excellence, LSOE, study in UK, global education, admission support',
};

export default function HomePage() {
  return (
    <div className="bg-base-100">
      <AdmissionNav />
      <GlobalBanner />
      <BannerBottom />
      <StudyDestinations />
      <ComprehensiveSupportWUA />
      <ReviewsSection />
      <EnquiryForm />
      <ReferralProgram />
      <ApplicationProcess />
      <OurPartners />
      <FAQSection />
      <NewsletterSignup />
      <AdmissionFooter />
    </div>
  );
}

