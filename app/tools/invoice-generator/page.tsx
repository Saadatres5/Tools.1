import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import InvoiceClient from "./InvoiceClient";

export const metadata: Metadata = {
  title: "Invoice Generator Free Online — ToolsAI",
  description: "Create professional invoices. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Invoice Generator"
      description="Create professional invoices."
      emoji="🧾"
      category="Business Tools"
      categoryHref="/tools/business"
    >
      <InvoiceClient />
    </ToolLayout>
  );
}
