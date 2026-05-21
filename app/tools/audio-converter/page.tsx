import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AudioConverterClient from "./AudioConverterClient";

export const metadata: Metadata = {
  title: "Audio Converter Free Online — QuantixTools",
  description: "Convert audio formats. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Audio Converter"
      description="Convert audio formats."
      emoji="🎵"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <AudioConverterClient />
    </ToolLayout>
  );
}
