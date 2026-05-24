import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PDFToExcelClient from "./PDFToExcelClient";

export const metadata: Metadata = {
  title: "PDF to Excel Free Online — QuantixTools",
  description: "Convert PDF tables to Excel spreadsheet (CSV/XLSX). Extract tables from PDF files free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/pdf-to-excel" },
};

export default function Page() {
  return (
    <ToolLayout
      title="PDF to Excel"
      description="Extract tables from PDF and convert to Excel / CSV format. Free, browser-based, no signup."
      emoji="📊"
      category="PDF Tools"
      categoryHref="/tools/pdf"
      related={[
        { name: "PDF to Word", href: "/tools/pdf-to-word" },
        { name: "PDF to Text", href: "/tools/pdf-to-text" },
        { name: "PDF to JPG", href: "/tools/pdf-to-jpg" },
        { name: "OCR PDF", href: "/tools/ocr" },
        { name: "Compress PDF", href: "/tools/compress-pdf" },
      ]}
    >
      <PDFToExcelClient />
    </ToolLayout>
  );
}
