import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MergePDFClient from "./MergePDFClient";

export const metadata: Metadata = {
  title: "Merge PDF Free Online — QuantixTools",
  description: "Combine multiple PDFs into one. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Merge PDF"
      description="Combine multiple PDFs into one."
      emoji="🔗"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <MergePDFClient />
    </ToolLayout>
  );
}
