import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RotatePDFClient from "./RotatePDFClient";

export const metadata: Metadata = {
  title: "Rotate PDF Free Online — QuantixTools",
  description: "Rotate PDF pages to any angle. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Rotate PDF"
      description="Rotate PDF pages to any angle."
      emoji="🔄"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <RotatePDFClient />
    </ToolLayout>
  );
}
