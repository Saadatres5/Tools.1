import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ConvertImageClient from "./ConvertImageClient";

export const metadata: Metadata = {
  title: "Convert Image Free Online — QuantixTools",
  description: "Convert between image formats. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/convert-image",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/convert-image",
    title: "Convert Image Free Online — QuantixTools",
    description: "Convert between image formats. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Convert Image Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Image Free Online — QuantixTools",
    description: "Convert between image formats. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Convert Image"
      description="Convert between image formats."
      emoji="🔄"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ConvertImageClient />
    </ToolLayout>
  );
}
