import { redirect } from 'next/navigation';
import OfficeUsersManager from '@/components/office/users/OfficeUsersManager';
import { getOfficeSession } from '@/lib/officeAuth';

export const metadata = {
  title: 'User Management | LSOE Office Dashboard',
  description: 'Admin user management for office admins.',
  robots: { index: false, follow: false, nocache: true },
};

export default async function OfficeUsersPage() {
  const session = await getOfficeSession();

  if (!session.isAuthenticated) {
    redirect('/office-login');
  }

  return <OfficeUsersManager />;
}
