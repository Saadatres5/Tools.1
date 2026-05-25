import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIParaphraserClient from "./AIParaphraserClient";

export const metadata: Metadata = {
  title: "AI Paraphraser Free Online — QuantixTools",
  description: "Rewrite text in new words. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-paraphraser",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-paraphraser",
    title: "AI Paraphraser Free Online — QuantixTools",
    description: "Rewrite text in new words. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Paraphraser Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Paraphraser Free Online — QuantixTools",
    description: "Rewrite text in new words. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Paraphraser"
      description="Rewrite text in new words."
      emoji="🔄"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIParaphraserClient />
    </ToolLayout>
  );
}
