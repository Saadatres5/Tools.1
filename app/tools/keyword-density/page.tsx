import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import KeywordDensityClient from "./KeywordDensityClient";

export const metadata: Metadata = {
  title: "Keyword Density Checker Free Online — QuantixTools",
  description: "Analyze keyword usage. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/keyword-density" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Keyword Density Checker"
      description="Analyze keyword usage."
      emoji="🔑"
      category="SEO Tools"
      categoryHref="/tools/seo"
    >
      <KeywordDensityClient />
    </ToolLayout>
  );
}
