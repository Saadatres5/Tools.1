import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ScreenshotEditorClient from "./ScreenshotEditorClient";

export const metadata: Metadata = {
  title: "Screenshot Editor Free Online — QuantixTools",
  description: "Annotate and edit screenshots. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/screenshot-editor",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/screenshot-editor",
    title: "Screenshot Editor Free Online — QuantixTools",
    description: "Annotate and edit screenshots. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Screenshot Editor Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Screenshot Editor Free Online — QuantixTools",
    description: "Annotate and edit screenshots. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
