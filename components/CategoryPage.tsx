import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import type { Category } from "@/types/tools";
import { allCategories } from "@/lib/tools-data";

const catBg: Record<string, string> = {
  pdf: "#fff0f3", ai: "#f5f3ff", image: "#eff6ff", video: "#fdf4ff",
  audio: "#fffbeb", developer: "#ecfdf5", seo: "#f0f9ff", text: "#fefce8",
  calculators: "#f0fdf4", productivity: "#f8fafc", security: "#fff1f2",
  "social-media": "#fdf4ff", student: "#eff6ff", business: "#f0fdf4", browser: "#f8fafc",
};
const catColor: Record<string, string> = {
  pdf: "#e8284a", ai: "#7c3aed", image: "#2563eb", video: "#9333ea",
  audio: "#d97706", developer: "#16a34a", seo: "#0284c7", text: "#ca8a04",
  calculators: "#15803d", productivity: "#475569", security: "#dc2626",
  "social-media": "#a21caf", student: "#1d4ed8", business: "#166534", browser: "#64748b",
};

export default function CategoryPage({ category }: { category: Category }) {
  const aiTools = category.tools.filter(t => t.badge === "AI");
  const regularTools = category.tools.filter(t => t.badge !== "AI");
  const relatedCategories = allCategories.filter(c => c.id !== category.id).slice(0, 4);
  const bg = catBg[category.id] || "#f1f5f9";
  const color = catColor[category.id] || "#475569";

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} — Free Online Tools`,
    description: `${category.tools.length}+ free ${category.name.toLowerCase()} online. No signup required.`,
    url: `https://quantixtools.com${category.href}`,
    hasPart: category.tools.map(t => ({
      "@type": "SoftwareApplication", name: t.name, description: t.desc,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
      <Navbar />
      <main id="main-content">

        {/* Hero banner */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "48px 24px 36px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#94a3b8", marginBottom: 20, flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }} className="bc-link">Home</Link>
              <span>/</span>
              <Link href="/tools" style={{ color: "#94a3b8", textDecoration: "none" }} className="bc-link">Tools</Link>
              <span>/</span>
              <span style={{ color: "#475569", fontWeight: 600 }} aria-current="page">{category.name}</span>
            </nav>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
              {/* Big icon */}
              <div style={{ width: 72, height: 72, borderRadius: 18, background: bg, border: `1px solid ${color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, flexShrink: 0 }}>
                {category.emoji}
              </div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 8 }}>
                  {category.name}
                </h1>
                <p style={{ fontSize: 15, color: "#64748b", marginBottom: 14 }}>
                  {category.tools.length}+ free {category.name.toLowerCase()} — no signup, no limits, privacy first.
                </p>
                {/* Quick-access pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {category.tools.slice(0, 5).map(t => (
                    <Link key={t.href} href={t.href} style={{
                      fontSize: 12, fontWeight: 500, color,
                      background: bg, border: `1px solid ${color}22`,
                      borderRadius: 100, padding: "5px 13px",
                      textDecoration: "none", transition: "all .15s",
                    }} className="quick-pill">{t.name}</Link>
                  ))}
                </div>
              </div>
              {/* Stats */}
              <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
                {[
                  { value: `${category.tools.length}+`, label: "Tools" },
                  { value: "Free", label: "Always" },
                  { value: "0", label: "Signups" },
                ].map(s => (
                  <div key={s.label} style={{ background: bg, borderRadius: 12, padding: "14px 18px", textAlign: "center", minWidth: 72 }}>
                    <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 20, fontWeight: 800, color, marginBottom: 2 }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 24px 80px" }}>

          {/* Top ad */}
          <div style={{ marginBottom: 32 }}>
            <AdBanner slot="1122334455" format="horizontal" className="rounded-xl" />
          </div>

          {/* AI Tools spotlight */}
          {aiTools.length > 0 && (
            <section style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🤖</div>
                <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>AI-Powered Tools</h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
                {aiTools.map(tool => (
                  <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
                    <div style={{ background: "#fff", border: "1px solid #e9d5ff", borderRadius: 12, padding: "16px", transition: "all .18s", cursor: "pointer" }} className="ai-card">
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{tool.name}</span>
                        <span style={{ fontSize: 9, fontWeight: 800, background: "#f5f3ff", color: "#7c3aed", padding: "2px 7px", borderRadius: 100 }}>AI</span>
                      </div>
                      <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{tool.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Mid ad */}
          <div style={{ marginBottom: 32 }}>
            <AdBanner slot="5566778899" format="rectangle" className="rounded-xl" />
          </div>

          {/* All Tools */}
          <section style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                {category.emoji}
              </div>
              <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>All {category.name}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
              {category.tools.map(tool => (
                <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 12, padding: "16px", transition: "all .18s", cursor: "pointer", position: "relative" }} className="tool-card-inner">
                    {tool.badge && tool.badge !== "AI" && (
                      <span style={{ position: "absolute", top: 10, right: 10, fontSize: 9, fontWeight: 800, background: "#eff6ff", color: "#2563eb", padding: "2px 7px", borderRadius: 100 }}>{tool.badge}</span>
                    )}
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, marginBottom: 10 }} />
                    <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 13, fontWeight: 700, color: "#1a1a2e", marginBottom: 4, lineHeight: 1.3, paddingRight: tool.badge && tool.badge !== "AI" ? 32 : 0 }}>{tool.name}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{tool.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Categories */}
          <section>
            <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 17, fontWeight: 700, color: "#1a1a2e", marginBottom: 16 }}>More Tool Categories</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
              {relatedCategories.map(cat => {
                const rBg = catBg[cat.id] || "#f1f5f9";
                const rColor = catColor[cat.id] || "#475569";
                return (
                  <Link key={cat.id} href={cat.href} style={{ textDecoration: "none" }}>
                    <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 12, padding: "18px 16px", transition: "all .18s", cursor: "pointer" }} className="rel-card">
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: rBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>
                        {cat.emoji}
                      </div>
                      <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 3 }}>{cat.name}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>{cat.tools.length} tools</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <style>{`
        .tool-card-inner:hover { border-color: ${color} !important; box-shadow: 0 6px 20px rgba(0,0,0,.08); transform: translateY(-2px); }
        .ai-card:hover { border-color: #a855f7 !important; box-shadow: 0 6px 20px rgba(168,85,247,.12); transform: translateY(-2px); }
        .rel-card:hover { border-color: #e8284a !important; box-shadow: 0 6px 20px rgba(232,40,74,.09); transform: translateY(-2px); }
        .bc-link:hover { color: #1a1a2e !important; }
        .quick-pill:hover { opacity: .8; }
      `}</style>
    </div>
  );
}
