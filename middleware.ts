import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';
import { LucideIcon } from 'lucide-react';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const user = await verifyToken(token);

    if (!user) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    req.headers.set('x-user-id', user.id);
    return NextResponse.next();
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
};