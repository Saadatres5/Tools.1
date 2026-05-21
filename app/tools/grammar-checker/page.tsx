import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import GrammarCheckerClient from "./GrammarCheckerClient";

export const metadata: Metadata = {
  title: "Grammar Checker Free Online — QuantixTools",
  description: "Check and fix grammar. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Grammar Checker"
      description="Check and fix grammar."
      emoji="✅"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <GrammarCheckerClient />
    </ToolLayout>
  );
}
