import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AISummarizerClient from "./AISummarizerClient";

export const metadata: Metadata = {
  title: "AI Summarizer Free Online — QuantixTools",
  description: "Summarize any text instantly. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-summarizer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-summarizer",
    title: "AI Summarizer Free Online — QuantixTools",
    description: "Summarize any text instantly. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Summarizer Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Summarizer Free Online — QuantixTools",
    description: "Summarize any text instantly. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Summarizer"
      description="Summarize any text instantly."
      emoji="📋"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AISummarizerClient />
    </ToolLayout>
  );
}
