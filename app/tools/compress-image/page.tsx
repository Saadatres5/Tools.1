import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import CompressImageClient from "./CompressImageClient";

export const metadata: Metadata = {
  title: "Compress Image Free Online — QuantixTools",
  description: "Reduce image file size. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/compress-image" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Compress Image"
      description="Reduce image file size."
      emoji="📦"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <CompressImageClient />
    </ToolLayout>
  );
}
