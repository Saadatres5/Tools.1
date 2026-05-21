import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import type { Category } from "@/types/tools";
import { allCategories } from "@/lib/tools-data";

export default function CategoryPage({ category }: { category: Category }) {
  const aiTools = category.tools.filter(t => t.badge === "AI");
  const relatedCategories = allCategories.filter(c => c.id !== category.id).slice(0, 4);

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} — Free Online Tools`,
    description: `${category.tools.length}+ free ${category.name.toLowerCase()} online. No signup required.`,
    url: `https://toolsai.com${category.href}`,
    hasPart: category.tools.map(t => ({ "@type": "SoftwareApplication", name: t.name, description: t.desc, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } })),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
      <Navbar />

      {/* Top ad */}
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <AdBanner slot="1122334455" format="horizontal" className="rounded-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <Link href="/" className="hover:text-white/60">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white/60">Tools</Link>
          <span>/</span>
          <span className="text-white/60" aria-current="page">{category.name}</span>
        </nav>

        {/* Hero */}
        <div className={`rounded-3xl bg-gradient-to-br ${category.gradient} border ${category.border} p-8 md:p-12 mb-12`}>
          <div className="text-5xl mb-4">{category.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-white/50 text-lg max-w-xl mb-6">{category.tools.length}+ free {category.name.toLowerCase()} — no signup, no limits, privacy first.</p>
          <div className="flex flex-wrap gap-2">
            {category.tools.slice(0, 5).map(t => (
              <Link key={t.href} href={t.href} className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-sm transition-colors">{t.name}</Link>
            ))}
          </div>
        </div>

        {/* AI Tools Spotlight */}
        {aiTools.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">🤖 AI-Powered Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {aiTools.map(tool => (
                <Link key={tool.href} href={tool.href}
                  className="group p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm group-hover:text-purple-400 transition-colors">{tool.name}</h3>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300">AI</span>
                  </div>
                  <p className="text-white/40 text-xs">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Mid-page Ad */}
        <AdBanner slot="5566778899" format="rectangle" className="rounded-xl mb-12" />

        {/* All Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6">All {category.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.tools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group p-5 rounded-2xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-white/15 transition-all">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                  {tool.badge && tool.badge !== "AI" && (
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 flex-shrink-0">{tool.badge}</span>
                  )}
                </div>
                <p className="text-white/40 text-xs">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Categories */}
        <section>
          <h2 className="text-xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedCategories.map(cat => (
              <Link key={cat.id} href={cat.href}
                className={`p-5 rounded-2xl bg-gradient-to-br ${cat.gradient} border ${cat.border} hover:scale-[1.02] transition-all`}>
                <div className="text-2xl mb-2">{cat.emoji}</div>
                <h3 className="font-semibold text-sm">{cat.name}</h3>
                <p className="text-white/40 text-xs mt-1">{cat.tools.length} tools</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
