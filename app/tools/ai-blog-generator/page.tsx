import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIBlogClient from "./AIBlogClient";

export const metadata: Metadata = {
  title: "AI Blog Generator Free Online — QuantixTools",
  description: "Generate full blog posts. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-blog-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Blog Generator"
      description="Generate full blog posts."
      emoji="📝"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIBlogClient />
    </ToolLayout>
  );
}
