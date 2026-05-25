import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "SEO Tools — Free Online SEO Tools | QuantixTools",
  description: "Free SEO tools to improve your website ranking. Generate meta tags, sitemaps, robots.txt and more.",
  keywords: ["seo tools", "free seo tools", "online seo tools", "no signup seo tools", "browser based seo tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/seo",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/seo",
    title: "SEO Tools — Free Online SEO Tools | QuantixTools",
    description: "Free SEO tools to improve your website ranking. Generate meta tags, sitemaps, robots.txt and more.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SEO Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Tools — Free Online SEO Tools | QuantixTools",
    description: "Free SEO tools to improve your website ranking. Generate meta tags, sitemaps, robots.txt and more.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("seo")!;
  return <CategoryPage category={category} />;
}
