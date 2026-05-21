import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ScreenshotEditorClient from "./ScreenshotEditorClient";

export const metadata: Metadata = {
  title: "Screenshot Editor Free Online — QuantixTools",
  description: "Annotate and edit screenshots. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Screenshot Editor"
      description="Annotate and edit screenshots."
      emoji="📸"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ScreenshotEditorClient />
    </ToolLayout>
  );
}
