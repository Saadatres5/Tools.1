import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AgeClient from "./AgeClient";

export const metadata: Metadata = {
  title: "Age Calculator Free Online — QuantixTools",
  description: "Calculate exact age. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/age-calculator" },
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
