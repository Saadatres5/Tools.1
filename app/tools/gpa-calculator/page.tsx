import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import GPAClient from "./GPAClient";

export const metadata: Metadata = {
  title: "GPA Calculator Free Online — QuantixTools",
  description: "Calculate your GPA. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/gpa-calculator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="GPA Calculator"
      description="Calculate your GPA."
      emoji="🎓"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <GPAClient />
    </ToolLayout>
  );
}
