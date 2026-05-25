import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";

  // 1. Force HTTPS (when not localhost)
  if (
    process.env.NODE_ENV === "production" &&
    request.headers.get("x-forwarded-proto") === "http"
  ) {
    return NextResponse.redirect(
      `https://${host}${url.pathname}${url.search}`,
      { status: 301 }
    );
  }

  // 2. www → non-www canonical redirect
  if (host.startsWith("www.")) {
    const newHost = host.slice(4);
    return NextResponse.redirect(
      `https://${newHost}${url.pathname}${url.search}`,
      { status: 301 }
    );
  }

  // 3. Remove trailing slash (except root)
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    return NextResponse.redirect(
      new URL(url.pathname.slice(0, -1) + url.search, request.url),
      { status: 301 }
    );
  }

  // 4. Lowercase URL enforcement (avoid duplicate content)
  if (url.pathname !== url.pathname.toLowerCase()) {
    return NextResponse.redirect(
      new URL(url.pathname.toLowerCase() + url.search, request.url),
      { status: 301 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|apple-touch-icon|og-image|manifest|robots|sitemap|ads\\.txt|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|otf|css|js|map)).*)",
  ],
};
