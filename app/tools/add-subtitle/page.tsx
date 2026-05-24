import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AddSubtitleClient from "./AddSubtitleClient";

export const metadata: Metadata = {
  title: "Add Subtitle Free Online — QuantixTools",
  description: "Add subtitles to video. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/add-subtitle" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Add Subtitle"
      description="Add subtitles to video."
      emoji="📝"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <AddSubtitleClient />
    </ToolLayout>
  );
}
