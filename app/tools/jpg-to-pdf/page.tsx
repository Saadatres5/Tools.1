import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import JPGToPDFClient from "./JPGToPDFClient";

export const metadata: Metadata = {
  title: "JPG to PDF Free Online — QuantixTools",
  description: "Convert images to PDF. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="JPG to PDF"
      description="Convert images to PDF."
      emoji="📄"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <JPGToPDFClient />
    </ToolLayout>
  );
}
