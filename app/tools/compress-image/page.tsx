import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CompressImageClient from "./CompressImageClient";

export const metadata: Metadata = {
  title: "Compress Image Free Online — QuantixTools",
  description: "Reduce image file size. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/compress-image",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/compress-image",
    title: "Compress Image Free Online — QuantixTools",
    description: "Reduce image file size. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Compress Image Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress Image Free Online — QuantixTools",
    description: "Reduce image file size. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Compress Image"
      description="Reduce image file size."
      emoji="📦"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <CompressImageClient />
    </ToolLayout>
  );
}
