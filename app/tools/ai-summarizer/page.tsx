import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AISummarizerClient from "./AISummarizerClient";

export const metadata: Metadata = {
  title: "AI Summarizer Free Online — ToolsAI",
  description: "Summarize any text instantly. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Summarizer"
      description="Summarize any text instantly."
      emoji="📋"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AISummarizerClient />
    </ToolLayout>
  );
}
