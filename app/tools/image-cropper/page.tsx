import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ImageCropperClient from "./ImageCropperClient";

export const metadata: Metadata = {
  title: "Image Cropper Free Online — ToolsAI",
  description: "Crop images to any ratio. 100% free, no signup required.",
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
