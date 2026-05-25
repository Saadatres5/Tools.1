import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Calculator Tools — Free Online Calculator Tools | QuantixTools",
  description: "Free online calculators for everyday needs. BMI, loan payments, GPA, percentage, age and more.",
  keywords: ["calculator tools", "free calculator tools", "online calculator tools", "no signup calculator tools", "browser based calculator tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/calculators",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/calculators",
    title: "Calculator Tools — Free Online Calculator Tools | QuantixTools",
    description: "Free online calculators for everyday needs. BMI, loan payments, GPA, percentage, age and more.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Calculator Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculator Tools — Free Online Calculator Tools | QuantixTools",
    description: "Free online calculators for everyday needs. BMI, loan payments, GPA, percentage, age and more.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("calculators")!;
  return <CategoryPage category={category} />;
}
