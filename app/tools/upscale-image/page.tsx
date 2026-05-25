import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import UpscaleImageClient from "./UpscaleImageClient";

export const metadata: Metadata = {
  title: "Upscale Image Free Online — QuantixTools",
  description: "Enhance image resolution with AI. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/upscale-image",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/upscale-image",
    title: "Upscale Image Free Online — QuantixTools",
    description: "Enhance image resolution with AI. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Upscale Image Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upscale Image Free Online — QuantixTools",
    description: "Enhance image resolution with AI. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Upscale Image"
      description="Enhance image resolution with AI."
      emoji="🔍"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <UpscaleImageClient />
    </ToolLayout>
  );
}
