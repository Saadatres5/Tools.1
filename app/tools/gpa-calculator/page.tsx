import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import GPAClient from "./GPAClient";

export const metadata: Metadata = {
  title: "GPA Calculator Free Online — QuantixTools",
  description: "Calculate your GPA. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/gpa-calculator",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/gpa-calculator",
    title: "GPA Calculator Free Online — QuantixTools",
    description: "Calculate your GPA. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GPA Calculator Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPA Calculator Free Online — QuantixTools",
    description: "Calculate your GPA. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="GPA Calculator"
      description="Calculate your GPA."
      emoji="🎓"
      category="Student Tools"
      categoryHref="/tools/student"
    >
      <GPAClient />
    </ToolLayout>
  );
}
