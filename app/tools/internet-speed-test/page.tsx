import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SpeedTestClient from "./SpeedTestClient";

export const metadata: Metadata = {
  title: "Internet Speed Test Free Online — QuantixTools",
  description: "Test connection speed. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Internet Speed Test"
      description="Test connection speed."
      emoji="⚡"
      category="Browser Utilities"
      categoryHref="/tools/browser"
    >
      <SpeedTestClient />
    </ToolLayout>
  );
}
