import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { allCategories, getTotalToolCount } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "All Free Online Tools — QuantixTools",
  description: "Browse 100+ free online tools for PDF, images, video, AI writing, and more. No signup required.",
  alternates: { canonical: "https://quantixtools.com/tools" },
};

const toolIconBg: Record<string, string> = {
  pdf: "#fff0f3", ai: "#f5f3ff", image: "#eff6ff", video: "#fdf4ff",
  audio: "#fffbeb", developer: "#ecfdf5", seo: "#f0f9ff", text: "#fefce8",
  calculators: "#f0fdf4", productivity: "#f8fafc", security: "#fff1f2",
  "social-media": "#fdf4ff", student: "#eff6ff", business: "#f0fdf4", browser: "#f8fafc",
};
const toolIconColor: Record<string, string> = {
  pdf: "#e8284a", ai: "#7c3aed", image: "#2563eb", video: "#9333ea",
  audio: "#d97706", developer: "#16a34a", seo: "#0284c7", text: "#ca8a04",
  calculators: "#15803d", productivity: "#475569", security: "#dc2626",
  "social-media": "#a21caf", student: "#1d4ed8", business: "#166534", browser: "#64748b",
};

export default function ToolsPage() {
  const total = getTotalToolCount();
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 12 }}>
            All Free Online Tools
          </h1>
          <p style={{ fontSize: 16, color: "#64748b", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            {total}+ tools. No signup. No limits. 100% free — forever.
          </p>
          <div style={{ maxWidth: 560, margin: "0 auto 24px" }}>
            <SearchBar />
          </div>
        </div>

        {/* Category quick-jump pill bar */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 6, minWidth: "max-content" }}>
            {allCategories.map(cat => {
              const bg = toolIconBg[cat.id] || "#f1f5f9";
              const color = toolIconColor[cat.id] || "#475569";
              return (
                <a key={cat.id} href={`#${cat.id}`} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "7px 14px", borderRadius: 100,
                  fontSize: 12, fontWeight: 600,
                  background: bg, color,
                  textDecoration: "none", whiteSpace: "nowrap",
                  border: `1px solid transparent`,
                  transition: "all .15s",
                }} className="cat-pill">
                  {cat.emoji} {cat.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* All categories + tools */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
          {allCategories.map(group => {
            const bg = toolIconBg[group.id] || "#f1f5f9";
            const color = toolIconColor[group.id] || "#475569";
            return (
              <section key={group.id} id={group.id} style={{ marginBottom: 52, scrollMarginTop: 80 }}>

                {/* Section header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                      {group.emoji}
                    </div>
                    <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 18, fontWeight: 700, color: "#1a1a2e" }}>{group.name}</h2>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", background: "#f1f5f9", padding: "2px 8px", borderRadius: 100 }}>
                      {group.tools.length} tools
                    </span>
                  </div>
                  <Link href={group.href} style={{ fontSize: 13, fontWeight: 600, color, textDecoration: "none" }}>
                    View category →
                  </Link>
                </div>

                {/* Tool cards grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 12 }}>
                  {group.tools.map(tool => (
                    <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }} className="tool-card-wrap">
                      <div style={{
                        background: "#fff",
                        border: "1px solid #e8eaf0",
                        borderRadius: 12,
                        padding: "16px 16px",
                        cursor: "pointer",
                        transition: "all .18s ease",
                        height: "100%",
                        position: "relative",
                      }} className="tool-card-inner">
                        {/* AI badge */}
                        {"badge" in tool && tool.badge && (
                          <span style={{
                            position: "absolute", top: 10, right: 10,
                            fontSize: 9, fontWeight: 800,
                            background: tool.badge === "AI" ? "#f5f3ff" : "#eff6ff",
                            color: tool.badge === "AI" ? "#7c3aed" : "#2563eb",
                            padding: "2px 7px", borderRadius: 100,
                          }}>{tool.badge}</span>
                        )}
                        {/* Icon dot */}
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, marginBottom: 10 }} />
                        {/* Name */}
                        <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 13, fontWeight: 700, color: "#1a1a2e", marginBottom: 4, lineHeight: 1.3, paddingRight: tool.badge ? 32 : 0 }}>
                          {tool.name}
                        </div>
                        {/* Desc */}
                        <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>{tool.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <style>{`
        .tool-card-inner:hover { border-color: #e8284a !important; box-shadow: 0 6px 20px rgba(232,40,74,.1); transform: translateY(-2px); }
        .cat-pill:hover { box-shadow: 0 2px 8px rgba(0,0,0,.08); transform: translateY(-1px); opacity: .85; }
      `}</style>
    </div>
  );
}
