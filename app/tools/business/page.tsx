import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Business Tools — Free Online Tools — ToolsAI",
  description: "Free business tools online. No signup required. Fast, private, browser-based.",
};

export default function Page() {
  const category = getCategoryById("business")!;
  return <CategoryPage category={category} />;
}
