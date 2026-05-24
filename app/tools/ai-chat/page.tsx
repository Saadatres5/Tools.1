import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIChatClient from "./AIChatClient";

export const metadata: Metadata = {
  title: "AI Chat Workspace Free Online — QuantixTools",
  description: "Chat with AI assistant. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/ai-chat" },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Chat Workspace"
      description="Chat with AI assistant."
      emoji="💬"
      category="AI Tools"
      categoryHref="/tools/ai"
    >
      <AIChatClient />
    </ToolLayout>
  );
}
