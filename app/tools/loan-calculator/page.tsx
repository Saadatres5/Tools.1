import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import LoanClient from "./LoanClient";

export const metadata: Metadata = {
  title: "Loan Calculator Free Online — QuantixTools",
  description: "Calculate loan payments. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/loan-calculator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Loan Calculator"
      description="Calculate loan payments."
      emoji="💰"
      category="Calculators"
      categoryHref="/tools/calculators"
    >
      <LoanClient />
    </ToolLayout>
  );
}
