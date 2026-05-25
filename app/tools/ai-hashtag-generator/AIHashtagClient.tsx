"use client";
import { useState } from "react";

const HASHTAG_DB: Record<string,string[]> = {
  business: ["business","entrepreneur","startup","success","motivation","leadership","marketing","branding","hustle","mindset"],
  fitness: ["fitness","gym","workout","health","lifestyle","fitlife","exercise","training","wellness","bodybuilding"],
  food: ["food","foodie","recipe","cooking","delicious","yummy","foodphotography","homecooking","chef","eat"],
  travel: ["travel","wanderlust","adventure","explore","vacation","trip","traveling","photography","nature","landscape"],
  technology: ["tech","technology","innovation","AI","coding","programming","software","developer","startup","digital"],
  fashion: ["fashion","style","ootd","outfit","clothing","trendy","accessories","model","streetstyle","beauty"],
  photography: ["photography","photo","photographer","picoftheday","instagood","photooftheday","nature","portrait","canon","nikon"],
  music: ["music","musician","song","artist","newmusic","hiphop","pop","rock","producer","studio"],
  education: ["education","learning","study","student","school","knowledge","teacher","university","scholarship","growth"],
  marketing: ["marketing","digitalmarketing","socialmedia","seo","contentmarketing","branding","advertising","growthhacking","b2b","sales"],
};

function getHashtags(topic: string, platform: string): string[] {
  const lower = topic.toLowerCase();
  let base: string[] = [];
  for (const [key, tags] of Object.entries(HASHTAG_DB)) {
    if (lower.includes(key) || key.includes(lower)) base = [...base, ...tags];
  }
  if (base.length === 0) {
    const words = topic.split(" ").filter(w=>w.length>2);
    base = words.map(w=>w.toLowerCase()).concat(["trending","viral","mustfollow","instagood","photooftheday"]);
  }
  const extras: Record<string,string[]> = {
    Instagram: ["reels","instadaily","like4like","follow","instagram"],
    "Twitter/X": ["trending","viral","news","opinion","thread"],
    TikTok: ["tiktok","fyp","foryoupage","trending","viral"],
    LinkedIn: ["linkedin","professional","networking","career","business"],
    YouTube: ["youtube","youtuber","subscribe","video","content"],
  };
  return [...new Set([...base, ...(extras[platform]||[])])].slice(0,20).map(h=>`#${h}`);
}

export default function AIHashtagClient() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [result, setResult] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const platforms = ["Instagram","Twitter/X","TikTok","LinkedIn","YouTube"];

  const generate = () => { if (topic.trim()) setResult(getHashtags(topic, platform)); };
  const copy = () => { navigator.clipboard.writeText(result.join(" ")); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {platforms.map(p=>(
          <button key={p} onClick={()=>setPlatform(p)}
            className={`px-3 py-1.5 rounded-xl text-xs transition-colors ${platform===p?"bg-blue-600":"bg-gray-50 hover:bg-gray-100"}`}>{p}</button>
        ))}
      </div>
      <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
        placeholder="e.g. travel photography, fitness motivation, tech startup"
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-pink-500/50"/>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        #️⃣ Generate Hashtags
      </button>
      {result.length > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-xs text-gray-400">{result.length} hashtags for {platform}</label>
            <button onClick={copy} className={`text-xs ${copied?"text-emerald-700":"text-blue-600"}`}>{copied?"✓ Copied All":"Copy All"}</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {result.map(h=>(
              <button key={h} onClick={()=>navigator.clipboard.writeText(h)}
                className="px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs hover:bg-pink-500/20 transition-colors">
                {h}
              </button>
            ))}
          </div>
        </div>
      )}
      <p className="text-xs text-gray-300">✓ Free — no API key required</p>
    </div>
  );
}
