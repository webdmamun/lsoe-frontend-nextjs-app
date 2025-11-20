import AdmissionNav from '@/components/shared/header/AdmissionNav';
import ServicesWeProvideBanner from '@/components/ServicesWeProvideCompo/ServicesWeProvideBanner';
import ServiceWeProvideDetails from '@/components/ServicesWeProvideCompo/ServiceWeProvideDetails';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Services We Provide - LSOE',
  description: 'Comprehensive overview of all services provided by London Source of Education.',
};

export default function ServicesWeProvidePage() {
  return (
    <>
      <AdmissionNav />
      <ServicesWeProvideBanner />
      <ServiceWeProvideDetails />
      <AdmissionFooter />
    </>
  );
}
