import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PDFToJPGClient from "./PDFToJPGClient";

export const metadata: Metadata = {
  title: "PDF to JPG Free Online — QuantixTools",
  description: "Convert PDF pages to images. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/pdf-to-jpg",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/pdf-to-jpg",
    title: "PDF to JPG Free Online — QuantixTools",
    description: "Convert PDF pages to images. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PDF to JPG Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG Free Online — QuantixTools",
    description: "Convert PDF pages to images. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="PDF to JPG"
      description="Convert PDF pages to images."
      emoji="🖼️"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <PDFToJPGClient />
    </ToolLayout>
  );
}
