import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: all well-behaved crawlers ──────────────────────────────
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/*.json$",
        ],
        crawlDelay: 1,
      },

      // ── Google: full access, no crawl delay ─────────────────────────────
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: ["/"],
      },
      {
        userAgent: "AdsBot-Google",
        allow: ["/"],
        disallow: ["/api/"],
      },

      // ── Bing / Microsoft ─────────────────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
        crawlDelay: 1,
      },
      {
        userAgent: "msnbot",
        allow: ["/"],
        disallow: ["/api/"],
      },

      // ── Apple ─────────────────────────────────────────────────────────────
      {
        userAgent: "Applebot",
        allow: ["/"],
        disallow: ["/api/"],
      },

      // ── DuckDuckGo ────────────────────────────────────────────────────────
      {
        userAgent: "DuckDuckBot",
        allow: ["/"],
        disallow: ["/api/"],
      },

      // ── Yandex ────────────────────────────────────────────────────────────
      {
        userAgent: "YandexBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
        crawlDelay: 2,
      },

      // ── Social media crawlers (for rich previews) ─────────────────────────
      {
        userAgent: "facebookexternalhit",
        allow: ["/"],
      },
      {
        userAgent: "Twitterbot",
        allow: ["/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: ["/"],
      },
      {
        userAgent: "WhatsApp",
        allow: ["/"],
      },
      {
        userAgent: "Slackbot",
        allow: ["/"],
      },

      // ── AI crawlers: allow read access for GEO/AEO (AI search visibility) ─
      {
        userAgent: "PerplexityBot",
        allow: ["/"],
        disallow: ["/api/"],
      },
      {
        userAgent: "YouBot",
        allow: ["/"],
        disallow: ["/api/"],
      },

      // ── Block harmful/data-mining bots ────────────────────────────────────
      {
        userAgent: [
          "GPTBot",           // OpenAI training
          "ChatGPT-User",     // ChatGPT browsing
          "CCBot",            // Common Crawl (used for AI training)
          "anthropic-ai",     // Anthropic training
          "Claude-Web",
          "cohere-ai",
          "Amazonbot",        // Amazon data mining
          "SemrushBot",       // Paid competitor tool
          "AhrefsBot",        // Paid competitor tool
          "DotBot",           // Moz
          "MJ12bot",          // Majestic
          "BLEXBot",          // Data mining
          "PetalBot",         // Huawei
        ],
        disallow: ["/"],
      },
    ],

    // Sitemap location
    sitemap: [
      "https://quantixtools.com/sitemap.xml",
    ],
  };
}
