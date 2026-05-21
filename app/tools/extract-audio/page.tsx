import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ExtractAudioClient from "./ExtractAudioClient";

export const metadata: Metadata = {
  title: "Extract Audio Free Online — ToolsAI",
  description: "Extract audio from video. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Extract Audio"
      description="Extract audio from video."
      emoji="🎶"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <ExtractAudioClient />
    </ToolLayout>
  );
}
