import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Developer Tools — Free Online Developer Tools | QuantixTools",
  description: "Free tools for developers. Format JSON, encode Base64, generate UUIDs, test regex and more.",
  keywords: ["developer tools", "free developer tools", "online developer tools", "no signup developer tools", "browser based developer tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/developer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/developer",
    title: "Developer Tools — Free Online Developer Tools | QuantixTools",
    description: "Free tools for developers. Format JSON, encode Base64, generate UUIDs, test regex and more.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Developer Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Tools — Free Online Developer Tools | QuantixTools",
    description: "Free tools for developers. Format JSON, encode Base64, generate UUIDs, test regex and more.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("developer")!;
  return <CategoryPage category={category} />;
}
