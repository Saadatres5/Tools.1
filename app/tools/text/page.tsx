import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Text Tools — Free Online Text Tools | QuantixTools",
  description: "Free text processing tools. Count words, convert case, generate lorem ipsum, compare text and more.",
  keywords: ["text tools", "free text tools", "online text tools", "no signup text tools", "browser based text tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/text",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/text",
    title: "Text Tools — Free Online Text Tools | QuantixTools",
    description: "Free text processing tools. Count words, convert case, generate lorem ipsum, compare text and more.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Text Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Tools — Free Online Text Tools | QuantixTools",
    description: "Free text processing tools. Count words, convert case, generate lorem ipsum, compare text and more.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("text")!;
  return <CategoryPage category={category} />;
}
