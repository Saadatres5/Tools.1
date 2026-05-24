import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ScientificCalcClient from "./ScientificCalcClient";

export const metadata: Metadata = {
  title: "Scientific Calculator Free Online — QuantixTools",
  description: "Advanced math calculator. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/scientific-calculator" },
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
