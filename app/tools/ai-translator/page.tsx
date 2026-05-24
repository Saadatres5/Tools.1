import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AITranslatorClient from "./AITranslatorClient";

export const metadata: Metadata = {
  title: "AI Translator Free Online — QuantixTools",
  description: "Translate text to any language. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-translator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Translator"
      description="Translate text to any language."
      emoji="🌍"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AITranslatorClient />
    </ToolLayout>
  );
}
