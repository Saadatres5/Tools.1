import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ResumeBuilderClient from "./ResumeBuilderClient";

export const metadata: Metadata = {
  title: "Resume Builder Free Online — QuantixTools",
  description: "Build your resume. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/resume-builder",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/resume-builder",
    title: "Resume Builder Free Online — QuantixTools",
    description: "Build your resume. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Resume Builder Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Builder Free Online — QuantixTools",
    description: "Build your resume. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Resume Builder"
      description="Build your resume."
      emoji="📄"
      category="Business Tools"
      categoryHref="/tools/business"
    >
      <ResumeBuilderClient />
    </ToolLayout>
  );
}
