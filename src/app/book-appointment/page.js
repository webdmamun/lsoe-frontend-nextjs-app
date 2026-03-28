import AdmissionNav from '@/components/shared/header/AdmissionNav';
import BookAppointmentHero from '@/components/BookAppoinmentCompo/BookAppointmentHero';
import AppointmentTypesCompo from '@/components/BookAppoinmentCompo/AppointmentTypesCompo';
import AppointmentFAQ from '@/components/BookAppoinmentCompo/AppointmentFAQ';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Book Appointment | London School of Excellence',
  description: 'Schedule a 1-on-1 consultation with our senior advisors. Start your UK education and career journey with the London School of Excellence admissions team.',
  keywords: 'educational advisor, book consultation, study abroad meeting, UK admission advice, LSOE consultancy',
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
