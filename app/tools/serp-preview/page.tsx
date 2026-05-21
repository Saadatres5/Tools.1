import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SERPPreviewClient from "./SERPPreviewClient";

export const metadata: Metadata = {
  title: "SERP Preview Free Online — QuantixTools",
  description: "Preview Google snippet. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="SERP Preview"
      description="Preview Google snippet."
      emoji="🔍"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <SERPPreviewClient />
    </ToolLayout>
  );
}
