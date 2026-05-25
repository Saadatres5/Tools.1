import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PomodoroClient from "./PomodoroClient";

export const metadata: Metadata = {
  title: "Pomodoro Timer Free Online — QuantixTools",
  description: "Boost focus with Pomodoro. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/pomodoro-timer",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/pomodoro-timer",
    title: "Pomodoro Timer Free Online — QuantixTools",
    description: "Boost focus with Pomodoro. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pomodoro Timer Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomodoro Timer Free Online — QuantixTools",
    description: "Boost focus with Pomodoro. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Pomodoro Timer"
      description="Boost focus with Pomodoro."
      emoji="🍅"
      category="Productivity Tools"
      categoryHref="/tools/productivity"
    >
      <PomodoroClient />
    </ToolLayout>
  );
}
