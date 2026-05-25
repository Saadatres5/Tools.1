import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All crawlers: allow everything except private/system paths
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/*.json$",
        ],
      },
      {
        // Google bot: allow everything including images/scripts for rich results
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Google Image bot
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        // Bing
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Block AI scrapers that don't respect content
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "cohere-ai",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: "https://quantixtools.com/sitemap.xml",
    host: "https://quantixtools.com",
  };
}
