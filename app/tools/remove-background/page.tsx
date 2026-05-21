import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RemoveBGClient from "./RemoveBGClient";

export const metadata: Metadata = {
  title: "Remove Background Free Online — QuantixTools",
  description: "Remove image background with AI. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Remove Background"
      description="Remove image background with AI."
      emoji="✂️"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <RemoveBGClient />
    </ToolLayout>
  );
}
