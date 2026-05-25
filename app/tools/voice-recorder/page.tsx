import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import VoiceRecorderClient from "./VoiceRecorderClient";

export const metadata: Metadata = {
  title: "Voice Recorder Free Online — QuantixTools",
  description: "Record audio in browser. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/voice-recorder",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/voice-recorder",
    title: "Voice Recorder Free Online — QuantixTools",
    description: "Record audio in browser. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Voice Recorder Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Recorder Free Online — QuantixTools",
    description: "Record audio in browser. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Voice Recorder"
      description="Record audio in browser."
      emoji="🎙️"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <VoiceRecorderClient />
    </ToolLayout>
  );
}
