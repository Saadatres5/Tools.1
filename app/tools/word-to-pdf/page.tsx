import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WordToPDFClient from "./WordToPDFClient";

export const metadata: Metadata = {
  title: "Word to PDF Free Online — QuantixTools",
  description: "Convert Word documents to PDF. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/word-to-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/word-to-pdf",
    title: "Word to PDF Free Online — QuantixTools",
    description: "Convert Word documents to PDF. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Word to PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word to PDF Free Online — QuantixTools",
    description: "Convert Word documents to PDF. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Word to PDF"
      description="Convert Word documents to PDF."
      emoji="📄"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <WordToPDFClient />
    </ToolLayout>
  );
}
