import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIPDFSummarizerClient from "./AIPDFSummarizerClient";

export const metadata: Metadata = {
  title: "AI PDF Summarizer Free Online — ToolsAI",
  description: "Summarize PDF with AI. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="AI PDF Summarizer"
      description="Summarize PDF with AI."
      emoji="🤖"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIPDFSummarizerClient />
    </ToolLayout>
  );
}
