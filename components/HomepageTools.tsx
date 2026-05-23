"use client";
import { useState } from "react";
import Link from "next/link";
import { allCategories } from "@/lib/tools-data";
import type { Tool } from "@/types/tools";

const categoryConfig: Record<string, { color: string; bg: string; icon: string }> = {
  pdf:          { color: "#ef4444", bg: "#fef2f2", icon: "P" },
  image:        { color: "#3b82f6", bg: "#eff6ff", icon: "Im" },
  ai:           { color: "#8b5cf6", bg: "#f5f3ff", icon: "AI" },
  video:        { color: "#ec4899", bg: "#fdf2f8", icon: "V" },
  audio:        { color: "#f59e0b", bg: "#fffbeb", icon: "A" },
  developer:    { color: "#10b981", bg: "#ecfdf5", icon: "{}" },
  seo:          { color: "#0891b2", bg: "#ecfeff", icon: "S" },
  text:         { color: "#6366f1", bg: "#eef2ff", icon: "T" },
  security:     { color: "#dc2626", bg: "#fef2f2", icon: "🔒" },
  calculators:  { color: "#d97706", bg: "#fffbeb", icon: "C" },
  productivity: { color: "#7c3aed", bg: "#f5f3ff", icon: "⚡" },
  "social-media":{ color: "#db2777", bg: "#fdf2f8", icon: "SM" },
  student:      { color: "#2563eb", bg: "#eff6ff", icon: "St" },
  business:     { color: "#0f766e", bg: "#f0fdfa", icon: "Bz" },
  browser:      { color: "#64748b", bg: "#f8fafc", icon: "Br" },
};

const badgeStyle: Record<string, { bg: string; color: string; label: string }> = {
  AI:      { bg: "#f3e8ff", color: "#6b21a8", label: "AI" },
  Popular: { bg: "#fef3c7", color: "#92400e", label: "Popular" },
  New:     { bg: "#dcfce7", color: "#166534", label: "New" },
};

interface ToolWithCat extends Tool { category: string }

export default function HomepageTools() {
  const [activeTab, setActiveTab] = useState("all");

  // Flatten tools with category tag
  const allTools: ToolWithCat[] = allCategories.flatMap(cat =>
    cat.tools.map(t => ({ ...t, category: cat.id }))
  );

  const displayed = activeTab === "all"
    ? allTools.slice(0, 24)
    : allCategories.find(c => c.id === activeTab)?.tools.map(t => ({ ...t, category: activeTab })) ?? [];

  const tabs = [
    { id: "all", label: "All" },
    ...allCategories.slice(0, 9).map(c => ({ id: c.id, label: c.name.replace(" Tools", "") })),
  ];

  return (
    <div>
      {/* Category tabs */}
      <div style={{
        display: "flex", gap: 6, flexWrap: "wrap",
        marginBottom: 28, paddingBottom: 20,
        borderBottom: "1px solid #e2e8f0",
      }}>
        {tabs.map(tab => {
          const cfg = categoryConfig[tab.id];
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "8px 16px", borderRadius: 100,
                border: isActive ? "1.5px solid #0f172a" : "1.5px solid #e2e8f0",
                background: isActive ? "#0f172a" : "#fff",
                color: isActive ? "#fff" : "#64748b",
                fontSize: 13, fontWeight: 600,
                cursor: "pointer", transition: "all .15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = "#94a3b8"; e.currentTarget.style.color = "#0f172a"; } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#64748b"; } }}
            >
              {cfg && (
                <div style={{
                  width: 18, height: 18, borderRadius: 5,
                  background: isActive ? "rgba(255,255,255,.2)" : cfg.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 9, fontWeight: 800, color: "#fff", flexShrink: 0,
                }}>{cfg.icon}</div>
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tool grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))",
        gap: 14,
      }}>
        {displayed.map(tool => {
          const cfg = categoryConfig[tool.category] || { color: "#64748b", bg: "#f8fafc", icon: "•" };
          const badge = tool.badge ? badgeStyle[tool.badge] : null;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="tool-card"
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                padding: "20px 20px 32px",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#cbd5e1";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top row: icon + badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: cfg.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{ width: 22, height: 22, borderRadius: 5, background: cfg.color, opacity: 0.85 }} />
                </div>
                {badge && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 100,
                    background: badge.bg, color: badge.color,
                    textTransform: "uppercase", letterSpacing: ".4px",
                  }}>{badge.label}</span>
                )}
              </div>

              {/* Name */}
              <div style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 5,
              }}>{tool.name}</div>

              {/* Desc */}
              <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{tool.desc}</div>

              {/* Arrow (bottom right) */}
              <div style={{
                position: "absolute", right: 16, bottom: 16,
                width: 26, height: 26, borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: "#64748b",
              }}>→</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
