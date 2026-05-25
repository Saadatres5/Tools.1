import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AITweetClient from "./AITweetClient";

export const metadata: Metadata = {
  title: "AI Tweet Generator Free Online — QuantixTools",
  description: "Write viral tweets with AI. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-tweet-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-tweet-generator",
    title: "AI Tweet Generator Free Online — QuantixTools",
    description: "Write viral tweets with AI. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Tweet Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tweet Generator Free Online — QuantixTools",
    description: "Write viral tweets with AI. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Tweet Generator"
      description="Write viral tweets with AI."
      emoji="🐦"
      category="Social Media Tools"
      categoryHref="/tools/social-media"
    >
      <AITweetClient />
    </ToolLayout>
  );
}
