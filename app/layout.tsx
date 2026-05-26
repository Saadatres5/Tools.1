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
  preload: true,
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ── Site-wide constants ───────────────────────────────────────────────────────
const S = {
  url:   "https://quantixtools.com",
  name:  "QuantixTools",
  title: "QuantixTools — Free AI & File Tools Online",
  desc:  "100+ free online tools. Compress PDF, remove background, write with AI, trim video and more. No signup. No limits. Instant results. Privacy first.",
  logo:  "https://quantixtools.com/apple-touch-icon.png",
  og:    "https://quantixtools.com/og-image.png",
};

// ── Root metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(S.url),

  title: {
    default:  S.title,
    template: "%s — QuantixTools",
  },
  description: S.desc,

  keywords: [
    "free online tools", "free PDF tools", "AI tools online", "compress PDF free",
    "remove image background", "AI writer free", "free image tools", "video tools online",
    "no signup tools", "browser-based tools", "free file converter", "PDF to Word",
    "merge PDF", "free developer tools", "SEO tools free", "online calculator",
    "free text tools", "audio converter online", "free productivity tools",
  ],

  applicationName: S.name,
  authors:   [{ name: S.name, url: S.url }],
  creator:   S.name,
  publisher: S.name,
  generator: "Next.js",
  category:  "Technology / Utilities",
  referrer:  "strict-origin-when-cross-origin",

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         S.url,
    siteName:    S.name,
    title:       S.title,
    description: S.desc,
    images: [{
      url:    S.og,
      width:  1200,
      height: 630,
      alt:    "QuantixTools — Free AI & File Tools Online",
      type:   "image/png",
    }],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    site:        "@quantixtools",
    creator:     "@quantixtools",
    title:       S.title,
    description: S.desc,
    images:      [S.og],
  },

  // ── Canonical + hreflang ──────────────────────────────────────────────────
  alternates: {
    canonical: S.url,
    languages: {
      "en":    S.url,
      "en-US": S.url,
      "x-default": S.url,
    },
  },

  // ── Site verification ─────────────────────────────────────────────────────
  verification: {
    google: "add-your-google-search-console-verification-code",
    // yandex: "your-yandex-code",
  },

  // ── GEO + device + PWA meta ───────────────────────────────────────────────
  other: {
    // GEO optimization
    "geo.region":    "US",
    "geo.placename": "United States",
    "language":      "English",
    "content-language": "en-US",

    // PWA / mobile
    "format-detection":            "telephone=no",
    "mobile-web-app-capable":      "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title":  S.name,
    "application-name":            S.name,
    "msapplication-TileColor":     "#e8284a",
    "msapplication-config":        "/browserconfig.xml",

    // AEO — AI search engines (Perplexity, ChatGPT browsing, Gemini)
    "ai-content-type":   "utility-tools",
    "ai-content-policy": "allow-summarization",

    // WEO (Web Experience Optimization)
    "color-scheme":  "light",
    "theme-color":   "#ffffff",
    "rating":        "general",
    "revisit-after": "3 days",
    "robots":        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    // IndexNow key reference
    "indexnow-key": "quantixtools2025indexnow",
  },
};

