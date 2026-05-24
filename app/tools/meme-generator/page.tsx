import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import MemeGeneratorClient from "./MemeGeneratorClient";

export const metadata: Metadata = {
  title: "Meme Generator Free Online — QuantixTools",
  description: "Create memes with custom text. 100% free, no signup required.",
  alternates: { canonical: "https://quantixtools.com/tools/meme-generator" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Meme Generator"
      description="Create memes with custom text."
      emoji="😂"
      category="Image Tools"
      categoryHref="/tools/image"
    >
      <MemeGeneratorClient />
    </ToolLayout>
  );
}
