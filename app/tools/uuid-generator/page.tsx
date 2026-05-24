import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import UUIDGeneratorClient from "./UUIDGeneratorClient";

export const metadata: Metadata = {
  title: "UUID Generator Free Online — QuantixTools",
  description: "Generate unique UUIDs. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/uuid-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate unique UUIDs."
      emoji="🎲"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <UUIDGeneratorClient />
    </ToolLayout>
  );
}
