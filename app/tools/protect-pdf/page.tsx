import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import ProtectPDFClient from "./ProtectPDFClient";

export const metadata: Metadata = {
  title: "Protect PDF Free Online — QuantixTools",
  description: "Add password to your PDF. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/protect-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/protect-pdf",
    title: "Protect PDF Free Online — QuantixTools",
    description: "Add password to your PDF. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Protect PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protect PDF Free Online — QuantixTools",
    description: "Add password to your PDF. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Protect PDF"
      description="Add password to your PDF."
      emoji="🔐"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <ProtectPDFClient />
    </ToolLayout>
  );
}
