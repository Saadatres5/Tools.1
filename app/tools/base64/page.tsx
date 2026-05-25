import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import Base64Client from "./Base64Client";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder Free Online — QuantixTools",
  description: "Encode and decode Base64. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/base64",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/base64",
    title: "Base64 Encoder/Decoder Free Online — QuantixTools",
    description: "Encode and decode Base64. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Base64 Encoder/Decoder Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Encoder/Decoder Free Online — QuantixTools",
    description: "Encode and decode Base64. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
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
