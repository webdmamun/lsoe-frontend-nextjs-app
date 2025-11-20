import AdmissionNav from '@/components/shared/header/AdmissionNav';
import CareerHubCompoBanner from '@/components/CareerHubCompo/CareerHubCompoBanner';
import CertificateCourses from '@/components/CareerHubCompo/CertificateCourses';
import WhyBookAppointment from '@/components/CareerHubCompo/WhyBookAppointment';
import CalendlyBooking from '@/components/CareerHubCompo/CalendlyBooking';
import SuccessStories from '@/components/CareerHubCompo/SuccessStories';
import GlobalFooter from '@/components/shared/Footer/GlobalFooter';

export const metadata = {
  title: 'Career Hub - LSOE',
  description: 'Career development resources, guidance, and opportunities for professionals.',
};

export default function CareerHubPage() {
  return (
    <>
      <AdmissionNav />
      <CareerHubCompoBanner />
      <CertificateCourses />
      <WhyBookAppointment />
      <CalendlyBooking />
      <SuccessStories />
      <GlobalFooter />
    </>
  );
}
