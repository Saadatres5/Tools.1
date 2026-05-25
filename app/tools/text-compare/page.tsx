import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TextCompareClient from "./TextCompareClient";

export const metadata: Metadata = {
  title: "Text Compare Free Online — QuantixTools",
  description: "Compare two texts. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/text-compare",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/text-compare",
    title: "Text Compare Free Online — QuantixTools",
    description: "Compare two texts. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Text Compare Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Compare Free Online — QuantixTools",
    description: "Compare two texts. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Text Compare"
      description="Compare two texts."
      emoji="🔀"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <TextCompareClient />
    </ToolLayout>
  );
}
