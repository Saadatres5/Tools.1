
"use client";
import { useState } from "react";

const FORMULAS = [
  (t:string) => `How to Master ${t} in 30 Days (Step-by-Step Guide)`,
  (t:string) => `${t}: The Complete Beginner's Guide for ${new Date().getFullYear()}`,
  (t:string) => `10 Proven Strategies to Improve Your ${t} Results`,
  (t:string) => `Why ${t} Is the Most Important Skill You Can Learn Right Now`,
  (t:string) => `The Ultimate Guide to ${t}: Everything You Need to Know`,
  (t:string) => `${t} Mistakes That Are Costing You Time and Money`,
  (t:string) => `I Tried ${t} for 30 Days — Here's What Happened`,
  (t:string) => `The Secret to ${t} That Nobody Talks About`,
  (t:string) => `Stop Struggling with ${t}: Try This Instead`,
  (t:string) => `${t} vs Traditional Methods: Which One Actually Works?`,
];

export default function AIHeadlineClient() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  const generate = () => {
    if (!topic.trim()) return;
    setResults(FORMULAS.map(f => f(topic)));
  };
  const copy = (t:string) => { navigator.clipboard.writeText(t); setCopied(t); setTimeout(()=>setCopied(""),2000); };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-white/50 mb-1">Topic or keyword</label>
        <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
          placeholder="e.g. productivity, fitness, JavaScript, social media"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-yellow-500/50"/>
      </div>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-yellow-600 hover:bg-yellow-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        💡 Generate Headlines
      </button>
      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((r,i) => (
            <div key={i} className="flex items-start justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors">
              <p className="text-sm text-white flex-1">{r}</p>
              <button onClick={()=>copy(r)} className={`text-xs px-2 py-1 rounded-lg flex-shrink-0 transition-colors ${copied===r?"bg-green-600 text-white":"bg-white/10 hover:bg-white/20 text-white/50"}`}>
                {copied===r?"✓":"Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
