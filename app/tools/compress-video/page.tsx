import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CompressVideoClient from "./CompressVideoClient";

export const metadata: Metadata = {
  title: "Compress Video Free Online — QuantixTools",
  description: "Reduce video file size. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/compress-video",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/compress-video",
    title: "Compress Video Free Online — QuantixTools",
    description: "Reduce video file size. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Compress Video Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress Video Free Online — QuantixTools",
    description: "Reduce video file size. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Compress Video"
      description="Reduce video file size."
      emoji="📦"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <CompressVideoClient />
    </ToolLayout>
  );
}
