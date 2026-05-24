import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MergeVideosClient from "./MergeVideosClient";

export const metadata: Metadata = {
  title: "Merge Videos Free Online — QuantixTools",
  description: "Combine multiple videos. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/merge-videos" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Merge Videos"
      description="Combine multiple videos."
      emoji="🔗"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <MergeVideosClient />
    </ToolLayout>
  );
}
