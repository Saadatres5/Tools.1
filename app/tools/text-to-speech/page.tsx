import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TextToSpeechClient from "./TextToSpeechClient";

export const metadata: Metadata = {
  title: "Text to Speech Free Online — QuantixTools",
  description: "Convert text to audio. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/text-to-speech",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/text-to-speech",
    title: "Text to Speech Free Online — QuantixTools",
    description: "Convert text to audio. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Text to Speech Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Text to Speech Free Online — QuantixTools",
    description: "Convert text to audio. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Text to Speech"
      description="Convert text to audio."
      emoji="🔊"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <TextToSpeechClient />
    </ToolLayout>
  );
}
