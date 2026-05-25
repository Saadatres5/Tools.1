import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import GIFMakerClient from "./GIFMakerClient";

export const metadata: Metadata = {
  title: "GIF Maker Free Online — QuantixTools",
  description: "Convert video to GIF. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/gif-maker",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/gif-maker",
    title: "GIF Maker Free Online — QuantixTools",
    description: "Convert video to GIF. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GIF Maker Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIF Maker Free Online — QuantixTools",
    description: "Convert video to GIF. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="GIF Maker"
      description="Convert video to GIF."
      emoji="🎞️"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <GIFMakerClient />
    </ToolLayout>
  );
}
