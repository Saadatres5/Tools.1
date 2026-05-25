import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIHeadlineClient from "./AIHeadlineClient";

export const metadata: Metadata = {
  title: "AI Headline Generator Free Online — QuantixTools",
  description: "Create compelling headlines. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-headline-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-headline-generator",
    title: "AI Headline Generator Free Online — QuantixTools",
    description: "Create compelling headlines. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Headline Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Headline Generator Free Online — QuantixTools",
    description: "Create compelling headlines. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Headline Generator"
      description="Create compelling headlines."
      emoji="💡"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIHeadlineClient />
    </ToolLayout>
  );
}
