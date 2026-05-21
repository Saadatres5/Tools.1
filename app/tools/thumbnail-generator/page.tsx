import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ThumbnailClient from "./ThumbnailClient";

export const metadata: Metadata = {
  title: "Thumbnail Generator Free Online — ToolsAI",
  description: "Create YouTube thumbnails. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Thumbnail Generator"
      description="Create YouTube thumbnails."
      emoji="🖼️"
      category="Social Media Tools"
      categoryHref="/tools/social-media"
    >
      <ThumbnailClient />
    </ToolLayout>
  );
}
