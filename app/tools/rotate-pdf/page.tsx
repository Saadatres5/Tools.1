import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RotatePDFClient from "./RotatePDFClient";

export const metadata: Metadata = {
  title: "Rotate PDF Free Online — QuantixTools",
  description: "Rotate PDF pages to any angle. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/rotate-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/rotate-pdf",
    title: "Rotate PDF Free Online — QuantixTools",
    description: "Rotate PDF pages to any angle. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rotate PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotate PDF Free Online — QuantixTools",
    description: "Rotate PDF pages to any angle. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Rotate PDF"
      description="Rotate PDF pages to any angle."
      emoji="🔄"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <RotatePDFClient />
    </ToolLayout>
  );
}
