import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CitationClient from "./CitationClient";

export const metadata: Metadata = {
  title: "Citation Generator Free Online — QuantixTools",
  description: "Generate APA, MLA citations. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Citation Generator"
      description="Generate APA, MLA citations."
      emoji="📖"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <CitationClient />
    </ToolLayout>
  );
}
