import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TextCompareClient from "./TextCompareClient";

export const metadata: Metadata = {
  title: "Text Compare Free Online — ToolsAI",
  description: "Compare two texts. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Text Compare"
      description="Compare two texts."
      emoji="🔀"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <TextCompareClient />
    </ToolLayout>
  );
}
