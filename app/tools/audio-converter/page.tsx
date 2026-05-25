import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AudioConverterClient from "./AudioConverterClient";

export const metadata: Metadata = {
  title: "Audio Converter Free Online — QuantixTools",
  description: "Convert audio formats. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/audio-converter",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/audio-converter",
    title: "Audio Converter Free Online — QuantixTools",
    description: "Convert audio formats. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Audio Converter Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Converter Free Online — QuantixTools",
    description: "Convert audio formats. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Audio Converter"
      description="Convert audio formats."
      emoji="🎵"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <AudioConverterClient />
    </ToolLayout>
  );
}
