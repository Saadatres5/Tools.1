import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import VideoToMP3Client from "./VideoToMP3Client";

export const metadata: Metadata = {
  title: "Video to MP3 Free Online — ToolsAI",
  description: "Extract audio from video. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Video to MP3"
      description="Extract audio from video."
      emoji="🎵"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <VideoToMP3Client />
    </ToolLayout>
  );
}
