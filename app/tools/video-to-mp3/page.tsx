import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import VideoToMP3Client from "./VideoToMP3Client";

export const metadata: Metadata = {
  title: "Video to MP3 Free Online — QuantixTools",
  description: "Extract audio from video. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/video-to-mp3",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/video-to-mp3",
    title: "Video to MP3 Free Online — QuantixTools",
    description: "Extract audio from video. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Video to MP3 Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video to MP3 Free Online — QuantixTools",
    description: "Extract audio from video. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
