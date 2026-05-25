import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ThumbnailClient from "./ThumbnailClient";

export const metadata: Metadata = {
  title: "Thumbnail Generator Free Online — QuantixTools",
  description: "Create YouTube thumbnails. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/thumbnail-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/thumbnail-generator",
    title: "Thumbnail Generator Free Online — QuantixTools",
    description: "Create YouTube thumbnails. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Thumbnail Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thumbnail Generator Free Online — QuantixTools",
    description: "Create YouTube thumbnails. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Thumbnail Generator"
      description="Create YouTube thumbnails."
      emoji="🖼️"
      category="Social Media Tools"
      categoryHref="/tools/social-media"
    >
      <ThumbnailClient />
    </ToolLayout>
  );
}
