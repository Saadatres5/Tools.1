import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIParaphraserClient from "./AIParaphraserClient";

export const metadata: Metadata = {
  title: "AI Paraphraser Free Online — ToolsAI",
  description: "Rewrite text in new words. 100% free, no signup required.",
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
