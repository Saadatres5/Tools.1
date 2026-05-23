"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { label: "All Tools", href: "/tools" },
  { label: "PDF", href: "/tools/pdf" },
  { label: "AI Tools", href: "/tools/ai" },
  { label: "Image", href: "/tools/image" },
  { label: "Video", href: "/tools/video" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 8 }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 8, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: "#0f172a",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: 15, color: "#fff", letterSpacing: "-0.5px",
          }}>Q</div>
          <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 800, fontSize: 19, color: "#0f172a", letterSpacing: "-0.5px" }}>
            QuantixTools
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden-mobile">
          {nav.map(item => (
            <Link key={item.href} href={item.href} style={{
              fontSize: 14, fontWeight: 500, color: "#64748b",
              padding: "7px 13px", borderRadius: 8,
              transition: "all .15s",
              textDecoration: "none",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#f1f5f9"; (e.target as HTMLElement).style.color = "#0f172a"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#64748b"; }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
          <span style={{
            fontSize: 12, fontWeight: 600,
            background: "#dcfce7", color: "#15803d",
            padding: "5px 12px", borderRadius: 100,
          }}>✦ 100% Free</span>
          <Link href="/tools" style={{
            background: "#0f172a", color: "#fff",
            fontSize: 13, fontWeight: 600,
            padding: "8px 20px", borderRadius: 8,
            textDecoration: "none", transition: "background .15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0f172a")}
          >
            Explore Tools →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", padding: 8, borderRadius: 8, background: "none", border: "none", cursor: "pointer", color: "#64748b" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e2e8f0", padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
          {nav.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{
              padding: "10px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500,
              color: "#475569", textDecoration: "none",
            }}>
              {item.label}
            </Link>
          ))}
          <Link href="/tools" onClick={() => setMenuOpen(false)} style={{
            marginTop: 8, textAlign: "center", padding: "11px", borderRadius: 8,
            background: "#0f172a", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none",
          }}>
            All Tools →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
