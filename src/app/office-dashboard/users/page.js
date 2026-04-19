import { redirect } from 'next/navigation';
import OfficeUsersManager from '@/components/office/users/OfficeUsersManager';
import { getOfficeSession, OFFICE_ROLES } from '@/lib/officeAuth';

export const metadata = {
  title: 'User Management | LSOE Office Dashboard',
  description: 'Super-admin user management for office admins.',
  robots: { index: false, follow: false, nocache: true },
};

export default async function OfficeUsersPage() {
  const session = await getOfficeSession();

  if (!session.isAuthenticated) {
    redirect('/office-login');
  }

  if (session.role !== OFFICE_ROLES.SUPER_ADMIN) {
    redirect('/office-dashboard');
  }

  return <OfficeUsersManager />;
}

