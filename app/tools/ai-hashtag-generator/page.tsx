import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIHashtagClient from "./AIHashtagClient";

export const metadata: Metadata = {
  title: "AI Hashtag Generator Free Online — QuantixTools",
  description: "Generate trending hashtags. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-hashtag-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-hashtag-generator",
    title: "AI Hashtag Generator Free Online — QuantixTools",
    description: "Generate trending hashtags. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Hashtag Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Hashtag Generator Free Online — QuantixTools",
    description: "Generate trending hashtags. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Hashtag Generator"
      description="Generate trending hashtags."
      emoji="#️⃣"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIHashtagClient />
    </ToolLayout>
  );
}
