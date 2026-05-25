import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SERPPreviewClient from "./SERPPreviewClient";

export const metadata: Metadata = {
  title: "SERP Preview Free Online — QuantixTools",
  description: "Preview Google snippet. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/serp-preview",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/serp-preview",
    title: "SERP Preview Free Online — QuantixTools",
    description: "Preview Google snippet. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SERP Preview Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SERP Preview Free Online — QuantixTools",
    description: "Preview Google snippet. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="SERP Preview"
      description="Preview Google snippet."
      emoji="🔍"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <SERPPreviewClient />
    </ToolLayout>
  );
}
