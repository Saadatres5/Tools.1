import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import QRScannerClient from "./QRScannerClient";

export const metadata: Metadata = {
  title: "QR Scanner Free Online — QuantixTools",
  description: "Scan QR codes with camera. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/qr-scanner" },
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
