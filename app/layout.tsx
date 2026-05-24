import type { Metadata, Viewport } from "next";
import { Syne, Figtree } from "next/font/google";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantixTools — Free AI & File Tools Online",
    description: "100+ free AI and file tools. No signup. Privacy first.",
    images: ["/og-image.png"],
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
      "logo": { "@type": "ImageObject", "url": "https://quantixtools.com/favicon.svg" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are all tools really free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% free. No signup, no credit card, no hidden fees — ever." } },
        { "@type": "Question", "name": "Are my files safe?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most tools process files directly in your browser — nothing is sent to our servers." } },
        { "@type": "Question", "name": "Do I need to create an account?", "acceptedAnswer": { "@type": "Answer", "text": "No account needed. Just open a tool and start using it immediately." } },
        { "@type": "Question", "name": "What file formats are supported?", "acceptedAnswer": { "@type": "Answer", "text": "We support all major formats: PDF, JPG, PNG, MP4, MP3, DOCX, and many more." } },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
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
