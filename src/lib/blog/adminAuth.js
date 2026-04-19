import { isAdminAuthenticated as isOfficeAdminAuthenticated } from '@/lib/officeAuth';

export async function isAdminAuthenticated() {
  return isOfficeAdminAuthenticated();
}
