import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CurrencyClient from "./CurrencyClient";

export const metadata: Metadata = {
  title: "Currency Converter Free Online — QuantixTools",
  description: "Convert currencies. 100% free, no signup required.",
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
