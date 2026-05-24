import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WatermarkPDFClient from "./WatermarkPDFClient";

export const metadata: Metadata = {
  title: "Watermark PDF Free Online — QuantixTools",
  description: "Add watermark to PDF pages. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/watermark-pdf" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Watermark PDF"
      description="Add watermark to PDF pages."
      emoji="💧"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <WatermarkPDFClient />
    </ToolLayout>
  );
}
