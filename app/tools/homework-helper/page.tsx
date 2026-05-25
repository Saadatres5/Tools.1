import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import HomeworkHelperClient from "./HomeworkHelperClient";

export const metadata: Metadata = {
  title: "AI Homework Helper Free Online — QuantixTools",
  description: "Get help with homework. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/homework-helper",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/homework-helper",
    title: "AI Homework Helper Free Online — QuantixTools",
    description: "Get help with homework. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Homework Helper Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Homework Helper Free Online — QuantixTools",
    description: "Get help with homework. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="AI Homework Helper"
      description="Get help with homework."
      emoji="📚"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <HomeworkHelperClient />
    </ToolLayout>
  );
}
