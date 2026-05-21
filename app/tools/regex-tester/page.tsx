import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import RegexClient from "./RegexClient";

export const metadata: Metadata = {
  title: "Regex Tester Free Online — QuantixTools",
  description: "Test regular expressions. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions."
      emoji="🔍"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <RegexClient />
    </ToolLayout>
  );
}
