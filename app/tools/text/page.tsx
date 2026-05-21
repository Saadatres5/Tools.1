import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Text Tools — Free Online Tools — ToolsAI",
  description: "Free text tools online. No signup required. Fast, private, browser-based.",
};

export default function Page() {
  const category = getCategoryById("text")!;
  return <CategoryPage category={category} />;
}
