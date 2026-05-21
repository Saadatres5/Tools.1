import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import Base64Client from "./Base64Client";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder Free Online — ToolsAI",
  description: "Encode and decode Base64. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Base64 Encoder/Decoder"
      description="Encode and decode Base64."
      emoji="🔐"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <Base64Client />
    </ToolLayout>
  );
}
