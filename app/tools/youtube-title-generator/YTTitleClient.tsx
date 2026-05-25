"use client";
import { useState } from "react";

const YT_FORMULAS = [
  (t:string) => `How to ${t} in 2025 (Complete Beginner's Guide)`,
  (t:string) => `I Tried ${t} for 30 Days — Honest Results`,
  (t:string) => `${t}: What Nobody Tells You (The Truth)`,
  (t:string) => `5 ${t} Mistakes That Are Killing Your Results`,
  (t:string) => `The BEST Way to ${t} (Step-by-Step Tutorial)`,
  (t:string) => `${t} Tips That Changed Everything For Me`,
  (t:string) => `Watch This Before You Start ${t}`,
  (t:string) => `Why 99% of People Fail at ${t} (And How to Succeed)`,
  (t:string) => `I Tested Every ${t} Method — Here's What Works`,
  (t:string) => `${t} Secrets the Experts Don't Share`,
];

export default function YTTitleClient() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  const generate = () => { if (topic.trim()) setResults(YT_FORMULAS.map(f=>f(topic))); };
  const copy = (t:string) => { navigator.clipboard.writeText(t); setCopied(t); setTimeout(()=>setCopied(""),2000); };

  return (
    <div className="space-y-4">
      <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
        placeholder="e.g. learn guitar, lose weight, make money online"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-red-500/50"/>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        ▶️ Generate Titles
      </button>
      {results.map((r,i) => (
        <div key={i} className="flex items-center justify-between gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-sm text-gray-800 flex-1">{r}</p>
          <button onClick={()=>copy(r)} className={`text-xs px-3 py-1.5 rounded-lg flex-shrink-0 transition-colors ${copied===r?"bg-green-600 text-gray-800":"bg-gray-100 hover:bg-gray-100 text-gray-8000"}`}>
            {copied===r?"✓":"Copy"}
          </button>
        </div>
      ))}
      <p className="text-xs text-gray-300">✓ Free — no API key required</p>
    </div>
  );
}
