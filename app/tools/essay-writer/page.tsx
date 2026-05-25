import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import EssayWriterClient from "./EssayWriterClient";

export const metadata: Metadata = {
  title: "Essay Writer Free Online — QuantixTools",
  description: "Write essays with AI assistance. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/essay-writer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/essay-writer",
    title: "Essay Writer Free Online — QuantixTools",
    description: "Write essays with AI assistance. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Essay Writer Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essay Writer Free Online — QuantixTools",
    description: "Write essays with AI assistance. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Essay Writer"
      description="Write essays with AI assistance."
      emoji="✍️"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <EssayWriterClient />
    </ToolLayout>
  );
}
