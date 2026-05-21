import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AITranslatorClient from "./AITranslatorClient";

export const metadata: Metadata = {
  title: "AI Translator Free Online — ToolsAI",
  description: "Translate text to any language. 100% free, no signup required.",
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
