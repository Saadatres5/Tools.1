import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Social Media Tools — Free Online Tools — QuantixTools",
  description: "Free social media tools online. No signup required. Fast, private, browser-based.",
  alternates: { canonical: "https://quantixtools.com/tools/social-media" },
};

export default function Page() {
  const category = getCategoryById("social-media")!;
  return <CategoryPage category={category} />;
}
