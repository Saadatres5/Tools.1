import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Productivity Tools — Free Online Tools — QuantixTools",
  description: "Free productivity tools online. No signup required. Fast, private, browser-based.",
  alternates: { canonical: "https://quantixtools.com/tools/productivity" },
};

export default function Page() {
  const category = getCategoryById("productivity")!;
  return <CategoryPage category={category} />;
}
