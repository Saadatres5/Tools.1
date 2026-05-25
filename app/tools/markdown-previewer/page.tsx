import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MarkdownClient from "./MarkdownClient";

export const metadata: Metadata = {
  title: "Markdown Previewer Free Online — QuantixTools",
  description: "Preview Markdown live. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/markdown-previewer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/markdown-previewer",
    title: "Markdown Previewer Free Online — QuantixTools",
    description: "Preview Markdown live. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Markdown Previewer Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown Previewer Free Online — QuantixTools",
    description: "Preview Markdown live. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Markdown Previewer"
      description="Preview Markdown live."
      emoji="📋"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <MarkdownClient />
    </ToolLayout>
  );
}
