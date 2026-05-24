import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WordCounterClient from "./WordCounterClient";

export const metadata: Metadata = {
  title: "Word Counter Free Online — QuantixTools",
  description: "Count words and characters. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/word-counter" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Word Counter"
      description="Count words and characters."
      emoji="🔢"
      category="Text Tools"
      categoryHref="/tools/text"
    >
      <WordCounterClient />
    </ToolLayout>
  );
}
