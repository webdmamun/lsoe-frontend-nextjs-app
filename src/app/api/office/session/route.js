import { NextResponse } from 'next/server';
import { getOfficeSession } from '@/lib/officeAuth';

export async function GET() {
  const session = await getOfficeSession();
  if (!session.isAuthenticated) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    data: {
      role: session.role,
      email: session.email,
      name: session.name,
      userId: session.userId,
      source: session.source,
    },
  });
}

