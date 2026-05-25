import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MemeGeneratorClient from "./MemeGeneratorClient";

export const metadata: Metadata = {
  title: "Meme Generator Free Online — QuantixTools",
  description: "Create memes with custom text. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/meme-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/meme-generator",
    title: "Meme Generator Free Online — QuantixTools",
    description: "Create memes with custom text. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Meme Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meme Generator Free Online — QuantixTools",
    description: "Create memes with custom text. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Meme Generator"
      description="Create memes with custom text."
      emoji="😂"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <MemeGeneratorClient />
    </ToolLayout>
  );
}
