import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TrimVideoClient from "./TrimVideoClient";

export const metadata: Metadata = {
  title: "Trim Video Free Online — QuantixTools",
  description: "Cut and trim video clips. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/trim-video",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/trim-video",
    title: "Trim Video Free Online — QuantixTools",
    description: "Cut and trim video clips. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Trim Video Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trim Video Free Online — QuantixTools",
    description: "Cut and trim video clips. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Trim Video"
      description="Cut and trim video clips."
      emoji="🎬"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <TrimVideoClient />
    </ToolLayout>
  );
}
