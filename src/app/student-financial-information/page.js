import AdmissionNav from '@/components/shared/header/AdmissionNav';
import CoverSFI from '@/components/StudentFinancialInformationCompo/CoverSFI';
import CollapseSFI from '@/components/StudentFinancialInformationCompo/CollapseSFI';
import UKVIBankBlogLinksSFI from '@/components/StudentFinancialInformationCompo/UKVIBankBlogLinksSFI';
import BlockquoteSFI from '@/components/StudentFinancialInformationCompo/BlockquoteSFI';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Student Financial Information - LSOE',
  description: 'Financial guidance for international students studying in the UK. Learn about funding, scholarships, and financial requirements.',
};

export default function StudentFinancialInformationPage() {
  return (
    <>
      <AdmissionNav />
      <CoverSFI />
      <CollapseSFI />
      <UKVIBankBlogLinksSFI />
      <BlockquoteSFI />
      <AdmissionFooter />
    </>
  );
}
