import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryById } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Productivity Tools — Free Online Productivity Tools | QuantixTools",
  description: "Free productivity tools to get more done. Manage tasks, track habits, stay focused with Pomodoro.",
  keywords: ["productivity tools", "free productivity tools", "online productivity tools", "no signup productivity tools", "browser based productivity tools"],
  alternates: {
    canonical: "https://quantixtools.com/tools/productivity",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/productivity",
    title: "Productivity Tools — Free Online Productivity Tools | QuantixTools",
    description: "Free productivity tools to get more done. Manage tasks, track habits, stay focused with Pomodoro.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Productivity Tools — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productivity Tools — Free Online Productivity Tools | QuantixTools",
    description: "Free productivity tools to get more done. Manage tasks, track habits, stay focused with Pomodoro.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const category = getCategoryById("productivity")!;
  return <CategoryPage category={category} />;
}
