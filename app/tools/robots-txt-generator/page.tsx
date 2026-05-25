import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RobotsTxtClient from "./RobotsTxtClient";

export const metadata: Metadata = {
  title: "Robots.txt Generator Free Online — QuantixTools",
  description: "Create robots.txt. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/robots-txt-generator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/robots-txt-generator",
    title: "Robots.txt Generator Free Online — QuantixTools",
    description: "Create robots.txt. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Robots.txt Generator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robots.txt Generator Free Online — QuantixTools",
    description: "Create robots.txt. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Robots.txt Generator"
      description="Create robots.txt."
      emoji="🤖"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <RobotsTxtClient />
    </ToolLayout>
  );
}
