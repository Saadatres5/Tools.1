import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import HabitTrackerClient from "./HabitTrackerClient";

export const metadata: Metadata = {
  title: "Habit Tracker Free Online — QuantixTools",
  description: "Track daily habits. 100% free, no signup required.",
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
