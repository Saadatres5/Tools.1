import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RemoveBGClient from "./RemoveBGClient";

export const metadata: Metadata = {
  title: "Remove Background Free Online — QuantixTools",
  description: "Remove image background with AI. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/remove-background",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/remove-background",
    title: "Remove Background Free Online — QuantixTools",
    description: "Remove image background with AI. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Remove Background Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remove Background Free Online — QuantixTools",
    description: "Remove image background with AI. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Remove Background"
      description="Remove image background with AI."
      emoji="✂️"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <RemoveBGClient />
    </ToolLayout>
  );
}
