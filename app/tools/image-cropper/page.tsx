import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ImageCropperClient from "./ImageCropperClient";

export const metadata: Metadata = {
  title: "Image Cropper Free Online — QuantixTools",
  description: "Crop images to any ratio. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/image-cropper",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/image-cropper",
    title: "Image Cropper Free Online — QuantixTools",
    description: "Crop images to any ratio. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Image Cropper Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Cropper Free Online — QuantixTools",
    description: "Crop images to any ratio. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Image Cropper"
      description="Crop images to any ratio."
      emoji="✂️"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ImageCropperClient />
    </ToolLayout>
  );
}
