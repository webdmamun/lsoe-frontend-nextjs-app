import { redirect } from 'next/navigation';
import OfficeUsersManager from '@/components/office/users/OfficeUsersManager';
import DashboardShell from '@/components/office/DashboardShell';
import { getOfficeSession, OFFICE_ROLES } from '@/lib/officeAuth';
import { ShieldOff } from 'lucide-react';

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
    return (
      <DashboardShell>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldOff className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-black text-slate-800 mb-2">Access Restricted</h2>
            <p className="text-sm text-slate-500">
              User management is only available to super admins.
              Contact your super admin if you need access.
            </p>
          </div>
        </div>
      </DashboardShell>
    );
  }

  return <OfficeUsersManager />;
}
