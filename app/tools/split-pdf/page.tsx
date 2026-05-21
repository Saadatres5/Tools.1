import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SplitPDFClient from "./SplitPDFClient";

export const metadata: Metadata = {
  title: "Split PDF Free Online — QuantixTools",
  description: "Split PDF into separate pages. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Split PDF"
      description="Split PDF into separate pages."
      emoji="✂️"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <SplitPDFClient />
    </ToolLayout>
  );
}
