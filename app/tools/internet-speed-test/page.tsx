import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SpeedTestClient from "./SpeedTestClient";

export const metadata: Metadata = {
  title: "Internet Speed Test Free Online — QuantixTools",
  description: "Test connection speed. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/internet-speed-test",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/internet-speed-test",
    title: "Internet Speed Test Free Online — QuantixTools",
    description: "Test connection speed. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Internet Speed Test Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internet Speed Test Free Online — QuantixTools",
    description: "Test connection speed. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Internet Speed Test"
      description="Test connection speed."
      emoji="⚡"
      category="Browser Utilities"
      categoryHref="/tools/browser"
    >
      <SpeedTestClient />
    </ToolLayout>
  );
}
