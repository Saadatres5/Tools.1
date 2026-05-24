import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TextCompareClient from "./TextCompareClient";

export const metadata: Metadata = {
  title: "Text Compare Free Online — QuantixTools",
  description: "Compare two texts. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/text-compare" },
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
