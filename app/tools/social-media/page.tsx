import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Social Media Tools — Free Online Social Media Tools | QuantixTools",
  description: "Free tools for social media creators. Generate hashtags, write captions, create thumbnails.",
  keywords: ["social media tools", "free social media tools", "online social media tools", "no signup social media tools", "browser based social media tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/social-media",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/social-media",
    title: "Social Media Tools — Free Online Social Media Tools | QuantixTools",
    description: "Free tools for social media creators. Generate hashtags, write captions, create thumbnails.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Social Media Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Tools — Free Online Social Media Tools | QuantixTools",
    description: "Free tools for social media creators. Generate hashtags, write captions, create thumbnails.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("social-media")!;
  return <CategoryPage category={category} />;
}
