import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SignPDFClient from "./SignPDFClient";

export const metadata: Metadata = {
  title: "Sign PDF Free Online — QuantixTools",
  description: "Add digital signature to PDF. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/sign-pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/sign-pdf",
    title: "Sign PDF Free Online — QuantixTools",
    description: "Add digital signature to PDF. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sign PDF Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign PDF Free Online — QuantixTools",
    description: "Add digital signature to PDF. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Sign PDF"
      description="Add digital signature to PDF."
      emoji="✍️"
      category="PDF Tools"
      categoryHref="/tools/pdf"
    >
      <SignPDFClient />
    </ToolLayout>
  );
}
