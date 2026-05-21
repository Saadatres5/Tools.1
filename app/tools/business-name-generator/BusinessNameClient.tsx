
"use client";
import { useState } from "react";

const PREFIXES = ["Nova","Apex","Nexus","Prime","Forge","Rise","Zen","Swift","Bold","Peak","Spark","Edge","Core","Flux","Vibe","Orbit","Plex","Sync","Arc","Luma"];
const SUFFIXES = ["Labs","Hub","Studio","Pro","HQ","Co","Works","Base","Ai","Tech","Flow","Spot","Ify","Ly","Box","Bay","Go","Plus","Up","X"];
const TAGLINES = [
  "Built for the future.",
  "Where ideas become reality.",
  "Simplifying the complex.",
  "Innovation at your fingertips.",
  "Making it possible.",
  "Smarter. Faster. Better.",
  "Your partner in growth.",
  "The future starts here.",
];

function generateNames(keyword: string): {name: string; tagline: string}[] {
  const kw = keyword.trim().toLowerCase().replace(/\s+/g, "");
  const cap = kw.charAt(0).toUpperCase() + kw.slice(1);
  const results = [
    { name: `${PREFIXES[Math.floor(Math.random()*PREFIXES.length)]}${cap}`, tagline: TAGLINES[0] },
    { name: `${cap}${SUFFIXES[Math.floor(Math.random()*SUFFIXES.length)]}`, tagline: TAGLINES[1] },
    { name: `${PREFIXES[Math.floor(Math.random()*PREFIXES.length)]} ${cap}`, tagline: TAGLINES[2] },
    { name: `Get${cap}`, tagline: TAGLINES[3] },
    { name: `${cap}ly`, tagline: TAGLINES[4] },
    { name: `${PREFIXES[Math.floor(Math.random()*PREFIXES.length)]}${SUFFIXES[Math.floor(Math.random()*SUFFIXES.length)]}`, tagline: TAGLINES[5] },
    { name: `Try${cap}`, tagline: TAGLINES[6] },
    { name: `The${cap}Co`, tagline: TAGLINES[7] },
  ];
  return results;
}

export default function BusinessNameClient() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<{name:string;tagline:string}[]>([]);
  const [copied, setCopied] = useState("");

  const generate = () => { if (keyword.trim()) setResults(generateNames(keyword)); };
  const copy = (t:string) => { navigator.clipboard.writeText(t); setCopied(t); setTimeout(()=>setCopied(""),2000); };

  return (
    <div className="space-y-4">
      <input value={keyword} onChange={e=>setKeyword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
        placeholder="e.g. tools, health, design, finance, education"
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-amber-500/50"/>
      <button onClick={generate} disabled={!keyword.trim()}
        className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        💡 Generate Names
      </button>
      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {results.map((r,i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <p className="font-bold text-white">{r.name}</p>
                <button onClick={()=>copy(r.name)} className={`text-xs px-2 py-0.5 rounded transition-colors ${copied===r.name?"bg-green-600 text-white":"bg-white/10 hover:bg-white/20 text-white/40"}`}>
                  {copied===r.name?"✓":"Copy"}
                </button>
              </div>
              <p className="text-xs text-white/40 italic">{r.tagline}</p>
            </div>
          ))}
        </div>
      )}
      {results.length > 0 && (
        <button onClick={()=>setResults(generateNames(keyword))}
          className="w-full py-2 rounded-xl border border-dashed border-white/20 text-xs text-white/40 hover:text-white/60 transition-colors">
          ↺ Regenerate different names
        </button>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
