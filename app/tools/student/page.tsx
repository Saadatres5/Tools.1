import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Student Tools — Free Online Student Tools | QuantixTools",
  description: "Free tools for students. Write essays, generate citations, calculate GPA, get homework help.",
  keywords: ["student tools", "free student tools", "online student tools", "no signup student tools", "browser based student tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/student",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/student",
    title: "Student Tools — Free Online Student Tools | QuantixTools",
    description: "Free tools for students. Write essays, generate citations, calculate GPA, get homework help.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Student Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Tools — Free Online Student Tools | QuantixTools",
    description: "Free tools for students. Write essays, generate citations, calculate GPA, get homework help.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("student")!;
  return <CategoryPage category={category} />;
}
