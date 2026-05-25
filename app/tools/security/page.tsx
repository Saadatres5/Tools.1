import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Security Tools — Free Online Security Tools | QuantixTools",
  description: "Free online security tools. Generate strong passwords, create hashes, encode data and more.",
  keywords: ["security tools", "free security tools", "online security tools", "no signup security tools", "browser based security tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/security",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/security",
    title: "Security Tools — Free Online Security Tools | QuantixTools",
    description: "Free online security tools. Generate strong passwords, create hashes, encode data and more.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Security Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Tools — Free Online Security Tools | QuantixTools",
    description: "Free online security tools. Generate strong passwords, create hashes, encode data and more.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("security")!;
  return <CategoryPage category={category} />;
}
