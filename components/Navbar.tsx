"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { label: "Tools", href: "/tools" },
  { label: "PDF", href: "/tools/pdf" },
  { label: "AI", href: "/tools/ai" },
  { label: "Image", href: "/tools/image" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
            T
          </div>
          <span className="font-bold text-lg tracking-tight">ToolsAI</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {nav.map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-1.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-150">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
            ● 100% Free
          </span>
          <Link href="/tools"
            className="text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
            All Tools
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {nav.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">
              {item.label}
            </Link>
          ))}
          <Link href="/tools" onClick={() => setMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium text-sm">
            All Tools →
          </Link>
        </div>
      )}
    </nav>
  );
}
