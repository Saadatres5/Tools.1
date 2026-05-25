import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import BMIClient from "./BMIClient";

export const metadata: Metadata = {
  title: "BMI Calculator Free Online — QuantixTools",
  description: "Calculate body mass index. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/bmi-calculator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/bmi-calculator",
    title: "BMI Calculator Free Online — QuantixTools",
    description: "Calculate body mass index. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BMI Calculator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator Free Online — QuantixTools",
    description: "Calculate body mass index. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="BMI Calculator"
      description="Calculate body mass index."
      emoji="⚖️"
      category="Calculators"
      categoryHref="/tools/calculators"
    >
      <BMIClient />
    </ToolLayout>
  );
}
