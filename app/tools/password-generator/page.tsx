import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata: Metadata = {
  title: "Password Generator Free Online — QuantixTools",
  description: "Generate strong passwords. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/password-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/password-generator",
    title: "Password Generator Free Online — QuantixTools",
    description: "Generate strong passwords. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Password Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Generator Free Online — QuantixTools",
    description: "Generate strong passwords. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Password Generator"
      description="Generate strong passwords."
      emoji="🔐"
      category="Security Tools"
      categoryHref="/tools/security"
    >
      <PasswordGeneratorClient />
    </ToolLayout>
  );
}
