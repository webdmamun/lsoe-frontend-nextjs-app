import AdmissionNav from '@/components/shared/header/AdmissionNav';
import ReferEarnForm from '@/components/PartnerWithUs/ReferEarnForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  alternates: { canonical: '/refer-and-earn' },
  title: 'Refer and Earn — Student Referral Programme',
  description:
    'Refer a student to London School of Excellence and earn financial rewards. Help friends and peers access free UK university admissions support through our student referral programme.',
  openGraph: {
    title: 'Refer and Earn — London School of Excellence Referral Programme',
    description:
      'Earn rewards by referring students to LSOE. Help peers access free UK university admissions support and get paid for every successful referral.',
    url: '/refer-and-earn',
    images: [{ url: '/og-image.png', width: 1024, height: 1024, alt: 'Refer and Earn — LSOE Referral Programme' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refer and Earn — London School of Excellence',
    description:
      'Earn rewards for every student you refer to LSOE. Free UK university admissions support for your friends, financial rewards for you.',
    images: ['/og-image.png'],
  },
};

export default function ReferAndEarnPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <AdmissionNav isDark={true} />
      <ReferEarnForm />
      <AdmissionFooter />
    </div>
  );
}
