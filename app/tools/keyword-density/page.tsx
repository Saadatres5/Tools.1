import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import KeywordDensityClient from "./KeywordDensityClient";

export const metadata: Metadata = {
  title: "Keyword Density Checker Free Online — QuantixTools",
  description: "Analyze keyword usage. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/keyword-density",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/keyword-density",
    title: "Keyword Density Checker Free Online — QuantixTools",
    description: "Analyze keyword usage. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Keyword Density Checker Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyword Density Checker Free Online — QuantixTools",
    description: "Analyze keyword usage. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Keyword Density Checker"
      description="Analyze keyword usage."
      emoji="🔑"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <KeywordDensityClient />
    </ToolLayout>
  );
}
