import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PDFToJPGClient from "./PDFToJPGClient";

export const metadata: Metadata = {
  title: "PDF to JPG Free Online — QuantixTools",
  description: "Convert PDF pages to images. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/pdf-to-jpg" },
};

export default function Page() {
  return (
    <ToolLayout
      title="PDF to JPG"
      description="Convert PDF pages to images."
      emoji="🖼️"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <PDFToJPGClient />
    </ToolLayout>
  );
}
