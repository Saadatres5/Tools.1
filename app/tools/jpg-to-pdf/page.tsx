import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import JPGToPDFClient from "./JPGToPDFClient";

export const metadata: Metadata = {
  title: "JPG to PDF Free Online — QuantixTools",
  description: "Convert images to PDF. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/jpg-to-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/jpg-to-pdf",
    title: "JPG to PDF Free Online — QuantixTools",
    description: "Convert images to PDF. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "JPG to PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PDF Free Online — QuantixTools",
    description: "Convert images to PDF. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="JPG to PDF"
      description="Convert images to PDF."
      emoji="📄"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <JPGToPDFClient />
    </ToolLayout>
  );
}
