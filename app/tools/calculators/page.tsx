import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Calculator Tools — Free Online Tools — QuantixTools",
  description: "Free calculator tools online. No signup required. Fast, private, browser-based.",
};

export default function Page() {
  const category = getCategoryById("calculators")!;
  return <CategoryPage category={category} />;
}
