import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import YTTitleClient from "./YTTitleClient";

export const metadata: Metadata = {
  title: "YouTube Title Generator Free Online — ToolsAI",
  description: "Generate click-worthy YouTube titles. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="YouTube Title Generator"
      description="Generate click-worthy YouTube titles."
      emoji="▶️"
      category="Social Media Tools"
      categoryHref="/tools/social-media"
    >
      <YTTitleClient />
    </ToolLayout>
  );
}
