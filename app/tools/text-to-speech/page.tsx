import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TextToSpeechClient from "./TextToSpeechClient";

export const metadata: Metadata = {
  title: "Text to Speech Free Online — QuantixTools",
  description: "Convert text to audio. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/text-to-speech" },
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
