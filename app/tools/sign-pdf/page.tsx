import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SignPDFClient from "./SignPDFClient";

export const metadata: Metadata = {
  title: "Sign PDF Free Online — QuantixTools",
  description: "Add digital signature to PDF. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Sign PDF"
      description="Add digital signature to PDF."
      emoji="✍️"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <SignPDFClient />
    </ToolLayout>
  );
}
