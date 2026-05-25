import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PercentageClient from "./PercentageClient";

export const metadata: Metadata = {
  title: "Percentage Calculator Free Online — QuantixTools",
  description: "Calculate percentages. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/percentage-calculator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/percentage-calculator",
    title: "Percentage Calculator Free Online — QuantixTools",
    description: "Calculate percentages. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Percentage Calculator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator Free Online — QuantixTools",
    description: "Calculate percentages. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Percentage Calculator"
      description="Calculate percentages."
      emoji="📊"
      category="Calculators"
      categoryHref="/tools/calculators"
    >
      <PercentageClient />
    </ToolLayout>
  );
}
