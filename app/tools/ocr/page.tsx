import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import OCRClient from "./OCRClient";

export const metadata: Metadata = {
  title: "OCR PDF Free Online — QuantixTools",
  description: "Extract text from scanned PDFs. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ocr",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ocr",
    title: "OCR PDF Free Online — QuantixTools",
    description: "Extract text from scanned PDFs. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OCR PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCR PDF Free Online — QuantixTools",
    description: "Extract text from scanned PDFs. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="OCR PDF"
      description="Extract text from scanned PDFs."
      emoji="🔎"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <OCRClient />
    </ToolLayout>
  );
}
