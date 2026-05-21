import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import NoiseRemoverClient from "./NoiseRemoverClient";

export const metadata: Metadata = {
  title: "Noise Remover Free Online — QuantixTools",
  description: "Remove background noise. 100% free, no signup required.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Noise Remover"
      description="Remove background noise."
      emoji="🔇"
      category="Audio Tools"
      categoryHref="/tools/audio"
    >
      <NoiseRemoverClient />
    </ToolLayout>
  );
}
