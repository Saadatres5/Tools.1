import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import QRCodeClient from "./QRCodeClient";

export const metadata: Metadata = {
  title: "QR Code Generator Free Online — ToolsAI",
  description: "Create QR codes instantly. 100% free, no signup required.",
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
