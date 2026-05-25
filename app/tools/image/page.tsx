import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Image Tools — Free Online Image Tools | QuantixTools",
  description: "Free online image tools. Remove backgrounds, upscale, resize, compress and convert images instantly.",
  keywords: ["image tools", "free image tools", "online image tools", "no signup image tools", "browser based image tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/image",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/image",
    title: "Image Tools — Free Online Image Tools | QuantixTools",
    description: "Free online image tools. Remove backgrounds, upscale, resize, compress and convert images instantly.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Image Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Tools — Free Online Image Tools | QuantixTools",
    description: "Free online image tools. Remove backgrounds, upscale, resize, compress and convert images instantly.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("image")!;
  return <CategoryPage category={category} />;
}
