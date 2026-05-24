import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TrimVideoClient from "./TrimVideoClient";

export const metadata: Metadata = {
  title: "Trim Video Free Online — QuantixTools",
  description: "Cut and trim video clips. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/trim-video" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Trim Video"
      description="Cut and trim video clips."
      emoji="🎬"
      category="Video Tools"
      categoryHref="/tools/video"
    >
      <TrimVideoClient />
    </ToolLayout>
  );
}
