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
  maximumScale: 5,
};

const SITE_URL = "https://quantixtools.com";
const SITE_NAME = "QuantixTools";
const SITE_TITLE = "QuantixTools — Free AI & File Tools Online";
const SITE_DESC = "100+ free online tools. Compress PDF, remove background, AI writer, trim video and more. No signup. No limits. Instant. Privacy first.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | QuantixTools",
  },

  description: SITE_DESC,

  keywords: [
    "free online tools", "free pdf tools", "ai tools online", "compress pdf",
    "remove background", "ai writer", "image tools", "video tools", "no signup tools",
    "browser based tools", "free file converter", "pdf to word", "merge pdf",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",

  // Robots — allow all, block nothing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuantixTools — Free AI & File Tools Online",
        type: "image/png",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    site: "@quantixtools",
    creator: "@quantixtools",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.png"],
  },

  // Canonical
  alternates: {
    canonical: SITE_URL,
    languages: { "en-US": SITE_URL },
  },

  // Verification (add your actual codes)
  verification: {
    google: "add-your-google-search-console-code-here",
    // yandex: "add-yandex-code",
    // bing is done via BingSiteAuth.xml in /public
  },

  // Geo
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": SITE_NAME,
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // WebSite with SearchAction
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "description": SITE_DESC,
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/tools?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // Organization
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon.svg`,
        "width": 512,
        "height": 512,
      },
      "sameAs": [
        // Add your social profiles here when ready
        // "https://twitter.com/quantixtools",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "hello@quantixtools.com",
        "availableLanguage": "English",
      },
    },

    // WebApplication (site-level)
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#webapp`,
      "name": SITE_NAME,
      "url": SITE_URL,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "featureList": [
        "PDF compression", "Background removal", "AI writing", "Image conversion",
        "Video trimming", "QR code generation", "File format conversion",
        "No signup required", "Browser-based processing", "Privacy first",
      ],
    },

    // BreadcrumbList for homepage
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "All Tools",
          "item": `${SITE_URL}/tools`,
        },
      ],
    },

    // FAQPage (homepage FAQ — key for featured snippets)
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are all QuantixTools tools really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every tool on QuantixTools is 100% free. No subscription, no credit card, no hidden charges — ever.",
          },
        },
        {
          "@type": "Question",
          "name": "Are my files safe when using QuantixTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Most tools process your files entirely inside your browser using JavaScript and WebAssembly. Your files never leave your device or get uploaded to any server.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to create an account to use QuantixTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No account is required. Simply open any tool and start using it immediately — no signup, no email, no registration.",
          },
        },
        {
          "@type": "Question",
          "name": "What file formats does QuantixTools support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "QuantixTools supports all major file formats including PDF, JPG, PNG, WEBP, MP4, MP3, DOCX, XLSX, CSV, JSON, SVG and many more across 100+ tools.",
          },
        },
        {
          "@type": "Question",
          "name": "Does QuantixTools work on mobile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all QuantixTools work fully on mobile browsers including Chrome, Safari, and Firefox on iOS and Android devices.",
          },
        },
        {
          "@type": "Question",
          "name": "How many tools does QuantixTools offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "QuantixTools offers 100+ free online tools across 15 categories including PDF tools, AI tools, image tools, video tools, developer tools, SEO tools, and more.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        {/* Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/apple-touch-icon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* DNS prefetch for third-party resources */}
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://www.googletagservices.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />

        {/* Google AdSense — lazy loaded to not block rendering */}
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
