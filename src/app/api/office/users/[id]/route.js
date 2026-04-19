import { NextResponse } from 'next/server';
import { deleteOfficeAdminUser } from '@/lib/officeUsersService';
import { getOfficeSession } from '@/lib/officeAuth';

function unauthorised() {
  return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
}

async function requireAdmin() {
  const session = await getOfficeSession();
  if (!session.isAuthenticated) return { ok: false, response: unauthorised() };
  return { ok: true, session };
}

export async function DELETE(_request, { params }) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  // params is a Promise in Next.js 15+ — must be awaited before accessing properties
  const { id } = await params;

  try {
    await deleteOfficeAdminUser(id, {
      currentUserId: auth.session.userId,
      currentEmail: auth.session.email,
    });

    return NextResponse.json({ success: true, message: 'Admin user deleted' });
  } catch (error) {
    console.error('[/api/office/users/[id]] DELETE error:', error);
    const code = error.code || '';

    if (code === 'NOT_FOUND') {
      return NextResponse.json({ success: false, error: error.message }, { status: 404 });
    }
    if (code === 'FORBIDDEN') {
      return NextResponse.json({ success: false, error: error.message }, { status: 403 });
    }
    if (code === 'VALIDATION_ERROR') {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
