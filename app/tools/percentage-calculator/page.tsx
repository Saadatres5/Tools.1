import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PercentageClient from "./PercentageClient";

export const metadata: Metadata = {
  title: "Percentage Calculator Free Online — QuantixTools",
  description: "Calculate percentages. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/percentage-calculator" },
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
