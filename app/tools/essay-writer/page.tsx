import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import EssayWriterClient from "./EssayWriterClient";

export const metadata: Metadata = {
  title: "Essay Writer Free Online — QuantixTools",
  description: "Write essays with AI assistance. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Essay Writer"
      description="Write essays with AI assistance."
      emoji="✍️"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <EssayWriterClient />
    </ToolLayout>
  );
}
