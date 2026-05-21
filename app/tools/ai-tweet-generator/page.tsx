import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AITweetClient from "./AITweetClient";

export const metadata: Metadata = {
  title: "AI Tweet Generator Free Online — ToolsAI",
  description: "Write viral tweets with AI. 100% free, no signup required.",
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
