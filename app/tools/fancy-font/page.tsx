import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import FancyFontClient from "./FancyFontClient";

export const metadata: Metadata = {
  title: "Fancy Font Generator Free Online — QuantixTools",
  description: "Generate stylish fonts. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/fancy-font",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/fancy-font",
    title: "Fancy Font Generator Free Online — QuantixTools",
    description: "Generate stylish fonts. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Fancy Font Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fancy Font Generator Free Online — QuantixTools",
    description: "Generate stylish fonts. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Fancy Font Generator"
      description="Generate stylish fonts."
      emoji="✨"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <FancyFontClient />
    </ToolLayout>
  );
}
