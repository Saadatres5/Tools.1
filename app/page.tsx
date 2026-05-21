import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import AdBanner from "@/components/AdBanner";
import { allCategories, getTotalToolCount } from "@/lib/tools-data";

const featuredTools = [
  { name: "Compress PDF", href: "/tools/compress-pdf", emoji: "📦", desc: "Reduce PDF size instantly", badge: "Popular" },
  { name: "Remove Background", href: "/tools/remove-background", emoji: "✂️", desc: "AI background removal", badge: "AI" },
  { name: "AI Writer", href: "/tools/ai-writer", emoji: "✨", desc: "Generate content with AI", badge: "AI" },
  { name: "Merge PDF", href: "/tools/merge-pdf", emoji: "🔗", desc: "Combine multiple PDFs", badge: null },
  { name: "Upscale Image", href: "/tools/upscale-image", emoji: "🔍", desc: "Enhance image with AI", badge: "AI" },
  { name: "Speech to Text", href: "/tools/speech-to-text", emoji: "🎤", desc: "Transcribe audio instantly", badge: "AI" },
  { name: "JSON Formatter", href: "/tools/json-formatter", emoji: "{ }", desc: "Format and validate JSON", badge: null },
  { name: "Trim Video", href: "/tools/trim-video", emoji: "🎬", desc: "Cut and trim videos", badge: null },
];

const features = [
  { emoji: "🔒", title: "Privacy First", desc: "Files processed in your browser. Nothing uploaded to our servers." },
  { emoji: "⚡", title: "Instant & Fast", desc: "No waiting, no queues. Tools run immediately." },
  { emoji: "🆓", title: "Always Free", desc: "No account needed. No hidden fees. 100% free forever." },
  { emoji: "📱", title: "Works Everywhere", desc: "Any device, any browser. No software to install." },
];

const faqs = [
  { q: "Are all tools really free?", a: "Yes, 100% free. No signup, no credit card, no hidden fees." },
  { q: "Are my files safe?", a: "Absolutely. Most tools process files directly in your browser — nothing is sent to our servers." },
  { q: "Do I need to create an account?", a: "No account needed. Just open a tool and start using it immediately." },
  { q: "What file formats are supported?", a: "We support all major formats: PDF, JPG, PNG, MP4, MP3, DOCX, and many more." },
];

export default function HomePage() {
  const total = getTotalToolCount();
  const topCategories = allCategories.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {total}+ Free Tools Available
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            All Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              AI & File Tools
            </span>
            <br />in One Place
          </h1>
          <p className="text-white/50 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            100% Free &bull; No Signup &bull; Instant Processing &bull; Privacy First
          </p>
          <SearchBar />
          <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs text-white/30">
            {["Compress PDF", "Remove Background", "AI Writer", "Merge PDF", "Trim Video"].map(t => (
              <Link key={t} href={`/tools/${t.toLowerCase().replace(/ /g, "-")}`}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 hover:text-white/60 transition-colors">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">🔥 Trending Tools</h2>
            <Link href="/tools" className="text-sm text-white/40 hover:text-white transition-colors">View all {total}+ →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {featuredTools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group p-5 rounded-2xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-white/15 transition-all duration-200">
                <div className="text-3xl mb-3">{tool.emoji}</div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                  {tool.badge && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${tool.badge === "AI" ? "bg-purple-500/20 text-purple-300" : "bg-blue-500/20 text-blue-300"}`}>
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-white/40 text-xs">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad — After Trending Tools */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <AdBanner slot="2233445566" format="horizontal" className="rounded-2xl" />
      </div>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Browse by Category</h2>
            <Link href="/tools" className="text-sm text-white/40 hover:text-white transition-colors">All {allCategories.length} categories →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {topCategories.map(cat => (
              <Link key={cat.href} href={cat.href}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${cat.gradient} border ${cat.border} hover:scale-[1.02] transition-all duration-200`}>
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="font-bold mb-1">{cat.name}</h3>
                <p className="text-white/40 text-xs mb-3">{cat.tools.length} tools available</p>
                <div className="flex flex-wrap gap-1">
                  {cat.tools.slice(0, 3).map(t => (
                    <span key={t.name} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">{t.name}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Why QuantixTools?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="text-center p-6 rounded-2xl bg-white/3 border border-white/8">
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad — Mid Page */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <AdBanner slot="3344556677" format="rectangle" className="rounded-2xl" />
      </div>

      {/* AI Spotlight */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 p-8 md:p-12">
            <div className="max-w-2xl">
              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 mb-4 inline-block">AI-Powered</span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Browser-Based AI Tools</h2>
              <p className="text-white/50 mb-6">Our AI tools run entirely in your browser. No data leaves your device. No API keys. No cost.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "AI Writer", href: "/tools/ai-writer" },
                  { name: "AI Summarizer", href: "/tools/ai-summarizer" },
                  { name: "Remove Background", href: "/tools/remove-background" },
                  { name: "Speech to Text", href: "/tools/speech-to-text" },
                  { name: "AI Translator", href: "/tools/ai-translator" },
                  { name: "Text to Speech", href: "/tools/text-to-speech" },
                ].map(t => (
                  <Link key={t.href} href={t.href}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-sm transition-colors">
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All {allCategories.length} Tool Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {allCategories.map(cat => (
              <Link key={cat.id} href={cat.href}
                className={`p-4 rounded-2xl bg-gradient-to-br ${cat.gradient} border ${cat.border} hover:scale-[1.02] transition-all text-center`}>
                <div className="text-2xl mb-1">{cat.emoji}</div>
                <h3 className="font-semibold text-sm">{cat.name}</h3>
                <p className="text-white/30 text-xs">{cat.tools.length} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad — Before FAQ */}
      <div className="max-w-3xl mx-auto px-4 py-2">
        <AdBanner slot="4455667788" format="horizontal" className="rounded-2xl" />
      </div>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white/3 border border-white/8">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start using tools for free</h2>
          <p className="text-white/40 mb-8">No signup required. {total}+ tools at your fingertips.</p>
          <Link href="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition-all duration-200 hover:scale-105">
            Explore All Tools →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
