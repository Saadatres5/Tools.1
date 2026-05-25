import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ExtractAudioClient from "./ExtractAudioClient";

export const metadata: Metadata = {
  title: "Extract Audio Free Online — QuantixTools",
  description: "Extract audio from video. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/extract-audio",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/extract-audio",
    title: "Extract Audio Free Online — QuantixTools",
    description: "Extract audio from video. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Extract Audio Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extract Audio Free Online — QuantixTools",
    description: "Extract audio from video. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
