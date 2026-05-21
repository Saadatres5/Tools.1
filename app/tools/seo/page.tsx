import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "SEO Tools — Free Online Tools — QuantixTools",
  description: "Free seo tools online. No signup required. Fast, private, browser-based.",
};

export default function Page() {
  const category = getCategoryById("seo")!;
  return <CategoryPage category={category} />;
}
