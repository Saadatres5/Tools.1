"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getAllTools } from "@/lib/tools-data";

const allTools = getAllTools();

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
    <div ref={ref} className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-blue-500/50 transition-all">
        <svg className="w-5 h-5 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="Search 100+ tools... (PDF, AI, Image, Video)"
          value={query} onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          className="bg-transparent flex-1 text-white placeholder-white/30 outline-none text-sm" />
        {query && <button onClick={() => { setQuery(""); setResults([]); }} className="text-white/30 hover:text-white/60">✕</button>}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50">
          {results.map(t => (
            <Link key={t.href} href={t.href} onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors">
              <div>
                <span className="text-sm text-white">{t.name}</span>
                <p className="text-xs text-white/30">{t.desc}</p>
              </div>
              {t.badge && <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 flex-shrink-0">{t.badge}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
