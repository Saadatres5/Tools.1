import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import OCRClient from "./OCRClient";

export const metadata: Metadata = {
  title: "OCR PDF Free Online — QuantixTools",
  description: "Extract text from scanned PDFs. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ocr" },
};

export default function Page() {
  return (
    <ToolLayout
      title="OCR PDF"
      description="Extract text from scanned PDFs."
      emoji="🔎"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <OCRClient />
    </ToolLayout>
  );
}
