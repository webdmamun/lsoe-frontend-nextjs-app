import { NextResponse } from 'next/server';

export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/office-dashboard') || pathname.startsWith('/api/office')) {
    const token = request.cookies.get('admin_auth_token')?.value;
    const isAuthenticated = token === 'secure_authenticated_session';

    if (!isAuthenticated && pathname.startsWith('/api/office')) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    if (!isAuthenticated && pathname.startsWith('/office-dashboard')) {
      const loginUrl = new URL('/office-login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/office-dashboard/:path*', '/api/office/:path*'],
};
