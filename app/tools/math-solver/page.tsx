import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MathSolverClient from "./MathSolverClient";

export const metadata: Metadata = {
  title: "Math Solver Free Online — QuantixTools",
  description: "Solve math problems step by step. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/math-solver" },
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
