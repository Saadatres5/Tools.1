import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import QRCodeClient from "./QRCodeClient";

export const metadata: Metadata = {
  title: "QR Code Generator Free Online — QuantixTools",
  description: "Create QR codes instantly. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/qr-code-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/qr-code-generator",
    title: "QR Code Generator Free Online — QuantixTools",
    description: "Create QR codes instantly. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QR Code Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator Free Online — QuantixTools",
    description: "Create QR codes instantly. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="QR Code Generator"
      description="Create QR codes instantly."
      emoji="📱"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <QRCodeClient />
    </ToolLayout>
  );
}
