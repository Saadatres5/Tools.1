import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ColorPickerClient from "./ColorPickerClient";

export const metadata: Metadata = {
  title: "Color Picker Free Online — QuantixTools",
  description: "Pick colors from any image. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/color-picker",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/color-picker",
    title: "Color Picker Free Online — QuantixTools",
    description: "Pick colors from any image. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Color Picker Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Picker Free Online — QuantixTools",
    description: "Pick colors from any image. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Color Picker"
      description="Pick colors from any image."
      emoji="🎨"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <ColorPickerClient />
    </ToolLayout>
  );
}
