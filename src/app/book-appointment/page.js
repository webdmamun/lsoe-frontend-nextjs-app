import AdmissionNav from '@/components/shared/header/AdmissionNav';
import BookAppointmentHero from '@/components/BookAppoinmentCompo/BookAppointmentHero';
import AppointmentTypesCompo from '@/components/BookAppoinmentCompo/AppointmentTypesCompo';
import AppointmentFAQ from '@/components/BookAppoinmentCompo/AppointmentFAQ';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Book Appointment | London School of Excellence',
  description: 'Schedule a 1-on-1 consultation with our senior advisors. Start your UK education and career journey, whether you are a Home or International student, with London School of Excellence.',
  keywords: 'educational advisor UK, book admission consultation, study abroad, Home student admission, UCAS advice',
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
