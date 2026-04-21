import AdmissionContactBanner from '@/components/AdmissionContactCompo/AdmissionContactBanner';
import AdmissionContactCard from '@/components/AdmissionContactCompo/AdmissionContactCard';
import ContactForm from '@/components/AdmissionContactCompo/ContactForm';
import ContactMapSection from '@/components/AdmissionContactCompo/ContactMapSection';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';
import AdmissionNav from '@/components/shared/header/AdmissionNav';

export const metadata = {
  alternates: { canonical: '/contact-us' },
  title: 'Contact Us — London Office & Free Admissions Advice',
  description:
    'Contact London School of Excellence at our Hornchurch (London) or Leeds offices. Call, WhatsApp, or email for free UK university admissions advice.',
  openGraph: {
    title: 'Contact London School of Excellence',
    description:
      'Reach our admissions team by phone, WhatsApp, or email. London office at 5 Station Parade, Hornchurch, RM12 5AB. Free admissions guidance available.',
    url: '/contact-us',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Contact London School of Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact London School of Excellence',
    description:
      'Call, WhatsApp, or email our London admissions team. Free university admissions guidance for UK Home and international students.',
    images: ['/og-image.png'],
  },
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

