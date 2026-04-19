import { NextResponse } from 'next/server';
import { getOfficeSession, OFFICE_ROLES } from '@/lib/officeAuth';
import { createOfficeAdminUser, listOfficeAdminUsers } from '@/lib/officeUsersService';

function unauthorised() {
  return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
}

async function requireAdmin() {
  const session = await getOfficeSession();
  if (!session.isAuthenticated) return { ok: false, response: unauthorised() };
  return { ok: true, session };
}

export async function GET(request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const role = searchParams.get('role') || 'all';
    const data = await listOfficeAdminUsers({ search, role });

    return NextResponse.json({ success: true, data, total: data.length });
  } catch (error) {
    console.error('[/api/office/users] GET error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  try {
    const body = await request.json();
    const allowSuperAdminCreation = process.env.ALLOW_SUPER_ADMIN_CREATION === 'true';
    const roleFromBody = String(body.role || OFFICE_ROLES.ADMIN).toLowerCase();
    const role = allowSuperAdminCreation && roleFromBody === OFFICE_ROLES.SUPER_ADMIN
      ? OFFICE_ROLES.SUPER_ADMIN
      : OFFICE_ROLES.ADMIN;

    const created = await createOfficeAdminUser({
      fullName: body.fullName,
      email: body.email,
      password: body.password,
      role,
    });

    return NextResponse.json({ success: true, data: created }, { status: 201 });
  } catch (error) {
    console.error('[/api/office/users] POST error:', error);
    const code = error.code || '';

    if (code === 'VALIDATION_ERROR') {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    if (code === 'DUPLICATE_EMAIL') {
      return NextResponse.json({ success: false, error: error.message }, { status: 409 });
    }

    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

