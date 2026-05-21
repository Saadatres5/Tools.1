import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ConvertImageClient from "./ConvertImageClient";

export const metadata: Metadata = {
  title: "Convert Image Free Online — ToolsAI",
  description: "Convert between image formats. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Convert Image"
      description="Convert between image formats."
      emoji="🔄"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ConvertImageClient />
    </ToolLayout>
  );
}
