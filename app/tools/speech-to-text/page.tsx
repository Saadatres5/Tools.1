import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SpeechToTextClient from "./SpeechToTextClient";

export const metadata: Metadata = {
  title: "Speech to Text Free Online — QuantixTools",
  description: "Transcribe audio to text. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/speech-to-text",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/speech-to-text",
    title: "Speech to Text Free Online — QuantixTools",
    description: "Transcribe audio to text. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Speech to Text Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech to Text Free Online — QuantixTools",
    description: "Transcribe audio to text. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Speech to Text"
      description="Transcribe audio to text."
      emoji="🎤"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <SpeechToTextClient />
    </ToolLayout>
  );
}
