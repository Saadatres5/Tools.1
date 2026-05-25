import { MetadataRoute } from "next";
import { allCategories } from "@/lib/tools-data";

const BASE_URL = "https://quantixtools.com";

// Static dates — only update when page content actually changes
const DATES = {
  home:      new Date("2025-05-01"),
  tools:     new Date("2025-05-01"),
  blog:      new Date("2025-05-01"),
  category:  new Date("2025-05-01"),
  tool:      new Date("2025-05-01"),
  static:    new Date("2025-01-01"),
};

// Blog posts with accurate publish dates
const BLOG_POSTS = [
  { slug: "best-free-pdf-editor",               date: new Date("2025-01-15") },
  { slug: "ai-tools-for-students",              date: new Date("2025-01-20") },
  { slug: "compress-pdf-without-losing-quality", date: new Date("2024-12-10") },
  { slug: "remove-background-online-free",      date: new Date("2024-12-05") },
  { slug: "best-ai-summarizer-tools",           date: new Date("2024-11-20") },
];

export default function sitemap(): MetadataRoute.Sitemap {

  // ── 1. Core static pages ────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: DATES.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: DATES.tools,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: DATES.blog,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: DATES.static,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: DATES.static,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: DATES.static,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: DATES.static,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: DATES.static,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  // ── 2. Category pages ───────────────────────────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
    url: `${BASE_URL}${cat.href}`,
    lastModified: DATES.category,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // ── 3. Individual tool pages ─────────────────────────────────────────────────
  // Deduplicate by href (in case a tool appears in multiple categories)
  const seenHrefs = new Set<string>();
  const toolPages: MetadataRoute.Sitemap = allCategories
    .flatMap((cat) => cat.tools)
    .filter((tool) => {
      if (seenHrefs.has(tool.href)) return false;
      seenHrefs.add(tool.href);
      return true;
    })
    .map((tool) => ({
      url: `${BASE_URL}${tool.href}`,
      lastModified: DATES.tool,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  // ── 4. Blog post pages ──────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(({ slug, date }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...blogPages];
}
