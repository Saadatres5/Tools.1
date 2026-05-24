import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIHeadlineClient from "./AIHeadlineClient";

export const metadata: Metadata = {
  title: "AI Headline Generator Free Online — QuantixTools",
  description: "Create compelling headlines. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-headline-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Headline Generator"
      description="Create compelling headlines."
      emoji="💡"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIHeadlineClient />
    </ToolLayout>
  );
}
