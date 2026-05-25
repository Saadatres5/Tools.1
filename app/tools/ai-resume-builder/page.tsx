import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIResumeBuilderClient from "./AIResumeBuilderClient";

export const metadata: Metadata = {
  title: "AI Resume Builder Free Online — QuantixTools",
  description: "Build resume with AI. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-resume-builder",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-resume-builder",
    title: "AI Resume Builder Free Online — QuantixTools",
    description: "Build resume with AI. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Resume Builder Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder Free Online — QuantixTools",
    description: "Build resume with AI. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Resume Builder"
      description="Build resume with AI."
      emoji="📄"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIResumeBuilderClient />
    </ToolLayout>
  );
}
