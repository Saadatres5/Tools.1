import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PDFToWordClient from "./PDFToWordClient";

export const metadata: Metadata = {
  title: "PDF to Word Free Online — QuantixTools",
  description: "Convert PDF to editable text. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/pdf-to-word",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/pdf-to-word",
    title: "PDF to Word Free Online — QuantixTools",
    description: "Convert PDF to editable text. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PDF to Word Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to Word Free Online — QuantixTools",
    description: "Convert PDF to editable text. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="PDF to Word"
      description="Convert PDF to editable text."
      emoji="📝"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <PDFToWordClient />
    </ToolLayout>
  );
}
