import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTotalToolCount } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "About ToolsAI — Free AI & File Tools Platform",
  description: "ToolsAI is a free browser-based platform with 100+ AI and file tools. No signup, no uploads, privacy first.",
  alternates: { canonical: "https://toolsai.com/about" },
};

export default function AboutPage() {
  const total = getTotalToolCount();
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-4">About ToolsAI</h1>
        <p className="text-white/50 text-lg mb-12">We believe powerful tools should be free, fast, and private — for everyone.</p>

        <section className="space-y-8">
          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="text-xl font-bold mb-3">Our Mission</h2>
            <p className="text-white/60 leading-relaxed">ToolsAI was built to give everyone access to powerful AI and file processing tools — completely free, with no account required. Most of our tools run entirely inside your browser, meaning your files never leave your device.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: `${total}+`, label: "Free Tools" },
              { value: "15+", label: "Categories" },
              { value: "0", label: "Signups Needed" },
              { value: "100%", label: "Free Forever" },
            ].map(stat => (
              <div key={stat.label} className="p-5 rounded-2xl bg-white/3 border border-white/8">
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="text-xl font-bold mb-3">Privacy First Architecture</h2>
            <p className="text-white/60 leading-relaxed mb-4">Unlike most online tools, ToolsAI processes your files locally in your browser using modern Web APIs, WebAssembly, and browser-based AI models. Your documents, images, and data never touch our servers.</p>
            <Link href="/privacy" className="text-blue-400 text-sm hover:underline">Read our Privacy Policy →</Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="text-xl font-bold mb-3">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Transformers.js", "FFmpeg WASM", "Tesseract OCR", "PDF-lib", "WebAssembly"].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">{tech}</span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20">
            <h2 className="text-xl font-bold mb-3">Start Using Tools</h2>
            <p className="text-white/50 mb-4">No account needed. Jump straight in.</p>
            <Link href="/tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-sm">
              Browse All Tools →
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
