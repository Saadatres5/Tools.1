import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CitationClient from "./CitationClient";

export const metadata: Metadata = {
  title: "Citation Generator Free Online — QuantixTools",
  description: "Generate APA, MLA citations. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/citation-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/citation-generator",
    title: "Citation Generator Free Online — QuantixTools",
    description: "Generate APA, MLA citations. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Citation Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Citation Generator Free Online — QuantixTools",
    description: "Generate APA, MLA citations. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Citation Generator"
      description="Generate APA, MLA citations."
      emoji="📖"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <CitationClient />
    </ToolLayout>
  );
}
