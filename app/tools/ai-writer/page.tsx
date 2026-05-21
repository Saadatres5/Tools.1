import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIWriterClient from "./AIWriterClient";

export const metadata: Metadata = {
  title: "AI Writer Free Online — QuantixTools",
  description: "Generate content with AI. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Writer"
      description="Generate content with AI."
      emoji="✨"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIWriterClient />
    </ToolLayout>
  );
}
