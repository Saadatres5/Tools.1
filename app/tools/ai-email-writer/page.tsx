import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIEmailWriterClient from "./AIEmailWriterClient";

export const metadata: Metadata = {
  title: "AI Email Writer Free Online — QuantixTools",
  description: "Write professional emails. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Email Writer"
      description="Write professional emails."
      emoji="📧"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIEmailWriterClient />
    </ToolLayout>
  );
}
