import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import NoiseRemoverClient from "./NoiseRemoverClient";

export const metadata: Metadata = {
  title: "Noise Remover Free Online — QuantixTools",
  description: "Remove background noise. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/noise-remover",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/noise-remover",
    title: "Noise Remover Free Online — QuantixTools",
    description: "Remove background noise. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Noise Remover Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noise Remover Free Online — QuantixTools",
    description: "Remove background noise. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Noise Remover"
      description="Remove background noise."
      emoji="🔇"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <NoiseRemoverClient />
    </ToolLayout>
  );
}
