import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import TodoClient from "./TodoClient";

export const metadata: Metadata = {
  title: "To-Do List Free Online — QuantixTools",
  description: "Simple task manager. 100% free, no signup required.",
  alternates: {
    canonical: "https://quantixtools.com/tools/todo-list",
  },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/tools/todo-list",
    title: "To-Do List Free Online — QuantixTools",
    description: "Simple task manager. 100% free, no signup required.",
    siteName: "QuantixTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "To-Do List Free Online — QuantixTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "To-Do List Free Online — QuantixTools",
    description: "Simple task manager. 100% free, no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <ToolLayout
      title="To-Do List"
      description="Simple task manager."
      emoji="✅"
      category="Productivity Tools"
      categoryHref="/tools/productivity"
    >
      <TodoClient />
    </ToolLayout>
  );
}
