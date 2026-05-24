import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIMeetingNotesClient from "./AIMeetingNotesClient";

export const metadata: Metadata = {
  title: "AI Meeting Notes Free Online — QuantixTools",
  description: "Summarize meetings with AI. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-meeting-notes" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Meeting Notes"
      description="Summarize meetings with AI."
      emoji="📋"
      category="Productivity Tools"
      categoryHref="/tools/productivity"
    >
      <AIMeetingNotesClient />
    </ToolLayout>
  );
}
