import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ResizeImageClient from "./ResizeImageClient";

export const metadata: Metadata = {
  title: "Resize Image Free Online — ToolsAI",
  description: "Resize images to any dimension. 100% free, no signup required.",
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
