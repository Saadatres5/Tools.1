import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import VideoToMP3Client from "./VideoToMP3Client";

export const metadata: Metadata = {
  title: "Video to MP3 Free Online — QuantixTools",
  description: "Extract audio from video. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/video-to-mp3" },
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
