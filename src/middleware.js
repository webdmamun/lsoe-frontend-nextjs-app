import { NextResponse } from 'next/server';

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith('/office-dashboard')) {
    const token = request.cookies.get('admin_auth_token');
    
    if (!token) {
      const loginUrl = new URL('/office-login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/office-dashboard/:path*'],
};
