import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import UpscaleImageClient from "./UpscaleImageClient";

export const metadata: Metadata = {
  title: "Upscale Image Free Online — ToolsAI",
  description: "Enhance image resolution with AI. 100% free, no signup required.",
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
