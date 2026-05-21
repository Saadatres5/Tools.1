import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TextToSpeechClient from "./TextToSpeechClient";

export const metadata: Metadata = {
  title: "Text to Speech Free Online — ToolsAI",
  description: "Convert text to audio. 100% free, no signup required.",
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
