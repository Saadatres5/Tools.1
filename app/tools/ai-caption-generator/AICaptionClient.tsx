"use client";
import { useState } from "react";

const CAPTIONS: Record<string,(t:string)=>string[]> = {
  Instagram: (t) => [
    `✨ ${t} — because some moments are worth sharing. Save this for later! 📌`,
    `Living for moments like this 🙌 ${t} hitting different today. Drop a ❤️ if you agree!`,
    `The best things in life: ${t} 🌟 Grateful for every moment. Double tap if this made your day!`,
  ],
  Facebook: (t) => [
    `Just had to share this about ${t}! Feeling inspired and grateful. What do you think? Let me know in the comments 👇`,
    `${t} — a moment I never want to forget. Life is beautiful when you pay attention to the little things. ❤️`,
  ],
  TikTok: (t) => [
    `POV: You just discovered ${t} 🤯 #fyp #viral #trending`,
    `Nobody talks about ${t} enough and I'm here to fix that 👇 #mustknow`,
    `Things that just make sense: ${t} ✅ #relatable #foryou`,
  ],
  LinkedIn: (t) => [
    `I've been thinking a lot about ${t} lately. Here's what I've learned: it's not just a trend — it's a fundamental shift in how we work and grow. What's your experience with ${t}?`,
    `${t} changed how I approach my work. Three key lessons: 1) Start before you're ready. 2) Learn from every outcome. 3) Keep going. Agree?`,
  ],
};

export default function AICaptionClient() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState("");
  const platforms = Object.keys(CAPTIONS);
  const copy = (t:string) => { navigator.clipboard.writeText(t); setCopied(t); setTimeout(()=>setCopied(""),2000); };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {platforms.map(p=>(
          <button key={p} onClick={()=>setPlatform(p)}
            className={`px-3 py-1.5 rounded-xl text-xs transition-colors ${platform===p?"bg-purple-600":"bg-white/5 hover:bg-white/10"}`}>{p}</button>
        ))}
      </div>
      <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&setResults(CAPTIONS[platform](topic))}
        placeholder="Describe your post or image..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-purple-500/50"/>
      <button onClick={()=>topic.trim()&&setResults(CAPTIONS[platform](topic))} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        💬 Generate Captions
      </button>
      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((r,i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/8 space-y-2">
              <p className="text-sm text-white/80 leading-relaxed">{r}</p>
              <button onClick={()=>copy(r)} className={`text-xs px-3 py-1 rounded-lg transition-colors ${copied===r?"bg-green-600 text-white":"bg-white/10 hover:bg-white/20 text-white/50"}`}>
                {copied===r?"✓ Copied":"Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
