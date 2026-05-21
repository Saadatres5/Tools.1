import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIHashtagClient from "./AIHashtagClient";

export const metadata: Metadata = {
  title: "AI Hashtag Generator Free Online — QuantixTools",
  description: "Generate trending hashtags. 100% free, no signup required.",
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
