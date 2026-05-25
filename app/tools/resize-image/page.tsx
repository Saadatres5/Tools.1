import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ResizeImageClient from "./ResizeImageClient";

export const metadata: Metadata = {
  title: "Resize Image Free Online — QuantixTools",
  description: "Resize images to any dimension. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/resize-image",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/resize-image",
    title: "Resize Image Free Online — QuantixTools",
    description: "Resize images to any dimension. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Resize Image Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image Free Online — QuantixTools",
    description: "Resize images to any dimension. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Resize Image"
      description="Resize images to any dimension."
      emoji="📐"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ResizeImageClient />
    </ToolLayout>
  );
}
