import { MetadataRoute } from "next";
import { allCategories } from "@/lib/tools-data";

const BASE_URL = "https://toolsai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.2 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
    url: `${BASE_URL}${cat.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual tool pages
  const toolPages: MetadataRoute.Sitemap = allCategories.flatMap((cat) =>
    cat.tools.map((tool) => ({
      url: `${BASE_URL}${tool.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Blog posts
  const blogPosts = [
    "best-free-pdf-editor",
    "ai-tools-for-students",
    "compress-pdf-without-losing-quality",
    "remove-background-online-free",
    "best-ai-summarizer-tools",
  ];
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...blogPages];
}
