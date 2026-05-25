import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Business Tools — Free Online Business Tools | QuantixTools",
  description: "Free business tools. Create invoices, generate business names, build resumes and more.",
  keywords: ["business tools", "free business tools", "online business tools", "no signup business tools", "browser based business tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/business",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/business",
    title: "Business Tools — Free Online Business Tools | QuantixTools",
    description: "Free business tools. Create invoices, generate business names, build resumes and more.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Business Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Tools — Free Online Business Tools | QuantixTools",
    description: "Free business tools. Create invoices, generate business names, build resumes and more.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("business")!;
  return <CategoryPage category={category} />;
}
