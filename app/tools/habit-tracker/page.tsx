import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import HabitTrackerClient from "./HabitTrackerClient";

export const metadata: Metadata = {
  title: "Habit Tracker Free Online — QuantixTools",
  description: "Track daily habits. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/habit-tracker",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/habit-tracker",
    title: "Habit Tracker Free Online — QuantixTools",
    description: "Track daily habits. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Habit Tracker Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habit Tracker Free Online — QuantixTools",
    description: "Track daily habits. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="Habit Tracker"
      description="Track daily habits."
      emoji="🔥"
      category="Productivity Tools"
      categoryHref="/tools/productivity"
    >
      <HabitTrackerClient />
    </ToolLayout>
  );
}
