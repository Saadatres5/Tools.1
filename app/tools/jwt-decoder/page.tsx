import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import JWTClient from "./JWTClient";

export const metadata: Metadata = {
  title: "JWT Decoder Free Online — QuantixTools",
  description: "Decode JWT tokens. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/jwt-decoder" },
};

export default function Page() {
  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JWT tokens."
      emoji="🔑"
      category="Developer Tools"
      categoryHref="/tools/developer"
    >
      <JWTClient />
    </ToolLayout>
  );
}
