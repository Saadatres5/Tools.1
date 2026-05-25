import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AITranslatorClient from "./AITranslatorClient";

export const metadata: Metadata = {
  title: "AI Translator Free Online — QuantixTools",
  description: "Translate text to any language. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-translator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-translator",
    title: "AI Translator Free Online — QuantixTools",
    description: "Translate text to any language. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Translator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Translator Free Online — QuantixTools",
    description: "Translate text to any language. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
