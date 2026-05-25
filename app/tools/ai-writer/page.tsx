import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIWriterClient from "./AIWriterClient";

export const metadata: Metadata = {
  title: "AI Writer Free Online — QuantixTools",
  description: "Generate content with AI. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-writer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-writer",
    title: "AI Writer Free Online — QuantixTools",
    description: "Generate content with AI. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Writer Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Writer Free Online — QuantixTools",
    description: "Generate content with AI. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Writer"
      description="Generate content with AI."
      emoji="✨"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIWriterClient />
    </ToolLayout>
  );
}
