import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RobotsTxtClient from "./RobotsTxtClient";

export const metadata: Metadata = {
  title: "Robots.txt Generator Free Online — QuantixTools",
  description: "Create robots.txt. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Robots.txt Generator"
      description="Create robots.txt."
      emoji="🤖"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <RobotsTxtClient />
    </ToolLayout>
  );
}
