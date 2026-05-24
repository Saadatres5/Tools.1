import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import JSONFormatterClient from "./JSONFormatterClient";

export const metadata: Metadata = {
  title: "JSON Formatter Free Online — QuantixTools",
  description: "Format and validate JSON. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/json-formatter" },
};

export default function Page() {
  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format and validate JSON."
      emoji="{ }"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <JSONFormatterClient />
    </ToolLayout>
  );
}
