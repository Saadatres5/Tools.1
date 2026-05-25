import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import BusinessNameClient from "./BusinessNameClient";

export const metadata: Metadata = {
  title: "Business Name Generator Free Online — QuantixTools",
  description: "Generate creative business names. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/business-name-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/business-name-generator",
    title: "Business Name Generator Free Online — QuantixTools",
    description: "Generate creative business names. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Business Name Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Name Generator Free Online — QuantixTools",
    description: "Generate creative business names. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Business Name Generator"
      description="Generate creative business names."
      emoji="💡"
      category="Business Tools"
      categoryHref="/tools/business"
    >
      <BusinessNameClient />
    </ToolLayout>
  );
}
