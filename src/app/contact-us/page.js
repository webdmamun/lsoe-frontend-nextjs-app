import AdmissionContactBanner from '@/components/AdmissionContactCompo/AdmissionContactBanner';
import AdmissionContactCard from '@/components/AdmissionContactCompo/AdmissionContactCard';
import ContactForm from '@/components/AdmissionContactCompo/ContactForm';
import ContactMapSection from '@/components/AdmissionContactCompo/ContactMapSection';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import AdmissionNav from '@/components/shared/header/AdmissionNav';

export const metadata = {
  title: 'Contact Us | London School of Excellence',
  description: 'Get in touch with London School of Excellence. Our experts are ready to assist with UK university admissions, visa support, and student services.',
};

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      <AdmissionNav isDark={true} />
      <AdmissionContactBanner />
      <AdmissionContactCard />
      <ContactForm />
      <ContactMapSection />
      <AdmissionFooter />
    </div>
  );
}

