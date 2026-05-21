import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CompressVideoClient from "./CompressVideoClient";

export const metadata: Metadata = {
  title: "Compress Video Free Online — QuantixTools",
  description: "Reduce video file size. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Compress Video"
      description="Reduce video file size."
      emoji="📦"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <CompressVideoClient />
    </ToolLayout>
  );
}
