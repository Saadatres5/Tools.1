import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MetaTagClient from "./MetaTagClient";

export const metadata: Metadata = {
  title: "Meta Tag Generator Free Online — QuantixTools",
  description: "Generate SEO meta tags. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/meta-tag-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Meta Tag Generator"
      description="Generate SEO meta tags."
      emoji="🏷️"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <MetaTagClient />
    </ToolLayout>
  );
}
