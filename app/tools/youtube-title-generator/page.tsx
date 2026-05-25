import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import YTTitleClient from "./YTTitleClient";

export const metadata: Metadata = {
  title: "YouTube Title Generator Free Online — QuantixTools",
  description: "Generate click-worthy YouTube titles. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/youtube-title-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/youtube-title-generator",
    title: "YouTube Title Generator Free Online — QuantixTools",
    description: "Generate click-worthy YouTube titles. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "YouTube Title Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Title Generator Free Online — QuantixTools",
    description: "Generate click-worthy YouTube titles. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="YouTube Title Generator"
      description="Generate click-worthy YouTube titles."
      emoji="▶️"
      category="Social Media Tools"
      categoryHref="/tools/social-media"
    >
      <YTTitleClient />
    </ToolLayout>
  );
}
