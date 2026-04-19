import { createClient } from '@supabase/supabase-js';
import { OFFICE_ROLES } from '@/lib/officeAuth';

let supabaseServiceClient = null;

function getServiceClient() {
  if (supabaseServiceClient) return supabaseServiceClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRole) {
    throw new Error('Supabase service credentials are missing');
  }

  supabaseServiceClient = createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return supabaseServiceClient;
}

function normalizeRole(inputRole) {
  const role = String(inputRole || OFFICE_ROLES.ADMIN).toLowerCase();
  if (role === OFFICE_ROLES.SUPER_ADMIN) return OFFICE_ROLES.SUPER_ADMIN;
  return OFFICE_ROLES.ADMIN;
}

function mapAuthUser(user) {
  const role = normalizeRole(user?.app_metadata?.office_role || user?.user_metadata?.office_role);
  const fullName = user?.user_metadata?.full_name || user?.user_metadata?.name || '';

  return {
    id: user.id,
    name: fullName || user.email || 'Admin User',
    email: user.email || '',
    role,
    status: user?.email_confirmed_at ? 'active' : 'pending',
    createdAt: user?.created_at || null,
    source: 'supabase',
  };
}

function getEnvSuperAdminRecord() {
  const email = String(process.env.SUPER_ADMIN_EMAIL || '').trim().toLowerCase();
  const username = String(process.env.SUPER_ADMIN_USERNAME || '').trim();
  const label = email || username;
  if (!label) return null;

  return {
    id: 'env-super-admin',
    name: 'System Admin',
    email: email || username,
    role: OFFICE_ROLES.ADMIN,
    status: 'active',
    createdAt: null,
    source: 'env',
  };
}

function getEnvAdminRecord() {
  const email = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase();
  const username = String(process.env.ADMIN_USERNAME || '').trim();
  const label = email || username;
  if (!label) return null;

  // Don't duplicate if same identity as super admin env record
  const superEmail = String(process.env.SUPER_ADMIN_EMAIL || '').trim().toLowerCase();
  const superUsername = String(process.env.SUPER_ADMIN_USERNAME || '').trim();
  if (label === superEmail || (username && username === superUsername)) return null;

  return {
    id: 'env-admin',
    name: 'System Admin',
    email: email || username,
    role: OFFICE_ROLES.ADMIN,
    status: 'active',
    createdAt: null,
    source: 'env',
  };
}

function ensureValidPassword(password) {
  const value = String(password || '');
  if (value.length < 10) {
    const err = new Error('Password must be at least 10 characters long');
    err.code = 'VALIDATION_ERROR';
    throw err;
  }
  if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
    const err = new Error('Password must include uppercase, lowercase, and a number');
    err.code = 'VALIDATION_ERROR';
    throw err;
  }
}

export async function listOfficeAdminUsers({ search = '', role = 'all' } = {}) {
  const client = getServiceClient();
  const allUsers = [];
  let page = 1;
  const perPage = 200;
  let hasMore = true;

  while (hasMore) {
    const { data, error } = await client.auth.admin.listUsers({
      page,
      perPage,
    });
    if (error) throw error;

    const users = data?.users || [];
    allUsers.push(...users);
    hasMore = users.length === perPage;
    page += 1;
  }

  const allowedRoles = new Set([OFFICE_ROLES.ADMIN, OFFICE_ROLES.SUPER_ADMIN]);
  let mapped = allUsers
    .filter((user) => allowedRoles.has(normalizeRole(user?.app_metadata?.office_role || user?.user_metadata?.office_role)))
    .map(mapAuthUser);

  const envSuperAdmin = getEnvSuperAdminRecord();
  const envAdmin = getEnvAdminRecord();
  if (envSuperAdmin) mapped = [envSuperAdmin, ...mapped];
  if (envAdmin) mapped = [envAdmin, ...mapped];

  const query = String(search || '').trim().toLowerCase();
  if (query) {
    mapped = mapped.filter((user) =>
      user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    );
  }

  if (role !== 'all') {
    const targetRole = normalizeRole(role);
    mapped = mapped.filter((user) => user.role === targetRole);
  }

  mapped.sort((a, b) => {
    const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return bDate - aDate;
  });

  return mapped;
}

export async function createOfficeAdminUser({ fullName, email, password, role = OFFICE_ROLES.ADMIN }) {
  const safeFullName = String(fullName || '').trim();
  const safeEmail = String(email || '').trim().toLowerCase();
  const safeRole = normalizeRole(role);

  if (!safeFullName) {
    const err = new Error('Full name is required');
    err.code = 'VALIDATION_ERROR';
    throw err;
  }
  if (!safeEmail || !safeEmail.includes('@')) {
    const err = new Error('Valid email is required');
    err.code = 'VALIDATION_ERROR';
    throw err;
  }

  ensureValidPassword(password);

  const client = getServiceClient();
  const { data, error } = await client.auth.admin.createUser({
    email: safeEmail,
    password: String(password),
    email_confirm: true,
    user_metadata: {
      full_name: safeFullName,
    },
    app_metadata: {
      office_role: safeRole,
    },
  });

  if (error) {
    const message = String(error.message || '');
    if (message.toLowerCase().includes('already')) {
      const err = new Error('Email already exists');
      err.code = 'DUPLICATE_EMAIL';
      throw err;
    }
    throw error;
  }

  return mapAuthUser(data.user);
}

export async function deleteOfficeAdminUser(userId, { currentUserId = '', currentEmail = '' } = {}) {
  const id = String(userId || '').trim();
  if (!id) {
    const err = new Error('User id is required');
    err.code = 'VALIDATION_ERROR';
    throw err;
  }

  if (id === 'env-super-admin') {
    const err = new Error('Environment super admin cannot be deleted from dashboard');
    err.code = 'FORBIDDEN';
    throw err;
  }

  const client = getServiceClient();
  const { data, error } = await client.auth.admin.getUserById(id);
  if (error || !data?.user) {
    const err = new Error('User not found');
    err.code = 'NOT_FOUND';
    throw err;
  }

  const targetEmail = String(data.user.email || '').toLowerCase();
  if ((currentUserId && id === currentUserId) || (currentEmail && targetEmail === currentEmail.toLowerCase())) {
    const err = new Error('You cannot delete your own account');
    err.code = 'FORBIDDEN';
    throw err;
  }

  const { error: deleteError } = await client.auth.admin.deleteUser(id);
  if (deleteError) throw deleteError;

  return { id };
}

