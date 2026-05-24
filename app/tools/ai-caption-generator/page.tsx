import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AICaptionClient from "./AICaptionClient";

export const metadata: Metadata = {
  title: "AI Caption Generator Free Online — QuantixTools",
  description: "Generate social media captions. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-caption-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Caption Generator"
      description="Generate social media captions."
      emoji="💬"
      category="Social Media Tools"
      categoryHref="/tools/social-media"
    >
      <AICaptionClient />
    </ToolLayout>
  );
}
