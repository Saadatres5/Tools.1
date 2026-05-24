import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Text Tools — Free Online Tools — QuantixTools",
  description: "Free text tools online. No signup required. Fast, private, browser-based.",
  alternates: { canonical: "https://quantixtools.com/tools/text" },
};

export default function Page() {
  const category = getCategoryById("text")!;
  return <CategoryPage category={category} />;
}
