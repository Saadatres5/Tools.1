import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ScreenRecorderClient from "./ScreenRecorderClient";

export const metadata: Metadata = {
  title: "Screen Recorder Free Online — QuantixTools",
  description: "Record your screen. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Screen Recorder"
      description="Record your screen."
      emoji="🖥️"
      category="Browser Utilities"
      categoryHref="/tools/browser"
    >
      <ScreenRecorderClient />
    </ToolLayout>
  );
}
