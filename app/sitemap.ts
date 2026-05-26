import { MetadataRoute } from "next";
import { allCategories } from "@/lib/tools-data";

const BASE = "https://quantixtools.com";

// ── Date constants — update when content changes ──────────────────────────────
const D = {
  home:     "2025-05-24",
  tools:    "2025-05-24",
  blog:     "2025-05-01",
  category: "2025-05-24",
  tool:     "2025-05-01",
  static:   "2025-01-01",
};

// ── Blog posts ────────────────────────────────────────────────────────────────
const BLOGS = [
  { slug: "best-free-pdf-editor",                date: "2025-01-15" },
  { slug: "ai-tools-for-students",               date: "2025-01-20" },
  { slug: "compress-pdf-without-losing-quality", date: "2024-12-10" },
  { slug: "remove-background-online-free",       date: "2024-12-05" },
  { slug: "best-ai-summarizer-tools",            date: "2024-11-20" },
];

export default function sitemap(): MetadataRoute.Sitemap {

  // ── 1. Core static pages ─────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                    lastModified: D.home,   changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/tools`,         lastModified: D.tools,  changeFrequency: "daily",   priority: 0.95 },
    { url: `${BASE}/blog`,          lastModified: D.blog,   changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/about`,         lastModified: D.static, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`,       lastModified: D.static, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy`,       lastModified: D.static, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/terms`,         lastModified: D.static, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/disclaimer`,    lastModified: D.static, changeFrequency: "yearly",  priority: 0.1 },
  ];

  // ── 2. Category pages ─────────────────────────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
    url: `${BASE}${cat.href}`,
    lastModified: D.category,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // ── 3. Tool pages — deduplicated ─────────────────────────────────────────
  const seenHrefs = new Set<string>();
  const toolPages: MetadataRoute.Sitemap = allCategories
    .flatMap((cat) => cat.tools)
    .filter((tool) => {
      if (seenHrefs.has(tool.href)) return false;
      seenHrefs.add(tool.href);
      return true;
    })
    .map((tool) => ({
      url: `${BASE}${tool.href}`,
      lastModified: D.tool,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));

  // ── 4. Blog post pages ────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = BLOGS.map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
    ...blogPages,
  ];
}
