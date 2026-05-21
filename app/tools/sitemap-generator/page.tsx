import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap Generator Free Online — ToolsAI",
  description: "Generate XML sitemap. 100% free, no signup required.",
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
