import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MD5Client from "./MD5Client";

export const metadata: Metadata = {
  title: "MD5 Generator Free Online — QuantixTools",
  description: "Generate MD5 hash. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/md5-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="MD5 Generator"
      description="Generate MD5 hash."
      emoji="#️⃣"
      category="Security Tools"
      categoryHref="/tools/security"
    >
      <MD5Client />
    </ToolLayout>
  );
}
