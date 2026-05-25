import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import WebcamRecorderClient from "./WebcamRecorderClient";

export const metadata: Metadata = {
  title: "Webcam Recorder Free Online — QuantixTools",
  description: "Record webcam video. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/webcam-recorder",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/webcam-recorder",
    title: "Webcam Recorder Free Online — QuantixTools",
    description: "Record webcam video. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Webcam Recorder Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webcam Recorder Free Online — QuantixTools",
    description: "Record webcam video. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Webcam Recorder"
      description="Record webcam video."
      emoji="📹"
      category="Browser Utilities"
      categoryHref="/tools/browser"
    >
      <WebcamRecorderClient />
    </ToolLayout>
  );
}
