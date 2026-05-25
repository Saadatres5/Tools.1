import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap Generator Free Online — QuantixTools",
  description: "Generate XML sitemap. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/sitemap-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/sitemap-generator",
    title: "Sitemap Generator Free Online — QuantixTools",
    description: "Generate XML sitemap. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sitemap Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap Generator Free Online — QuantixTools",
    description: "Generate XML sitemap. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Sitemap Generator"
      description="Generate XML sitemap."
      emoji="🗺️"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <SitemapClient />
    </ToolLayout>
  );
}
