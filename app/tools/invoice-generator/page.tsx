import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import InvoiceClient from "./InvoiceClient";

export const metadata: Metadata = {
  title: "Invoice Generator Free Online — QuantixTools",
  description: "Create professional invoices. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/invoice-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/invoice-generator",
    title: "Invoice Generator Free Online — QuantixTools",
    description: "Create professional invoices. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Invoice Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Generator Free Online — QuantixTools",
    description: "Create professional invoices. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
