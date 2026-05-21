import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ResumeBuilderClient from "./ResumeBuilderClient";

export const metadata: Metadata = {
  title: "Resume Builder Free Online — ToolsAI",
  description: "Build your resume. 100% free, no signup required.",
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
