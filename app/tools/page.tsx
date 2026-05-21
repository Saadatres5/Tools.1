import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { allCategories, getTotalToolCount } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "All Free Online Tools — QuantixTools",
  description: "Browse 100+ free online tools for PDF, images, video, AI writing, and more. No signup required.",
};

export default function ToolsPage() {
  const total = getTotalToolCount();
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="pt-28 pb-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">All Tools</h1>
        <p className="text-white/40 mb-8">{total}+ free tools. No signup required.</p>
        <SearchBar />
      </div>

      {/* Category quick-jump */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {allCategories.map(cat => (
            <a key={cat.id} href={`#${cat.id}`}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/8 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
              {cat.emoji} {cat.name}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-16">
        {allCategories.map(group => (
          <section key={group.id} id={group.id}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>{group.emoji}</span> {group.name}
                <span className="text-sm font-normal text-white/30">({group.tools.length})</span>
              </h2>
              <Link href={group.href} className="text-sm text-white/40 hover:text-white transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {group.tools.map(tool => (
                <Link key={tool.href} href={tool.href}
                  className="group p-4 rounded-2xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-white/15 transition-all duration-200">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors leading-snug">{tool.name}</h3>
                    {tool.badge && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 flex-shrink-0">{tool.badge}</span>
                    )}
                  </div>
                  <p className="text-white/40 text-xs">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
