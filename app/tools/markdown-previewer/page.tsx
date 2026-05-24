import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MarkdownClient from "./MarkdownClient";

export const metadata: Metadata = {
  title: "Markdown Previewer Free Online — QuantixTools",
  description: "Preview Markdown live. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/markdown-previewer" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Markdown Previewer"
      description="Preview Markdown live."
      emoji="📋"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <MarkdownClient />
    </ToolLayout>
  );
}
