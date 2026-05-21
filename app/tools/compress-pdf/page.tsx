import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CompressPDFClient from "./CompressPDFClient";

export const metadata: Metadata = {
  title: "Compress PDF Free Online — QuantixTools",
  description: "Reduce PDF file size instantly. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size instantly."
      emoji="📦"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <CompressPDFClient />
    </ToolLayout>
  );
}
