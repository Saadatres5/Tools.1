import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import LoremIpsumClient from "./LoremIpsumClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator Free Online — QuantixTools",
  description: "Generate placeholder text. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/lorem-ipsum",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/lorem-ipsum",
    title: "Lorem Ipsum Generator Free Online — QuantixTools",
    description: "Generate placeholder text. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lorem Ipsum Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorem Ipsum Generator Free Online — QuantixTools",
    description: "Generate placeholder text. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text."
      emoji="📝"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <LoremIpsumClient />
    </ToolLayout>
  );
}
