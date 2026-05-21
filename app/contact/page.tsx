import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — ToolsAI",
  description: "Contact the ToolsAI team. We'd love to hear from you.",
  alternates: { canonical: "https://toolsai.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-white/50 mb-10">Have a question, suggestion, or found a bug? We&apos;d love to hear from you.</p>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="font-semibold mb-1">General Enquiries</h2>
            <a href="mailto:hello@toolsai.com" className="text-blue-400 hover:underline text-sm">hello@toolsai.com</a>
          </div>
          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="font-semibold mb-1">Privacy &amp; Legal</h2>
            <a href="mailto:privacy@toolsai.com" className="text-blue-400 hover:underline text-sm">privacy@toolsai.com</a>
          </div>
          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="font-semibold mb-1">Advertising</h2>
            <a href="mailto:ads@toolsai.com" className="text-blue-400 hover:underline text-sm">ads@toolsai.com</a>
          </div>
          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="font-semibold mb-2">Bug Reports &amp; Feature Requests</h2>
            <p className="text-white/50 text-sm">Found a bug or want to suggest a new tool? Email us at <a href="mailto:support@toolsai.com" className="text-blue-400 hover:underline">support@toolsai.com</a> and we&apos;ll look into it.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
