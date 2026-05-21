import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MP3CutterClient from "./MP3CutterClient";

export const metadata: Metadata = {
  title: "MP3 Cutter Free Online — ToolsAI",
  description: "Cut and trim MP3 files. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="MP3 Cutter"
      description="Cut and trim MP3 files."
      emoji="✂️"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <MP3CutterClient />
    </ToolLayout>
  );
}
