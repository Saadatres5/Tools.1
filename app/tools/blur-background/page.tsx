import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import BlurBackgroundClient from "./BlurBackgroundClient";

export const metadata: Metadata = {
  title: "Blur Background Free Online — QuantixTools",
  description: "AI background blur for photos. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/blur-background",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/blur-background",
    title: "Blur Background Free Online — QuantixTools",
    description: "AI background blur for photos. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Blur Background Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blur Background Free Online — QuantixTools",
    description: "AI background blur for photos. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Blur Background"
      description="AI background blur for photos."
      emoji="🌫️"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <BlurBackgroundClient />
    </ToolLayout>
  );
}
