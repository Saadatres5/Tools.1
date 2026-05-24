import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIPDFSummarizerClient from "./AIPDFSummarizerClient";

export const metadata: Metadata = {
  title: "AI PDF Summarizer Free Online — QuantixTools",
  description: "Summarize PDF with AI. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-pdf-summarizer" },
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
