import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import BlurBackgroundClient from "./BlurBackgroundClient";

export const metadata: Metadata = {
  title: "Blur Background Free Online — ToolsAI",
  description: "AI background blur for photos. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Blur Background"
      description="AI background blur for photos."
      emoji="🌫️"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <BlurBackgroundClient />
    </ToolLayout>
  );
}