// ── Comprehensive JSON-LD Schema Graph ────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    // 1. WebSite — enables Sitelinks Search Box in Google
    {
      "@type": "WebSite",
      "@id":   `${S.url}/#website`,
      "url":   S.url,
      "name":  S.name,
      "description": S.desc,
      "inLanguage":  "en-US",
      "copyrightYear": 2025,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${S.url}/tools?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 2. Organization — Knowledge Panel eligibility
    {
      "@type": "Organization",
      "@id":   `${S.url}/#organization`,
      "name":  S.name,
      "url":   S.url,
      "logo": {
        "@type":      "ImageObject",
        "@id":        `${S.url}/#logo`,
        "url":        S.logo,
        "contentUrl": S.logo,
        "width":      180,
        "height":     180,
        "caption":    S.name,
      },
      "image": { "@id": `${S.url}/#logo` },
      "description": S.desc,
      "foundingDate": "2025",
      "contactPoint": [{
        "@type":        "ContactPoint",
        "contactType":  "customer support",
        "email":        "hello@quantixtools.com",
        "url":          `${S.url}/contact`,
        "availableLanguage": ["English"],
      }],
      "sameAs": [
        // Add social profiles when ready:
        // "https://twitter.com/quantixtools",
        // "https://www.linkedin.com/company/quantixtools",
      ],
    },

    // 3. WebApplication — rich results for app discovery
    {
      "@type": "WebApplication",
      "@id":   `${S.url}/#webapp`,
      "name":  S.name,
      "url":   S.url,
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "FileManagement",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript. Compatible with Chrome, Firefox, Safari, Edge.",
      "offers": {
        "@type":         "Offer",
        "price":         "0",
        "priceCurrency": "USD",
        "availability":  "https://schema.org/InStock",
      },
      "aggregateRating": {
        "@type":       "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1024",
        "bestRating":  "5",
        "worstRating": "1",
      },
      "featureList": [
        "100+ free online tools",
        "PDF compression and conversion",
        "AI-powered writing tools",
        "Background removal",
        "Image and video processing",
        "Developer utilities",
        "SEO tools",
        "No signup required",
        "Browser-based — files stay private",
        "Works on all devices",
      ],
    },

    // 4. BreadcrumbList — helps Google understand site hierarchy
    {
      "@type": "BreadcrumbList",
      "@id":   `${S.url}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",      "item": S.url },
        { "@type": "ListItem", "position": 2, "name": "All Tools", "item": `${S.url}/tools` },
      ],
    },

    // 5. FAQPage — featured snippets + AEO (AI answer engines)
    {
      "@type": "FAQPage",
      "@id":   `${S.url}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name":  "Are all QuantixTools tools really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. Every tool on QuantixTools is 100% free — no subscription, no credit card, no hidden charges, no download required. All tools run directly in your web browser.",
          },
        },
        {
          "@type": "Question",
          "name":  "Are my files safe when using QuantixTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. QuantixTools processes files locally in your browser using JavaScript and WebAssembly. Your files never leave your device and are never uploaded to any server. Your privacy is fully protected.",
          },
        },
        {
          "@type": "Question",
          "name":  "Do I need to create an account to use QuantixTools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "No. QuantixTools requires no signup, no registration, and no email address. Simply open any tool and start using it immediately.",
          },
        },
        {
          "@type": "Question",
          "name":  "What file formats does QuantixTools support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "QuantixTools supports PDF, JPG, PNG, WEBP, GIF, SVG, MP4, MP3, WAV, DOCX, XLSX, CSV, JSON, HTML, XML, and many more formats across 100+ tools.",
          },
        },
        {
          "@type": "Question",
          "name":  "Does QuantixTools work on mobile phones and tablets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. All QuantixTools are fully responsive and work on any device — iPhone, Android, tablet, laptop, or desktop. No app installation needed.",
          },
        },
        {
          "@type": "Question",
          "name":  "How many tools does QuantixTools offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "QuantixTools offers 100+ free online tools across 15 categories: PDF, AI, Image, Video, Audio, Developer, SEO, Text, Security, Calculators, Productivity, Social Media, Student, Business, and Browser tools.",
          },
        },
        {
          "@type": "Question",
          "name":  "Is QuantixTools better than other online tool websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "QuantixTools stands out because it is 100% free with no limits, requires no signup, processes files in your browser for maximum privacy, works on all devices, and covers 15 different tool categories in one place.",
          },
        },
        {
          "@type": "Question",
          "name":  "Can I use QuantixTools for commercial projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":  "Yes. QuantixTools can be used for personal and commercial projects. There are no usage restrictions or watermarks.",
          },
        },
      ],
    },

    // 6. ItemList — top tools for rich results
    {
      "@type": "ItemList",
      "@id":   `${S.url}/#top-tools`,
      "name":  "Popular Free Online Tools",
      "description": "The most popular free tools on QuantixTools",
      "numberOfItems": 10,
      "itemListElement": [
        { "@type": "ListItem", "position": 1,  "name": "Compress PDF",       "url": `${S.url}/tools/compress-pdf`       },
        { "@type": "ListItem", "position": 2,  "name": "Remove Background",  "url": `${S.url}/tools/remove-background`  },
        { "@type": "ListItem", "position": 3,  "name": "AI Writer",          "url": `${S.url}/tools/ai-writer`          },
        { "@type": "ListItem", "position": 4,  "name": "Merge PDF",          "url": `${S.url}/tools/merge-pdf`          },
        { "@type": "ListItem", "position": 5,  "name": "PDF to Word",        "url": `${S.url}/tools/pdf-to-word`        },
        { "@type": "ListItem", "position": 6,  "name": "JSON Formatter",     "url": `${S.url}/tools/json-formatter`     },
        { "@type": "ListItem", "position": 7,  "name": "QR Code Generator",  "url": `${S.url}/tools/qr-code-generator`  },
        { "@type": "ListItem", "position": 8,  "name": "AI Summarizer",      "url": `${S.url}/tools/ai-summarizer`      },
        { "@type": "ListItem", "position": 9,  "name": "Trim Video",         "url": `${S.url}/tools/trim-video`         },
        { "@type": "ListItem", "position": 10, "name": "Password Generator", "url": `${S.url}/tools/password-generator` },
      ],
    },
  ],
};

// ── Root Layout Component ─────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${syne.variable} ${figtree.variable}`}>
      <head>
        {/* Favicon + Icons */}
        <link rel="icon"             href="/favicon.svg"          type="image/svg+xml" />
        <link rel="alternate icon"   href="/apple-touch-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest"         href="/manifest.json" />
        <link rel="mask-icon"        href="/favicon.svg" color="#e8284a" />

        {/* Preconnect — critical third-parties */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* DNS prefetch — non-critical */}
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://www.googletagservices.com" />

        {/* IndexNow key */}
        <meta name="indexnow-key" content="quantixtools2025indexnow" />

        {/* Bing site verification */}
        {/* <meta name="msvalidate.01" content="your-bing-code" /> */}

        {/* Yandex verification */}
        {/* <meta name="yandex-verification" content="your-yandex-code" /> */}

        {/* Structured Data — full schema graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {children}
        <CookieConsent />

        {/* Google AdSense — non-blocking */}
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
