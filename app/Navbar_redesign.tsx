"use client";
// components/Navbar.tsx — IlovePDF-inspired clean white navbar
// Replace your existing components/Navbar.tsx with this file

import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { label: "All Tools", href: "/tools" },
  { label: "PDF", href: "/tools/pdf" },
  { label: "AI Tools", href: "/tools/ai" },
  { label: "Image", href: "/tools/image" },
  { label: "Video", href: "/tools/video" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff",
      borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid #e8eaf0",
      boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,.06)" : "none",
      transition: "box-shadow .2s",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 24px", height: 62,
        display: "flex", alignItems: "center", gap: 4,
      }}>

        {/* Logo */}
        <Link href="/" style={{
          display: "flex", alignItems: "center",
          gap: 9, marginRight: 12, textDecoration: "none", flexShrink: 0,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: "#e8284a",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-syne, sans-serif)",
            fontWeight: 900, fontSize: 16, color: "#fff",
          }}>Q</div>
          <span style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontWeight: 800, fontSize: 18,
            color: "#1a1a2e", letterSpacing: "-0.5px",
          }}>QuantixTools</span>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-desktop" style={{
          display: "flex", alignItems: "center", gap: 0,
        }}>
          {nav.map(item => (
            <Link key={item.href} href={item.href} style={{
              padding: "8px 14px",
              fontSize: 13, fontWeight: 600,
              color: "#475569",
              textDecoration: "none",
              borderRadius: 8,
              transition: "all .15s",
              whiteSpace: "nowrap",
            }} className="nav-link-item">{item.label}</Link>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Right side */}
        <div className="nav-right" style={{
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span style={{
            fontSize: 12, fontWeight: 700,
            background: "#fff0f3", color: "#e8284a",
            border: "1px solid #fecdd3",
            padding: "5px 12px", borderRadius: 100,
          }}>100% Free</span>
          <Link href="/tools" style={{
            background: "#e8284a", color: "#fff",
            padding: "9px 20px", borderRadius: 100,
            fontWeight: 700, fontSize: 13,
            textDecoration: "none",
            transition: "background .15s",
            whiteSpace: "nowrap",
          }} className="nav-cta">All Tools →</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{
            display: "none", padding: 8,
            borderRadius: 8, background: "none",
            border: "none", cursor: "pointer", color: "#64748b",
          }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid #e8eaf0",
          padding: "10px 16px 16px",
          display: "flex", flexDirection: "column", gap: 2,
        }}>
          {nav.map(item => (
            <Link key={item.href} href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "10px 14px", borderRadius: 8,
                fontSize: 14, fontWeight: 500,
                color: "#475569", textDecoration: "none",
              }}
            >{item.label}</Link>
          ))}
          <Link href="/tools"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 8, textAlign: "center",
              padding: 12, borderRadius: 10,
              background: "#e8284a", color: "#fff",
              fontSize: 14, fontWeight: 700,
              textDecoration: "none",
            }}
          >All Tools →</Link>
        </div>
      )}

      <style>{`
        .nav-link-item:hover { color: #1a1a2e !important; background: #f8fafc !important; }
        .nav-cta:hover { background: #c9183a !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-right { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
