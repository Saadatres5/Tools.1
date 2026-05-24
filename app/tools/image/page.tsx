import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Image Tools — Free Online Tools — QuantixTools",
  description: "Free image tools online. No signup required. Fast, private, browser-based.",
  alternates: { canonical: "https://quantixtools.com/tools/image" },
};

export default function Page() {
  const category = getCategoryById("image")!;
  return <CategoryPage category={category} />;
}
