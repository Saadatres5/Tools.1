import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import DiffCheckerClient from "./DiffCheckerClient";

export const metadata: Metadata = {
  title: "Diff Checker Free Online — ToolsAI",
  description: "Compare two texts. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Diff Checker"
      description="Compare two texts."
      emoji="🔀"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <DiffCheckerClient />
    </ToolLayout>
  );
}
