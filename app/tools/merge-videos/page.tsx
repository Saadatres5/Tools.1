import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MergeVideosClient from "./MergeVideosClient";

export const metadata: Metadata = {
  title: "Merge Videos Free Online — QuantixTools",
  description: "Combine multiple videos. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/merge-videos",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/merge-videos",
    title: "Merge Videos Free Online — QuantixTools",
    description: "Combine multiple videos. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Merge Videos Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge Videos Free Online — QuantixTools",
    description: "Combine multiple videos. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Merge Videos"
      description="Combine multiple videos."
      emoji="🔗"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <MergeVideosClient />
    </ToolLayout>
  );
}
