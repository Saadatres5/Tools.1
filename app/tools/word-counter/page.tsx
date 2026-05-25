import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WordCounterClient from "./WordCounterClient";

export const metadata: Metadata = {
  title: "Word Counter Free Online — QuantixTools",
  description: "Count words and characters. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/word-counter",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/word-counter",
    title: "Word Counter Free Online — QuantixTools",
    description: "Count words and characters. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Word Counter Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter Free Online — QuantixTools",
    description: "Count words and characters. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
