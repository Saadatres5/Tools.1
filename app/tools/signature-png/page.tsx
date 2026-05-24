import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import SignaturePNGClient from "./SignaturePNGClient";

export const metadata: Metadata = {
  title: "Extract Signature to PNG Free — QuantixTools",
  description: "Upload a signed document or image. AI automatically detects the signature, removes the background, and gives you a clean transparent PNG — ready to use anywhere.",
  alternates: { canonical: "https://quantixtools.com/tools/signature-png" },
};

export default function Page() {
  return (
    <ToolLayout
      title="Signature to PNG"
      description="Upload any signed document or photo. Automatically detects your signature, removes the background, and exports a clean transparent PNG."
      emoji="✍️"
      category="Image Tools"
      categoryHref="/tools/image"
      related={[
        { name: "Remove Background", href: "/tools/remove-background" },
        { name: "Sign PDF", href: "/tools/sign-pdf" },
        { name: "Image Cropper", href: "/tools/image-cropper" },
        { name: "Convert Image", href: "/tools/convert-image" },
        { name: "Compress Image", href: "/tools/compress-image" },
      ]}
    >
      <SignaturePNGClient />
    </ToolLayout>
  );
}
