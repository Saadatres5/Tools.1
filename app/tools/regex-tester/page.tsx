import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RegexClient from "./RegexClient";

export const metadata: Metadata = {
  title: "Regex Tester Free Online — QuantixTools",
  description: "Test regular expressions. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/regex-tester",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/regex-tester",
    title: "Regex Tester Free Online — QuantixTools",
    description: "Test regular expressions. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Regex Tester Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex Tester Free Online — QuantixTools",
    description: "Test regular expressions. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions."
      emoji="🔍"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <RegexClient />
    </ToolLayout>
  );
}
