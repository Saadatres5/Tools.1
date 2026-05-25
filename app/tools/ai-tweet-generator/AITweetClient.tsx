"use client";
import { useState } from "react";

const TWEET_TEMPLATES = [
  (t:string) => `Hot take: ${t} is the most underrated skill you can develop right now. Here's why 🧵`,
  (t:string) => `I spent 30 days focusing on ${t}. The results completely changed my perspective. Here's what happened:`,
  (t:string) => `Nobody talks about the real impact of ${t}. Let me break it down for you 👇`,
  (t:string) => `${t} will be the defining skill of the next decade. Are you ready? Start with these 3 steps:`,
  (t:string) => `Unpopular opinion: ${t} is not as complicated as people make it sound. You just need the right approach.`,
  (t:string) => `If you're not thinking about ${t}, you're already behind. Here's how to catch up fast ⚡`,
  (t:string) => `The problem with ${t} isn't what you think. Most people focus on the wrong thing entirely.`,
  (t:string) => `5 things I wish I knew about ${t} before I started:\n1. Start simple\n2. Stay consistent\n3. Learn daily\n4. Track results\n5. Never stop improving`,
];

export default function AITweetClient() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  const generate = () => {
    if (!topic.trim()) return;
    setResults(TWEET_TEMPLATES.slice(0,5).map(fn => fn(topic)));
  };
  const copy = (t:string) => { navigator.clipboard.writeText(t); setCopied(t); setTimeout(()=>setCopied(""),2000); };

  return (
    <div className="space-y-4">
      <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
        placeholder="e.g. productivity, AI tools, personal finance"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-sky-500/50"/>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        🐦 Generate Tweets
      </button>
      {results.map((r,i) => (
        <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
          <p className="text-sm text-gray-800/80 leading-relaxed whitespace-pre-wrap">{r}</p>
          <div className="flex items-center justify-between">
            <span className={`text-xs ${r.length>280?"text-red-600":"text-gray-400"}`}>{r.length}/280</span>
            <button onClick={()=>copy(r)} className={`text-xs px-3 py-1 rounded-lg transition-colors ${copied===r?"bg-green-600 text-gray-800":"bg-gray-100 hover:bg-gray-100 text-gray-8000"}`}>
              {copied===r?"✓ Copied":"Copy"}
            </button>
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-300">✓ Free — no API key required</p>
    </div>
  );
}
