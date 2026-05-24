import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PDFToTextClient from "./PDFToTextClient";

export const metadata: Metadata = {
  title: "PDF to Text Free Online — QuantixTools",
  description: "Extract all text from any PDF file instantly. Copy or download as .txt. Free, browser-based, no signup.",
  alternates: { canonical: "https://quantixtools.com/tools/pdf-to-text" },
};

export default function Page() {
  return (
    <ToolLayout
      title="PDF to Text"
      description="Extract all text content from any PDF file. Copy to clipboard or download as .txt instantly."
      emoji="📃"
      category="PDF Tools"
      categoryHref="/tools/pdf"
      related={[
        { name: "PDF to Word", href: "/tools/pdf-to-word" },
        { name: "PDF to Excel", href: "/tools/pdf-to-excel" },
        { name: "OCR PDF", href: "/tools/ocr" },
        { name: "PDF to JPG", href: "/tools/pdf-to-jpg" },
        { name: "Compress PDF", href: "/tools/compress-pdf" },
      ]}
    >
      <PDFToTextClient />
    </ToolLayout>
  );
}
