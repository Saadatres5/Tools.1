import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import QRScannerClient from "./QRScannerClient";

export const metadata: Metadata = {
  title: "QR Scanner Free Online — QuantixTools",
  description: "Scan QR codes with camera. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/qr-scanner",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/qr-scanner",
    title: "QR Scanner Free Online — QuantixTools",
    description: "Scan QR codes with camera. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QR Scanner Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Scanner Free Online — QuantixTools",
    description: "Scan QR codes with camera. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="QR Scanner"
      description="Scan QR codes with camera."
      emoji="📷"
      category="Browser Utilities"
      categoryHref="/tools/browser"
    >
      <QRScannerClient />
    </ToolLayout>
  );
}
