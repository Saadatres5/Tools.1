import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SplitPDFClient from "./SplitPDFClient";

export const metadata: Metadata = {
  title: "Split PDF Free Online — QuantixTools",
  description: "Split PDF into separate pages. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/split-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/split-pdf",
    title: "Split PDF Free Online — QuantixTools",
    description: "Split PDF into separate pages. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Split PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Split PDF Free Online — QuantixTools",
    description: "Split PDF into separate pages. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Split PDF"
      description="Split PDF into separate pages."
      emoji="✂️"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <SplitPDFClient />
    </ToolLayout>
  );
}
