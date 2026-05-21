import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ProtectPDFClient from "./ProtectPDFClient";

export const metadata: Metadata = {
  title: "Protect PDF Free Online — ToolsAI",
  description: "Add password to your PDF. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Protect PDF"
      description="Add password to your PDF."
      emoji="🔐"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <ProtectPDFClient />
    </ToolLayout>
  );
}
