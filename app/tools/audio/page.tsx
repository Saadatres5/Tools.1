import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Audio Tools — Free Online Audio Tools | QuantixTools",
  description: "Convert, cut, extract and process audio files online for free. Works in your browser instantly.",
  keywords: ["audio tools", "free audio tools", "online audio tools", "no signup audio tools", "browser based audio tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/audio",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/audio",
    title: "Audio Tools — Free Online Audio Tools | QuantixTools",
    description: "Convert, cut, extract and process audio files online for free. Works in your browser instantly.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Audio Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Tools — Free Online Audio Tools | QuantixTools",
    description: "Convert, cut, extract and process audio files online for free. Works in your browser instantly.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("audio")!;
  return <CategoryPage category={category} />;
}
