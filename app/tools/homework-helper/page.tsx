import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import HomeworkHelperClient from "./HomeworkHelperClient";

export const metadata: Metadata = {
  title: "AI Homework Helper Free Online — QuantixTools",
  description: "Get help with homework. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/homework-helper" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Homework Helper"
      description="Get help with homework."
      emoji="📚"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <HomeworkHelperClient />
    </ToolLayout>
  );
}
