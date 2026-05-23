"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getAllTools } from "@/lib/tools-data";

const allTools = getAllTools();

const categoryColors: Record<string, string> = {
  pdf: "#ef4444", image: "#3b82f6", ai: "#8b5cf6",
  video: "#ec4899", audio: "#f59e0b", developer: "#10b981",
  seo: "#0891b2", text: "#6366f1", security: "#dc2626",
  calculators: "#d97706", productivity: "#7c3aed",
  "social-media": "#db2777", student: "#2563eb",
  business: "#0f766e", browser: "#64748b",
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof allTools>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 1) { setResults([]); return; }
    setResults(allTools.filter(t => t.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", maxWidth: 560, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", background: "#fff", border: "2px solid #e2e8f0", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,.08)", transition: "border-color .15s" }}>
        <svg style={{ width: 18, height: 18, color: "#94a3b8", marginLeft: 16, flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search 100+ tools — compress PDF, remove background…"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          style={{ flex: 1, border: "none", outline: "none", padding: "14px 12px", fontSize: 14, fontFamily: "var(--font-figtree,sans-serif)", color: "#0f172a", background: "transparent" }}
        />
        {query && <button onClick={() => { setQuery(""); setResults([]); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: "0 8px", fontSize: 18 }}>✕</button>}
        <button style={{ background: "#0f172a", border: "none", color: "#fff", padding: "12px 20px", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-figtree,sans-serif)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, flexShrink: 0, transition: "background .15s" }}
          className="search-btn">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          Search
        </button>
      </div>

      {open && results.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: 8, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,.10)", zIndex: 50 }}>
          {results.map(t => {
            const color = categoryColors[(t as any).category || ""] || "#64748b";
            return (
              <Link key={t.href} href={t.href} onClick={() => { setOpen(false); setQuery(""); }} className="search-result-row">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
                  </div>
                  <div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#0f172a" }}>{t.name}</span>
                    <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 1 }}>{t.desc}</p>
                  </div>
                </div>
                {t.badge && <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 100, background: "#f3e8ff", color: "#6b21a8", flexShrink: 0 }}>{t.badge}</span>}
              </Link>
            );
          })}
        </div>
      )}
      <style>{`.search-btn:hover { background: #2563eb !important; }`}</style>
    </div>
  );
}
