import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Video Tools — Free Online Video Tools | QuantixTools",
  description: "Trim, compress, convert and edit video files online for free. No watermark, no account needed.",
  keywords: ["video tools", "free video tools", "online video tools", "no signup video tools", "browser based video tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/video",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/video",
    title: "Video Tools — Free Online Video Tools | QuantixTools",
    description: "Trim, compress, convert and edit video files online for free. No watermark, no account needed.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Video Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Tools — Free Online Video Tools | QuantixTools",
    description: "Trim, compress, convert and edit video files online for free. No watermark, no account needed.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("video")!;
  return <CategoryPage category={category} />;
}
