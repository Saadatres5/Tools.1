import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "PDF Tools — Free Online Tools — QuantixTools",
  description: "Free pdf tools online. No signup required. Fast, private, browser-based.",
  alternates: { canonical: "https://quantixtools.com/tools/pdf" },
};

export default function Page() {
  const category = getCategoryById("pdf")!;
  return <CategoryPage category={category} />;
}
