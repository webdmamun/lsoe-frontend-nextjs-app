import AdmissionNav from '@/components/shared/header/AdmissionNav';
import GlobalBanner from '@/components/homeCompo/GlobalBanner/GlobalBanner';
import BannerBottom from '@/components/homeCompo/bannerBottom/BannerBottom';
import StudyDestinations from '@/components/homeCompo/studyDestinations/StudyDestinations';
import Counter from '@/components/homeCompo/Counter/Counter';
import ReviewsSection from '@/components/homeCompo/Reviews/ReviewsSection';
import EnquiryForm from '@/components/homeCompo/enquiryForm/EnquiryForm';
import AssessmentWUA from '@/components/WorldUniversityAdmissionCompo/AssessmentWUA';
import StudentVisaAdviceWUA from '@/components/WorldUniversityAdmissionCompo/StudentVisaAdviceWUA';
import FinanceWUA from '@/components/WorldUniversityAdmissionCompo/FinanceWUA';
import AccommodationWUA from '@/components/WorldUniversityAdmissionCompo/AccommodationWUA';
import ReferralProgram from '@/components/homeCompo/ReferralProgram/ReferralProgram';
import AwardsSection from '@/components/homeCompo/Awards/AwardsSection';
import OurPartners from '@/components/AdmissionAboutCompo/OurPartners';
import FAQSection from '@/components/homeCompo/faqCompo/FAQSection';
import NewsletterSignup from '@/components/homeCompo/newsletterSignup/NewsletterSignup';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'LSOE - London Source of Excellence | Your Gateway to UK Education Worldwide',
  description: 'London Source of Excellence provides comprehensive university admission services for international students worldwide. Expert guidance for students from Nigeria, Bangladesh, India, Pakistan, and 15+ countries. Free consultancy, visa advice, and accommodation assistance.',
  keywords: 'UK education, international students, university admission, student visa, LSOE, London education, Nigeria students UK, Bangladesh students UK, India students UK, study abroad, UK universities',
};

export default function HomePage() {
  return (
    <div className="bg-base-100">
      <AdmissionNav />
      <GlobalBanner />
      <BannerBottom />
      <StudyDestinations />
      <Counter />
      <ReviewsSection />
      <EnquiryForm />
      <AssessmentWUA />
      <StudentVisaAdviceWUA />
      <FinanceWUA />
      <AccommodationWUA />
      <ReferralProgram />
      <AwardsSection />
      <OurPartners />
      <FAQSection />
      <NewsletterSignup />
      <AdmissionFooter />
    </div>
  );
}
