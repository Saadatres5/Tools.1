import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CurrencyClient from "./CurrencyClient";

export const metadata: Metadata = {
  title: "Currency Converter Free Online — QuantixTools",
  description: "Convert currencies. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/currency-converter",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/currency-converter",
    title: "Currency Converter Free Online — QuantixTools",
    description: "Convert currencies. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Currency Converter Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter Free Online — QuantixTools",
    description: "Convert currencies. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Currency Converter"
      description="Convert currencies."
      emoji="💱"
      category="Calculators"
      categoryHref="/tools/calculators"
    >
      <CurrencyClient />
    </ToolLayout>
  );
}
