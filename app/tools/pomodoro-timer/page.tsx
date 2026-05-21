import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import PomodoroClient from "./PomodoroClient";

export const metadata: Metadata = {
  title: "Pomodoro Timer Free Online — ToolsAI",
  description: "Boost focus with Pomodoro. 100% free, no signup required.",
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
