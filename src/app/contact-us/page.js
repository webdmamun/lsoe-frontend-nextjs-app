import AdmissionContactBanner from '@/components/AdmissionContactCompo/AdmissionContactBanner';
import AdmissionContactCard from '@/components/AdmissionContactCompo/AdmissionContactCard';
import ContactForm from '@/components/AdmissionContactCompo/ContactForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import AdmissionNav from '@/components/shared/header/AdmissionNav';

export const metadata = {
  title: 'Contact Us - LSOE',
  description: 'Get in touch with London Source of Education. Contact us for university admissions, student services, and educational guidance.',
};

export default function ContactUsPage() {
  return (
    <div>
      <AdmissionNav />
      <AdmissionContactBanner />
      <AdmissionContactCard />
      <ContactForm />
      <AdmissionFooter />
    </div>
  );
}
