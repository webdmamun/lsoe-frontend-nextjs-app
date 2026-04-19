import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';
import { OFFICE_ROLES, clearOfficeAuthCookies, setOfficeAuthCookies } from '@/lib/officeAuth';

function getSupabaseAnonClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return null;
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function resolveEnvCredentials() {
  const superAdmin = {
    username: String(process.env.SUPER_ADMIN_USERNAME || '').trim(),
    password: String(process.env.SUPER_ADMIN_PASSWORD || '').trim(),
    email: String(process.env.SUPER_ADMIN_EMAIL || '').trim().toLowerCase(),
  };

  const admin = {
    username: String(process.env.ADMIN_USERNAME || '').trim(),
    password: String(process.env.ADMIN_PASSWORD || '').trim(),
    email: String(process.env.ADMIN_EMAIL || '').trim().toLowerCase(),
  };

  return { superAdmin, admin };
}

async function loginWithSupabase(identifier, password) {
  const client = getSupabaseAnonClient();
  if (!client) return null;

  const normalized = String(identifier || '').trim().toLowerCase();
  if (!normalized.includes('@')) return null;

  const { data, error } = await client.auth.signInWithPassword({
    email: normalized,
    password: String(password || ''),
  });

  if (error || !data?.user) return null;

  const role = String(data.user.app_metadata?.office_role || data.user.user_metadata?.office_role || '').toLowerCase();
  if (![OFFICE_ROLES.ADMIN, OFFICE_ROLES.SUPER_ADMIN].includes(role)) return null;

  return {
    role,
    email: data.user.email || normalized,
    name: data.user.user_metadata?.full_name || data.user.user_metadata?.name || data.user.email || 'Admin User',
    userId: data.user.id,
    source: 'supabase',
  };
}

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const inputIdentifier = String(username || '').trim();
    const inputPassword = String(password || '');
    const { superAdmin, admin } = resolveEnvCredentials();

    if (
      superAdmin.username &&
      superAdmin.password &&
      (inputIdentifier === superAdmin.username || inputIdentifier.toLowerCase() === superAdmin.email) &&
      inputPassword === superAdmin.password
    ) {
      await setOfficeAuthCookies({
        role: OFFICE_ROLES.SUPER_ADMIN,
        email: superAdmin.email || inputIdentifier.toLowerCase(),
        name: 'Super Admin',
        source: 'env',
      });
      return NextResponse.json({ success: true });
    }

    if (
      admin.username &&
      admin.password &&
      (inputIdentifier === admin.username || inputIdentifier.toLowerCase() === admin.email) &&
      inputPassword === admin.password
    ) {
      await setOfficeAuthCookies({
        role: OFFICE_ROLES.ADMIN,
        email: admin.email || inputIdentifier.toLowerCase(),
        name: 'Admin User',
        source: 'env',
      });
      return NextResponse.json({ success: true });
    }

    const supabaseLogin = await loginWithSupabase(inputIdentifier, inputPassword);
    if (supabaseLogin) {
      await setOfficeAuthCookies(supabaseLogin);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE() {
  await clearOfficeAuthCookies();
  return NextResponse.json({ success: true, message: "Logged out successfully" });
}
