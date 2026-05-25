import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ScientificCalcClient from "./ScientificCalcClient";

export const metadata: Metadata = {
  title: "Scientific Calculator Free Online — QuantixTools",
  description: "Advanced math calculator. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/scientific-calculator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/scientific-calculator",
    title: "Scientific Calculator Free Online — QuantixTools",
    description: "Advanced math calculator. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Scientific Calculator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scientific Calculator Free Online — QuantixTools",
    description: "Advanced math calculator. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Scientific Calculator"
      description="Advanced math calculator."
      emoji="🧮"
      category="Calculators"
      categoryHref="/tools/calculators"
    >
      <ScientificCalcClient />
    </ToolLayout>
  );
}
