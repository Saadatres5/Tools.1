import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CompressPDFClient from "./CompressPDFClient";

export const metadata: Metadata = {
  title: "Compress PDF Free Online — QuantixTools",
  description: "Reduce PDF file size instantly. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/compress-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/compress-pdf",
    title: "Compress PDF Free Online — QuantixTools",
    description: "Reduce PDF file size instantly. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Compress PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Free Online — QuantixTools",
    description: "Reduce PDF file size instantly. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Compress PDF"
      description="Reduce PDF file size instantly."
      emoji="📦"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <CompressPDFClient />
    </ToolLayout>
  );
}
