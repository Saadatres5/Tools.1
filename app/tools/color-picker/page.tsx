import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ColorPickerClient from "./ColorPickerClient";

export const metadata: Metadata = {
  title: "Color Picker Free Online — ToolsAI",
  description: "Pick colors from any image. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Color Picker"
      description="Pick colors from any image."
      emoji="🎨"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ColorPickerClient />
    </ToolLayout>
  );
}
