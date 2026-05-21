import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Audio Tools — Free Online Tools — ToolsAI",
  description: "Free audio tools online. No signup required. Fast, private, browser-based.",
};

export default function Page() {
  const category = getCategoryById("audio")!;
  return <CategoryPage category={category} />;
}
