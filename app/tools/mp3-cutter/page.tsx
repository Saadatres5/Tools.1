import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MP3CutterClient from "./MP3CutterClient";

export const metadata: Metadata = {
  title: "MP3 Cutter Free Online — QuantixTools",
  description: "Cut and trim MP3 files. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/mp3-cutter",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/mp3-cutter",
    title: "MP3 Cutter Free Online — QuantixTools",
    description: "Cut and trim MP3 files. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MP3 Cutter Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 Cutter Free Online — QuantixTools",
    description: "Cut and trim MP3 files. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="MP3 Cutter"
      description="Cut and trim MP3 files."
      emoji="✂️"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <MP3CutterClient />
    </ToolLayout>
  );
}
