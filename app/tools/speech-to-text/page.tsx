import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SpeechToTextClient from "./SpeechToTextClient";

export const metadata: Metadata = {
  title: "Speech to Text Free Online — QuantixTools",
  description: "Transcribe audio to text. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/speech-to-text" },
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
