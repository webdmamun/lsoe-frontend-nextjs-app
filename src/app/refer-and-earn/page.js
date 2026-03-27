import AdmissionNav from '@/components/shared/header/AdmissionNav';
import ReferEarnForm from '@/components/PartnerWithUs/ReferEarnForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Refer & Earn | London School of Excellence',
  description: 'Recommend students to the London School of Excellence and earn rewards. Help peers achieve their study abroad goals through our referral program.',
  keywords: 'refer and earn, LSOE rewards, student referral, study abroad rewards, education referral network',
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
