import AdmissionNav from '@/components/shared/header/AdmissionNav';
import ReferEarnForm from '@/components/PartnerWithUs/ReferEarnForm';
import AdmissionFooter from '@/components/shared/Footer/AdmissionFooter';

export const metadata = {
  title: 'Refer & Earn | LSOE - London Source of Education',
  description: 'Refer a friend to LSOE and earn rewards! Help someone achieve their study abroad dreams and get rewarded for successful referrals.',
  keywords: 'refer and earn, referral program, student referral, LSOE rewards, earn money referring students',
};

export default function ReferAndEarnPage() {
  return (
    <div className="bg-base-100">
      <AdmissionNav />
      <ReferEarnForm />
      <AdmissionFooter />
    </div>
  );
}
