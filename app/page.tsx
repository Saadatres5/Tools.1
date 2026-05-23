// app/page.tsx — QuantixTools redesign inspired by IlovePDF clean layout
// Replace your existing app/page.tsx with this file

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import HomepageTools from "@/components/HomepageTools";
import AdBanner from "@/components/AdBanner";
import { allCategories, getTotalToolCount } from "@/lib/tools-data";

const filterTabs = [
  { label: "All Tools", value: "all" },
  { label: "PDF", value: "pdf" },
  { label: "AI Tools", value: "ai" },
  { label: "Image", value: "image" },
  { label: "Video", value: "video" },
  { label: "Audio", value: "audio" },
  { label: "Developer", value: "developer" },
  { label: "SEO", value: "seo" },
  { label: "Text", value: "text" },
  { label: "Calculators", value: "calculators" },
];

const toolIcons: Record<string, { bg: string; icon: string }> = {
  "compress-pdf":    { bg: "#fff0f0", icon: "📦" },
  "merge-pdf":       { bg: "#fff0f0", icon: "🔗" },
  "split-pdf":       { bg: "#fff0f0", icon: "✂️" },
  "rotate-pdf":      { bg: "#fff0f0", icon: "🔄" },
  "unlock-pdf":      { bg: "#fff0f0", icon: "🔓" },
  "protect-pdf":     { bg: "#fff0f0", icon: "🔒" },
  "ocr":             { bg: "#fff0f0", icon: "🔍" },
  "sign-pdf":        { bg: "#fff0f0", icon: "✍️" },
  "watermark-pdf":   { bg: "#fff0f0", icon: "🖊️" },
  "pdf-to-word":     { bg: "#eff6ff", icon: "📝" },
  "pdf-to-jpg":      { bg: "#eff6ff", icon: "🖼️" },
  "jpg-to-pdf":      { bg: "#fff0f0", icon: "🖼️" },
  "word-to-pdf":     { bg: "#fff0f0", icon: "📄" },
  "ai-pdf-summarizer": { bg: "#f5f3ff", icon: "🤖" },
  "remove-background": { bg: "#eff6ff", icon: "🖼️" },
  "upscale-image":   { bg: "#eff6ff", icon: "⬆️" },
  "resize-image":    { bg: "#eff6ff", icon: "📐" },
  "compress-image":  { bg: "#eff6ff", icon: "🗜️" },
  "convert-image":   { bg: "#eff6ff", icon: "🔁" },
  "blur-background": { bg: "#eff6ff", icon: "🌫️" },
  "qr-code-generator": { bg: "#ecfdf5", icon: "📱" },
  "ai-writer":       { bg: "#f5f3ff", icon: "✨" },
  "ai-summarizer":   { bg: "#f5f3ff", icon: "📋" },
  "ai-paraphraser":  { bg: "#f5f3ff", icon: "🔀" },
  "ai-translator":   { bg: "#f5f3ff", icon: "🌐" },
  "trim-video":      { bg: "#fdf4ff", icon: "🎬" },
  "compress-video":  { bg: "#fdf4ff", icon: "📹" },
  "video-to-mp3":    { bg: "#fffbeb", icon: "🎵" },
  "json-formatter":  { bg: "#ecfdf5", icon: "{ }" },
  "password-generator": { bg: "#ecfdf5", icon: "🔑" },
  "speech-to-text":  { bg: "#f5f3ff", icon: "🎤" },
  "word-counter":    { bg: "#eef2ff", icon: "📊" },
};

const faqs = [
  { q: "Are all tools really free?", a: "Yes, 100% free. No signup, no credit card, no hidden fees — ever." },
  { q: "Are my files safe?", a: "Absolutely. Most tools process files directly in your browser — nothing is sent to our servers." },
  { q: "Do I need to create an account?", a: "No account needed. Just open a tool and start using it immediately." },
  { q: "What file formats are supported?", a: "We support all major formats: PDF, JPG, PNG, MP4, MP3, DOCX, and many more." },
];

