import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PDFToWordClient from "./PDFToWordClient";

export const metadata: Metadata = {
  title: "PDF to Word Free Online — QuantixTools",
  description: "Convert PDF to editable text. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="PDF to Word"
      description="Convert PDF to editable text."
      emoji="📝"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <PDFToWordClient />
    </ToolLayout>
  );
}
