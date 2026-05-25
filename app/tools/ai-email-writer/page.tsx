import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AIEmailWriterClient from "./AIEmailWriterClient";

export const metadata: Metadata = {
  title: "AI Email Writer Free Online — QuantixTools",
  description: "Write professional emails. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/ai-email-writer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai-email-writer",
    title: "AI Email Writer Free Online — QuantixTools",
    description: "Write professional emails. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Email Writer Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Email Writer Free Online — QuantixTools",
    description: "Write professional emails. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
