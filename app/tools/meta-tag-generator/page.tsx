import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MetaTagClient from "./MetaTagClient";

export const metadata: Metadata = {
  title: "Meta Tag Generator Free Online — QuantixTools",
  description: "Generate SEO meta tags. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/meta-tag-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/meta-tag-generator",
    title: "Meta Tag Generator Free Online — QuantixTools",
    description: "Generate SEO meta tags. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Meta Tag Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Tag Generator Free Online — QuantixTools",
    description: "Generate SEO meta tags. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
