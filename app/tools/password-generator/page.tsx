import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata: Metadata = {
  title: "Password Generator Free Online — ToolsAI",
  description: "Generate strong passwords. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Password Generator"
      description="Generate strong passwords."
      emoji="🔐"
      category="Security Tools"
      categoryHref="/tools/security"
    >
      <PasswordGeneratorClient />
    </ToolLayout>
  );
}
