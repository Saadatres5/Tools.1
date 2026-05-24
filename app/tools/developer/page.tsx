import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Developer Tools — Free Online Tools — QuantixTools",
  description: "Free developer tools online. No signup required. Fast, private, browser-based.",
  alternates: { canonical: "https://quantixtools.com/tools/developer" },
};

export default function Page() {
  const category = getCategoryById("developer")!;
  return <CategoryPage category={category} />;
}
