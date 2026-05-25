import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIChatClient from "./AIChatClient";

export const metadata: Metadata = {
  title: "AI Chat Workspace Free Online — QuantixTools",
  description: "Chat with AI assistant. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-chat",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-chat",
    title: "AI Chat Workspace Free Online — QuantixTools",
    description: "Chat with AI assistant. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Chat Workspace Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chat Workspace Free Online — QuantixTools",
    description: "Chat with AI assistant. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
