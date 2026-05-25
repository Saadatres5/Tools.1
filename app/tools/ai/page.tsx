import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "AI Tools — Free Online AI Tools | QuantixTools",
  description: "100% free AI-powered tools. Write, summarize, translate, paraphrase and more with AI. No account needed.",
  keywords: ["ai tools", "free ai tools", "online ai tools", "no signup ai tools", "browser based ai tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/ai",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/ai",
    title: "AI Tools — Free Online AI Tools | QuantixTools",
    description: "100% free AI-powered tools. Write, summarize, translate, paraphrase and more with AI. No account needed.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools — Free Online AI Tools | QuantixTools",
    description: "100% free AI-powered tools. Write, summarize, translate, paraphrase and more with AI. No account needed.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("ai")!;
  return <CategoryPage category={category} />;
}
