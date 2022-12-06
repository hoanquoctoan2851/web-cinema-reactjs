import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {jwtVerify } from 'jose';

const jwtSecret = process.env.JWT_ACCESS_TOKEN_SECRET || '283f01ccce922bcc2399e7f8ded981285963cec349daba382eb633c1b3a5f282'
const jwtDomain = process.env.JWT_COOKIE_DOMAIN || 'htt-atk'

const PUBLIC_FILE = /\.(.*)$/
export async function middleware(request: NextRequest) {
  const { cookies } = request
  const atk = cookies.get(jwtDomain)
  const jwt = atk?.value

  const {pathname} = request.nextUrl;
  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/dashboard')) {
    if (jwt === undefined) {
      request.nextUrl.pathname = '/login'
      return NextResponse.redirect(request.nextUrl);
    }

    try {
      await jwtVerify(jwt, new TextEncoder().encode(jwtSecret));
      return NextResponse.next();
    } catch (error) {
      request.nextUrl.pathname = '/login';
      return NextResponse.redirect(request.nextUrl);
    }
  }
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*'] }