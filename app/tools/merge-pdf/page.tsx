import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MergePDFClient from "./MergePDFClient";

export const metadata: Metadata = {
  title: "Merge PDF Free Online — QuantixTools",
  description: "Combine multiple PDFs into one. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/merge-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/merge-pdf",
    title: "Merge PDF Free Online — QuantixTools",
    description: "Combine multiple PDFs into one. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Merge PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF Free Online — QuantixTools",
    description: "Combine multiple PDFs into one. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Merge PDF"
      description="Combine multiple PDFs into one."
      emoji="🔗"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <MergePDFClient />
    </ToolLayout>
  );
}
