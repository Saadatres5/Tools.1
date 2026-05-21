import type { Metadata, Viewport } from "next";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quantixtools.com"),
  title: {
    default: "QuantixTools — Free AI & File Tools Online",
    template: "%s | QuantixTools",
  },
  description: "100+ free AI and file tools. Compress PDF, remove background, AI writer, video trimmer and more. No signup. No limits. Privacy first.",
  keywords: ["free pdf tools", "ai tools", "image tools", "compress pdf", "remove background", "ai writer", "online tools"],
  authors: [{ name: "QuantixTools" }],
  creator: "QuantixTools",
  publisher: "QuantixTools",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantixtools.com",
    siteName: "QuantixTools",
    title: "QuantixTools — Free AI & File Tools Online",
    description: "100+ free AI and file tools. No signup required. Privacy first.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantixTools — Free AI & File Tools Online",
    description: "100+ free AI and file tools. No signup. Privacy first.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "https://quantixtools.com" },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://quantixtools.com/#website",
      "url": "https://quantixtools.com",
      "name": "QuantixTools",
      "description": "100+ free AI and file tools online",
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://quantixtools.com/tools?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://quantixtools.com/#organization",
      "name": "QuantixTools",
      "url": "https://quantixtools.com",
      "logo": { "@type": "ImageObject", "url": "https://quantixtools.com/logo.png" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1017873487030471"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
