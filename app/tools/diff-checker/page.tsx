import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import DiffCheckerClient from "./DiffCheckerClient";

export const metadata: Metadata = {
  title: "Diff Checker Free Online — QuantixTools",
  description: "Compare two texts. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/diff-checker",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/diff-checker",
    title: "Diff Checker Free Online — QuantixTools",
    description: "Compare two texts. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Diff Checker Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diff Checker Free Online — QuantixTools",
    description: "Compare two texts. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Diff Checker"
      description="Compare two texts."
      emoji="🔀"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <DiffCheckerClient />
    </ToolLayout>
  );
}
