import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import UnlockPDFClient from "./UnlockPDFClient";

export const metadata: Metadata = {
  title: "Unlock PDF Free Online — QuantixTools",
  description: "Remove PDF password protection. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/unlock-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/unlock-pdf",
    title: "Unlock PDF Free Online — QuantixTools",
    description: "Remove PDF password protection. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Unlock PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlock PDF Free Online — QuantixTools",
    description: "Remove PDF password protection. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Unlock PDF"
      description="Remove PDF password protection."
      emoji="🔓"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <UnlockPDFClient />
    </ToolLayout>
  );
}