export default function HomePage() {
  const total = getTotalToolCount();

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "#fff",
        borderBottom: "1px solid #e8eaf0",
        padding: "64px 24px 48px",
        textAlign: "center",
      }}>
        <h1 style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontSize: "clamp(30px, 5vw, 52px)",
          fontWeight: 800,
          color: "#1a1a2e",
          lineHeight: 1.12,
          letterSpacing: "-1.5px",
          marginBottom: 14,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Every AI &amp; File Tool<br />
          <span style={{ color: "#e8284a" }}>You Need in One Place</span>
        </h1>

        <p style={{
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "#64748b",
          maxWidth: 520,
          margin: "0 auto 28px",
          lineHeight: 1.65,
        }}>
          {total}+ free tools. Compress PDFs, remove backgrounds, write with AI,
          trim videos — all instant, all private, no signup ever.
        </p>

        <div style={{ maxWidth: 560, margin: "0 auto 20px" }}>
          <SearchBar />
        </div>

        {/* Quick links */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>Popular:</span>
          {["Compress PDF", "Remove Background", "AI Writer", "Merge PDF", "JSON Formatter"].map(t => (
            <Link
              key={t}
              href={`/tools/${t.toLowerCase().replace(/ /g, "-")}`}
              style={{
                fontSize: 12, fontWeight: 500, color: "#475569",
                background: "#f1f5f9", border: "1px solid #e2e8f0",
                borderRadius: 100, padding: "4px 12px",
                textDecoration: "none", transition: "all .15s",
              }}
              className="ql-tag"
            >{t}</Link>
          ))}
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #e8eaf0",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: 4,
        overflowX: "auto",
        maxWidth: "100%",
        WebkitOverflowScrolling: "touch",
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          gap: 2,
          padding: "12px 0",
          width: "100%",
        }}>
          {filterTabs.map((tab, i) => (
            <Link
              key={tab.value}
              href={tab.value === "all" ? "/tools" : `/tools/${tab.value}`}
              style={{
                whiteSpace: "nowrap",
                padding: "7px 16px",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all .15s",
                background: i === 0 ? "#1a1a2e" : "transparent",
                color: i === 0 ? "#fff" : "#475569",
                border: i === 0 ? "1px solid #1a1a2e" : "1px solid transparent",
              }}
              className="filter-tab"
            >{tab.label}</Link>
          ))}
        </div>
      </div>

      {/* ── MAIN TOOLS GRID ── */}
      <main id="main-content" style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 64px" }}>

        {/* All Categories — IlovePDF style tool cards */}
        {allCategories.map(cat => (
          <div key={cat.id} style={{ marginBottom: 48 }}>

            {/* Category header */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: 18,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{cat.emoji}</span>
                <h2 style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontSize: 18, fontWeight: 700, color: "#1a1a2e",
                }}>{cat.name}</h2>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: "#94a3b8",
                  background: "#f1f5f9", padding: "2px 8px", borderRadius: 100,
                }}>{cat.tools.length} tools</span>
              </div>
              <Link href={cat.href} style={{
                fontSize: 13, fontWeight: 600, color: "#e8284a",
                textDecoration: "none",
              }}>
                All {cat.name} →
              </Link>
            </div>

            {/* Tool cards grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 14,
            }}>
              {cat.tools.slice(0, 8).map(tool => {
                const iconData = toolIcons[tool.href.replace("/tools/", "")] || { bg: "#f8fafc", icon: "🔧" };
                return (
                  <Link key={tool.href} href={tool.href} className="tool-card-ilove" style={{ textDecoration: "none" }}>
                    <div style={{
                      background: "#fff",
                      border: "1px solid #e8eaf0",
                      borderRadius: 14,
                      padding: "20px 18px",
                      cursor: "pointer",
                      transition: "all .18s ease",
                      position: "relative",
                      overflow: "hidden",
                    }} className="tool-card-inner">

                      {/* AI badge */}
                      {"badge" in tool && tool.badge === "AI" && (
                        <span style={{
                          position: "absolute", top: 10, right: 10,
                          fontSize: 9, fontWeight: 800,
                          background: "#f5f3ff", color: "#7c3aed",
                          padding: "2px 7px", borderRadius: 100,
                          letterSpacing: "0.5px",
                        }}>AI</span>
                      )}

                      {/* Icon */}
                      <div style={{
                        width: 52, height: 52, borderRadius: 12,
                        background: iconData.bg,
                        display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 24,
                        marginBottom: 14,
                      }}>{iconData.icon}</div>

                      {/* Name */}
                      <div style={{
                        fontFamily: "var(--font-syne, sans-serif)",
                        fontSize: 14, fontWeight: 700,
                        color: "#1a1a2e", marginBottom: 5,
                        lineHeight: 1.3,
                      }}>{tool.name}</div>

                      {/* Desc */}
                      <div style={{
                        fontSize: 12, color: "#94a3b8",
                        lineHeight: 1.5,
                      }}>{tool.desc}</div>
                    </div>
                  </Link>
                );
              })}

              {/* "View all" card if more than 8 */}
              {cat.tools.length > 8 && (
                <Link href={cat.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#f8fafc",
                    border: "1px dashed #cbd5e1",
                    borderRadius: 14,
                    padding: "20px 18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 140,
                    cursor: "pointer",
                    transition: "all .18s",
                    gap: 8,
                  }} className="view-all-card">
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "#e2e8f0",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 18,
                    }}>+</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#64748b", textAlign: "center" }}>
                      {cat.tools.length - 8} more tools
                    </div>
                    <div style={{ fontSize: 11, color: "#94a3b8" }}>View all →</div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}

        {/* ── AD BANNER ── */}
        <div style={{ margin: "0 0 48px" }}>
          <AdBanner slot="2233445566" format="horizontal" className="rounded-2xl" />
        </div>

        {/* ── TRUST BAR ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 0, flexWrap: "wrap",
          background: "#fff", borderRadius: 14,
          border: "1px solid #e8eaf0",
          marginBottom: 48, overflow: "hidden",
        }}>
          {[
            { icon: "🔒", label: "Browser-based", sub: "Files never leave your device" },
            { icon: "⚡", label: "Instant", sub: "No queues, no waiting" },
            { icon: "🆓", label: "Always Free", sub: "No credit card ever" },
            { icon: "📱", label: "Any Device", sub: "Works on mobile & desktop" },
          ].map(({ icon, label, sub }, i) => (
            <div key={label} style={{
              flex: "1 1 200px",
              display: "flex", alignItems: "center", gap: 14,
              padding: "22px 24px",
              borderRight: i < 3 ? "1px solid #e8eaf0" : "none",
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#f8fafc",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 22, flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", fontFamily: "var(--font-syne, sans-serif)" }}>{label}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div style={{ maxWidth: 720, margin: "0 auto 48px" }}>
          <h2 style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: 24, fontWeight: 700, color: "#1a1a2e",
            textAlign: "center", marginBottom: 24,
          }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{
                background: "#fff",
                border: "1px solid #e8eaf0",
                borderRadius: 12,
                padding: "18px 22px",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontWeight: 700, fontSize: 14,
                  color: "#1a1a2e", marginBottom: 6,
                }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{
          background: "#1a1a2e",
          borderRadius: 20,
          padding: "56px 48px",
          textAlign: "center",
          color: "#fff",
        }}>
          <h2 style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: "clamp(22px, 4vw, 34px)",
            fontWeight: 800, marginBottom: 10,
          }}>Start Using Tools for Free</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", marginBottom: 28 }}>
            No signup. {total}+ tools right now.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tools" style={{
              background: "#e8284a", color: "#fff",
              padding: "13px 28px", borderRadius: 100,
              fontWeight: 700, fontSize: 14,
              textDecoration: "none",
            }}>Explore All Tools →</Link>
            <Link href="/tools/pdf" style={{
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#fff",
              padding: "13px 28px", borderRadius: 100,
              fontWeight: 700, fontSize: 14,
              textDecoration: "none",
            }}>PDF Tools</Link>
          </div>
        </div>

      </main>

      <Footer />

      <style>{`
        .tool-card-inner:hover {
          border-color: #e8284a !important;
          box-shadow: 0 8px 32px rgba(232,40,74,0.10);
          transform: translateY(-3px);
        }
        .view-all-card:hover {
          background: #f1f5f9 !important;
          border-color: #94a3b8 !important;
        }
        .filter-tab:hover {
          background: #f8fafc !important;
          border-color: #e2e8f0 !important;
          color: #1a1a2e !important;
        }
        .ql-tag:hover {
          background: #e2e8f0 !important;
          border-color: #cbd5e1 !important;
        }
        @media (max-width: 640px) {
          .tool-card-inner { padding: 16px 14px !important; }
        }
      `}</style>
    </div>
  );
}
