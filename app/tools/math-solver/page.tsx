import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MathSolverClient from "./MathSolverClient";

export const metadata: Metadata = {
  title: "Math Solver Free Online — QuantixTools",
  description: "Solve math problems step by step. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/math-solver",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/math-solver",
    title: "Math Solver Free Online — QuantixTools",
    description: "Solve math problems step by step. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Math Solver Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Solver Free Online — QuantixTools",
    description: "Solve math problems step by step. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Math Solver"
      description="Solve math problems step by step."
      emoji="🔢"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <MathSolverClient />
    </ToolLayout>
  );
}
