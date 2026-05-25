import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import LoanClient from "./LoanClient";

export const metadata: Metadata = {
  title: "Loan Calculator Free Online — QuantixTools",
  description: "Calculate loan payments. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/loan-calculator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/loan-calculator",
    title: "Loan Calculator Free Online — QuantixTools",
    description: "Calculate loan payments. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Loan Calculator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator Free Online — QuantixTools",
    description: "Calculate loan payments. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
