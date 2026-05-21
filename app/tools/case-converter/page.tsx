import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CaseConverterClient from "./CaseConverterClient";

export const metadata: Metadata = {
  title: "Case Converter Free Online — ToolsAI",
  description: "Convert text case. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Case Converter"
      description="Convert text case."
      emoji="🔤"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <CaseConverterClient />
    </ToolLayout>
  );
}
