import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AgeClient from "./AgeClient";

export const metadata: Metadata = {
  title: "Age Calculator Free Online — QuantixTools",
  description: "Calculate exact age. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/age-calculator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/age-calculator",
    title: "Age Calculator Free Online — QuantixTools",
    description: "Calculate exact age. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Age Calculator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator Free Online — QuantixTools",
    description: "Calculate exact age. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Age Calculator"
      description="Calculate exact age."
      emoji="🎂"
      category="Calculators"
      categoryHref="/tools/calculators"
    >
      <AgeClient />
    </ToolLayout>
  );
}
