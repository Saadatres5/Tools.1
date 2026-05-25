import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AddSubtitleClient from "./AddSubtitleClient";

export const metadata: Metadata = {
  title: "Add Subtitle Free Online — QuantixTools",
  description: "Add subtitles to video. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/add-subtitle",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/add-subtitle",
    title: "Add Subtitle Free Online — QuantixTools",
    description: "Add subtitles to video. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Add Subtitle Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Add Subtitle Free Online — QuantixTools",
    description: "Add subtitles to video. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Add Subtitle"
      description="Add subtitles to video."
      emoji="📝"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <AddSubtitleClient />
    </ToolLayout>
  );
}
