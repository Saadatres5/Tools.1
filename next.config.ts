import type { NextConfig } from "next";

// ── Security + SEO headers ────────────────────────────────────────────────────
const securityHeaders = [
  // Security
  { key: "X-DNS-Prefetch-Control",    value: "on" },
  { key: "X-Frame-Options",           value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options",    value: "nosniff" },
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",        value: "camera=(self), microphone=(self), display-capture=(self), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy",    value: "same-origin-allow-popups" },
  { key: "Cross-Origin-Embedder-Policy",  value: "unsafe-none" },
  { key: "Cross-Origin-Resource-Policy",  value: "cross-origin" },

  // SEO — tell bots explicitly to index and follow
  { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

  // CSP — comprehensive whitelist
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' " +
        "https://pagead2.googlesyndication.com " +
        "https://www.googletagservices.com " +
        "https://adservice.google.com " +
        "https://chart.googleapis.com " +
        "https://unpkg.com " +
        "https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' " +
        "https://pagead2.googlesyndication.com " +
        "https://adservice.google.com " +
        "https://speed.cloudflare.com " +
        "https://open.er-api.com " +
        "https://unpkg.com " +
        "https://cdn.jsdelivr.net " +
        "https://api.anthropic.com " +
        "https://api.indexnow.org",
      "media-src 'self' blob: mediastream:",
      "worker-src 'self' blob: https://unpkg.com https://cdn.jsdelivr.net",
      "frame-src 'self' " +
        "https://googleads.g.doubleclick.net " +
        "https://tpc.googlesyndication.com " +
        "https://www.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

// ── Cache control headers ─────────────────────────────────────────────────────
const cacheHeaders = [
  {
    source: "/_next/static/(.*)",
    headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
  },
  {
    source: "/favicon.svg",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=86400" }],
  },
  {
    source: "/apple-touch-icon.png",
    headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
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
    source: "/robots.txt",
    headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
  },
  {
    source: "/sitemap.xml",
    headers: [{ key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=600" }],
  },
  {
    source: "/ads.txt",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },

  // ── 301 Redirects ────────────────────────────────────────────────────────
  async redirects() {
    return [
      // www → non-www
      {
        source:      "/:path*",
        has:         [{ type: "host", value: "www.quantixtools.com" }],
        destination: "https://quantixtools.com/:path*",
        permanent:   true,
      },
      // HTTP → HTTPS (for hosts that support this)
      {
        source:      "/:path*",
        has:         [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://quantixtools.com/:path*",
        permanent:   true,
      },
      // Legacy URL patterns → current
      { source: "/tool/:slug*",    destination: "/tools/:slug*",  permanent: true },
      { source: "/pdf-tools",      destination: "/tools/pdf",     permanent: true },
      { source: "/ai-tools",       destination: "/tools/ai",      permanent: true },
      { source: "/image-tools",    destination: "/tools/image",   permanent: true },
      { source: "/video-tools",    destination: "/tools/video",   permanent: true },
      { source: "/dev-tools",      destination: "/tools/developer", permanent: true },
      { source: "/developer-tools",destination: "/tools/developer", permanent: true },
      { source: "/seo-tools",      destination: "/tools/seo",     permanent: true },
      { source: "/calc",           destination: "/tools/calculators", permanent: true },
      // Old blog URL patterns
      { source: "/blog/posts/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/articles/:slug*",   destination: "/blog/:slug*", permanent: true },
      // Privacy / legal
      { source: "/privacy-policy",   destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms",   permanent: true },
    ];
  },

  // ── Response headers ─────────────────────────────────────────────────────
  async headers() {
    return [
      // Security + SEO headers on all routes
      {
        source:  "/(.*)",
        headers: securityHeaders,
      },
      // Cache headers for static assets
      ...cacheHeaders,
      // CORS for API routes
      {
        source:  "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin",  value: "https://quantixtools.com" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },

  // ── Webpack ──────────────────────────────────────────────────────────────
  webpack: (config) => {
    config.resolve.alias.canvas   = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
