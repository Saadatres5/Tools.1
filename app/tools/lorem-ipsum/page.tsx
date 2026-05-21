import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import LoremIpsumClient from "./LoremIpsumClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator Free Online — QuantixTools",
  description: "Generate placeholder text. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text."
      emoji="📝"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <LoremIpsumClient />
    </ToolLayout>
  );
}
