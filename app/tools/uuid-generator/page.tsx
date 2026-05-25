import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import UUIDGeneratorClient from "./UUIDGeneratorClient";

export const metadata: Metadata = {
  title: "UUID Generator Free Online — QuantixTools",
  description: "Generate unique UUIDs. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/uuid-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/uuid-generator",
    title: "UUID Generator Free Online — QuantixTools",
    description: "Generate unique UUIDs. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "UUID Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID Generator Free Online — QuantixTools",
    description: "Generate unique UUIDs. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
