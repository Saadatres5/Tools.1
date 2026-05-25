import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import JSONFormatterClient from "./JSONFormatterClient";

export const metadata: Metadata = {
  title: "JSON Formatter Free Online — QuantixTools",
  description: "Format and validate JSON. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/json-formatter",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/json-formatter",
    title: "JSON Formatter Free Online — QuantixTools",
    description: "Format and validate JSON. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "JSON Formatter Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter Free Online — QuantixTools",
    description: "Format and validate JSON. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format and validate JSON."
      emoji="{ }"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <JSONFormatterClient />
    </ToolLayout>
  );
}
