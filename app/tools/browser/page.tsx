import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Browser Utilities — Free Online Tools — ToolsAI",
  description: "Free browser utilities online. No signup required. Fast, private, browser-based.",
};

export default function Page() {
  const category = getCategoryById("browser")!;
  return <CategoryPage category={category} />;
}
