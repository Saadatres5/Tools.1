import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIResumeBuilderClient from "./AIResumeBuilderClient";

export const metadata: Metadata = {
  title: "AI Resume Builder Free Online — QuantixTools",
  description: "Build resume with AI. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Resume Builder"
      description="Build resume with AI."
      emoji="📄"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIResumeBuilderClient />
    </ToolLayout>
  );
}
