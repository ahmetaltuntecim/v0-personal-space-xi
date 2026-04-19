import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Capture device/OS/browser basic information natively with Next.js
  const { device, browser, os } = userAgent(request);
  
  // Extract client IP address accurately (also accommodates proxies like Vercel)
  const ip = request.ip || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
  
  // Extract full cookie string
  const cookies = request.headers.get('cookie') || '';
  
  // Capture the raw user agent string
  const uaString = request.headers.get('user-agent') || '';

  // To prevent slowing down the user experience, we send an async background request 
  // to our own API and do not await it.
  try {
    const origin = request.nextUrl.origin;
    fetch(`${origin}/api/log-visitor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ipAddress: ip,
        userAgent: uaString,
        device: JSON.stringify(device),
        os: JSON.stringify(os),
        browser: JSON.stringify(browser),
        cookies: cookies,
        sourceUrl: request.url,
      }),
      // signal: AbortSignal.timeout(2000) // optional 2s timeout
    }).catch(() => {
      // Ignore background errors so user isn't impacted
    });
  } catch (error) {
     // Failsafe
  }

  // Continue to the requested page natively
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes, to prevent loops)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions like .svg, .png, etc.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
