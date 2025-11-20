import AdmissionNav from '@/components/shared/header/AdmissionNav';
import BookAppointmentHero from '@/components/BookAppoinmentCompo/BookAppointmentHero';
import AppointmentTypesCompo from '@/components/BookAppoinmentCompo/AppointmentTypesCompo';
import AppointmentFAQ from '@/components/BookAppoinmentCompo/AppointmentFAQ';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Book Appointment - LSOE',
  description: 'Book a consultation appointment with our education and career advisors.',
};

export default function BookAppointmentPage() {
  return (
    <>
      <AdmissionNav />
      <BookAppointmentHero />
      <AppointmentTypesCompo />
      <AppointmentFAQ />
      <AdmissionFooter />
    </>
  );
}
