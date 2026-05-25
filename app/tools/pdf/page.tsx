import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "PDF Tools — Free Online PDF Tools | QuantixTools",
  description: "Convert, compress, merge, split and edit PDF files for free. Browser-based, instant, privacy-first.",
  keywords: ["pdf tools", "free pdf tools", "online pdf tools", "no signup pdf tools", "browser based pdf tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/pdf",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/pdf",
    title: "PDF Tools — Free Online PDF Tools | QuantixTools",
    description: "Convert, compress, merge, split and edit PDF files for free. Browser-based, instant, privacy-first.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PDF Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools — Free Online PDF Tools | QuantixTools",
    description: "Convert, compress, merge, split and edit PDF files for free. Browser-based, instant, privacy-first.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("pdf")!;
  return <CategoryPage category={category} />;
}
