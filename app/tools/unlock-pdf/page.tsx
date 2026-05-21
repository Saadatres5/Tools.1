import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import UnlockPDFClient from "./UnlockPDFClient";

export const metadata: Metadata = {
  title: "Unlock PDF Free Online — QuantixTools",
  description: "Remove PDF password protection. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Unlock PDF"
      description="Remove PDF password protection."
      emoji="🔓"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <UnlockPDFClient />
    </ToolLayout>
  );
}
