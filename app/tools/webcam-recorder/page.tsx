import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WebcamRecorderClient from "./WebcamRecorderClient";

export const metadata: Metadata = {
  title: "Webcam Recorder Free Online — ToolsAI",
  description: "Record webcam video. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Webcam Recorder"
      description="Record webcam video."
      emoji="📹"
      category="Browser Utilities"
      categoryHref="/tools/browser"
    >
      <WebcamRecorderClient />
    </ToolLayout>
  );
}
