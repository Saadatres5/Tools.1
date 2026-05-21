import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WordToPDFClient from "./WordToPDFClient";

export const metadata: Metadata = {
  title: "Word to PDF Free Online — ToolsAI",
  description: "Convert Word documents to PDF. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Word to PDF"
      description="Convert Word documents to PDF."
      emoji="📄"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <WordToPDFClient />
    </ToolLayout>
  );
}
