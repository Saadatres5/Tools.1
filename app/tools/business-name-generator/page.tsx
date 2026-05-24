import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import BusinessNameClient from "./BusinessNameClient";

export const metadata: Metadata = {
  title: "Business Name Generator Free Online — QuantixTools",
  description: "Generate creative business names. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/business-name-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Business Name Generator"
      description="Generate creative business names."
      emoji="💡"
      category="Business Tools"
      categoryHref="/tools/business"
    >
      <BusinessNameClient />
    </ToolLayout>
  );
}
