import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import VoiceRecorderClient from "./VoiceRecorderClient";

export const metadata: Metadata = {
  title: "Voice Recorder Free Online — QuantixTools",
  description: "Record audio in browser. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/voice-recorder" },
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
