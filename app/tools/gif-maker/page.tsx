import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import GIFMakerClient from "./GIFMakerClient";

export const metadata: Metadata = {
  title: "GIF Maker Free Online — QuantixTools",
  description: "Convert video to GIF. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/gif-maker" },
};

export default function Page() {
  return (
    <ToolLayout
      title="GIF Maker"
      description="Convert video to GIF."
      emoji="🎞️"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <GIFMakerClient />
    </ToolLayout>
  );
}
