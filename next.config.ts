import type { NextConfig } from "next";

// ── Security headers applied to all routes ────────────────────────────────────
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control",  value: "on" },
  { key: "X-Frame-Options",         value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options",  value: "nosniff" },
  { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",      value: "camera=(self), microphone=(self), display-capture=(self), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy",   value: "same-origin-allow-popups" },
  { key: "Cross-Origin-Embedder-Policy", value: "unsafe-none" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: self + AdSense + analytics + unpkg (pdfjs worker)
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com https://adservice.google.com https://chart.googleapis.com https://unpkg.com https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Images: self + data URIs + blob + AdSense + Google APIs
      "img-src 'self' data: blob: https: https://chart.googleapis.com https://pagead2.googlesyndication.com https://www.google.com https://www.gstatic.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      // Connect: self + API services used by tools
      "connect-src 'self' https://pagead2.googlesyndication.com https://adservice.google.com https://speed.cloudflare.com https://www.cloudflare.com https://open.er-api.com https://unpkg.com https://cdn.jsdelivr.net https://api.anthropic.com",
      "media-src 'self' blob: mediastream:",
      // Workers: self + blob (for pdfjs, ffmpeg workers)
      "worker-src 'self' blob: https://unpkg.com https://cdn.jsdelivr.net",
      // Frames: AdSense iframes
      "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

// ── Cache headers for static assets ──────────────────────────────────────────
const cacheHeaders = [
  {
    source: "/favicon.svg",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=86400" }],
  },
  {
    source: "/apple-touch-icon.png",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
  },
  {
    source: "/og-image.png",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=3600" }],
  },
  {
    source: "/manifest.json",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
  },
  {
    source: "/_next/static/(.*)",
    headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,

  // ── Redirects: www → non-www, HTTP → HTTPS, common old URLs ──────────────
  async redirects() {
    return [
      // Redirect www to non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.quantixtools.com" }],
        destination: "https://quantixtools.com/:path*",
        permanent: true,
      },
      // Common old paths that might have been bookmarked
      {
        source: "/tool/:slug*",
        destination: "/tools/:slug*",
        permanent: true,
      },
      {
        source: "/pdf-tools",
        destination: "/tools/pdf",
        permanent: true,
      },
      {
        source: "/ai-tools",
        destination: "/tools/ai",
        permanent: true,
      },
      {
        source: "/image-tools",
        destination: "/tools/image",
        permanent: true,
      },
    ];
  },

  // ── Headers ───────────────────────────────────────────────────────────────
  async headers() {
    return [
      // Security headers on all pages
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Cache headers for static files
      ...cacheHeaders,
      // CORS for API routes (if any)
      {
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin",  value: "https://quantixtools.com" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },

  // ── Webpack config ────────────────────────────────────────────────────────
  webpack: (config) => {
    config.resolve.alias.canvas   = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
