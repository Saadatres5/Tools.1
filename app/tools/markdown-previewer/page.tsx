import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MarkdownClient from "./MarkdownClient";

export const metadata: Metadata = {
  title: "Markdown Previewer Free Online — ToolsAI",
  description: "Preview Markdown live. 100% free, no signup required.",
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
