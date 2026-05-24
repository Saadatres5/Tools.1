import { MetadataRoute } from "next";
import { allCategories } from "@/lib/tools-data";

const BASE_URL = "https://quantixtools.com";

// Use static dates — only update when content actually changes
const SITE_LAUNCH = new Date("2025-01-01");
const LAST_UPDATED = new Date("2025-05-01");

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                   lastModified: LAST_UPDATED, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/tools`,        lastModified: LAST_UPDATED, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/blog`,         lastModified: LAST_UPDATED, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/about`,        lastModified: SITE_LAUNCH,  changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/contact`,      lastModified: SITE_LAUNCH,  changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/privacy`,      lastModified: SITE_LAUNCH,  changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/terms`,        lastModified: SITE_LAUNCH,  changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`,   lastModified: SITE_LAUNCH,  changeFrequency: "monthly", priority: 0.2 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
    url: `${BASE_URL}${cat.href}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual tool pages
  const toolPages: MetadataRoute.Sitemap = allCategories.flatMap((cat) =>
    cat.tools.map((tool) => ({
      url: `${BASE_URL}${tool.href}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Blog posts
  const blogPosts = [
    { slug: "best-free-pdf-editor",              date: new Date("2025-01-15") },
    { slug: "ai-tools-for-students",             date: new Date("2025-01-20") },
    { slug: "compress-pdf-without-losing-quality",date: new Date("2024-12-10") },
    { slug: "remove-background-online-free",     date: new Date("2024-12-05") },
    { slug: "best-ai-summarizer-tools",          date: new Date("2024-11-20") },
  ];
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(({ slug, date }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...blogPages];
}
