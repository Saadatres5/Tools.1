import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import GrammarCheckerClient from "./GrammarCheckerClient";

export const metadata: Metadata = {
  title: "Grammar Checker Free Online — QuantixTools",
  description: "Check and fix grammar. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/grammar-checker",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/grammar-checker",
    title: "Grammar Checker Free Online — QuantixTools",
    description: "Check and fix grammar. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Grammar Checker Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grammar Checker Free Online — QuantixTools",
    description: "Check and fix grammar. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Grammar Checker"
      description="Check and fix grammar."
      emoji="✅"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <GrammarCheckerClient />
    </ToolLayout>
  );
}
