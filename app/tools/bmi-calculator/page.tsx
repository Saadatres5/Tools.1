import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import BMIClient from "./BMIClient";

export const metadata: Metadata = {
  title: "BMI Calculator Free Online — QuantixTools",
  description: "Calculate body mass index. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/bmi-calculator" },
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
