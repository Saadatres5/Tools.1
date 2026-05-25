"use client";
import { useState } from "react";

const TEMPLATES: Record<string, (topic: string) => string> = {
  "Blog post introduction": (t) => `Are you looking to learn more about ${t}? You're in the right place. In today's fast-paced world, understanding ${t} has become more important than ever. Whether you're a beginner just getting started or an expert looking to deepen your knowledge, this guide covers everything you need to know.\n\nIn this article, we'll explore the key aspects of ${t}, discuss practical strategies you can apply immediately, and share insights that will help you get the most value. Let's dive in.`,
  "Product description": (t) => `Introducing ${t} — the solution you've been waiting for.\n\nDesigned with you in mind, ${t} combines powerful features with an intuitive experience that makes everything simpler. Whether you're a professional or just getting started, ${t} delivers results you can count on.\n\n✓ Fast and reliable\n✓ Easy to use\n✓ Built for results\n\nJoin thousands of satisfied users who have already discovered the power of ${t}. Try it today — you won't look back.`,
  "Email subject line": (t) => `🔥 ${t}: Don't Miss This Opportunity\n📢 Your Guide to ${t} Is Here\n⚡ Transform Your Results with ${t}\n💡 The Secret to Mastering ${t}\n✅ Everything You Need to Know About ${t}`,
  "Social media caption": (t) => `Excited to share something amazing about ${t}! 🚀\n\nIf you've been curious about ${t}, now is the perfect time to explore. The results speak for themselves — and the community around it is incredible.\n\nDrop a 👇 if you want to learn more!\n\n#${t.replace(/\s+/g,"").toLowerCase()} #trending #mustknow`,
  "SEO meta description": (t) => `Discover everything about ${t} in our comprehensive guide. Learn the best strategies, tips, and tools to get started with ${t} today. Free, fast, and easy to use — no experience required.`,
  "Landing page headline": (t) => `The #1 Tool for ${t}\nTransform Your ${t} Results in Minutes\n${t} Made Simple — Finally\nEverything You Need for ${t} in One Place\nThe Smarter Way to Handle ${t}`,
  "YouTube description": (t) => `In this video, we cover everything you need to know about ${t}. Whether you're a complete beginner or looking to level up, we break it down step by step.\n\n⏱️ Timestamps:\n0:00 Introduction\n1:30 What is ${t}?\n4:00 Getting Started\n8:00 Advanced Tips\n12:00 Final Thoughts\n\n👍 Like and subscribe for more content like this!\n📩 Questions? Leave them in the comments below.`,
};

export default function AIWriterClient() {
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState(Object.keys(TEMPLATES)[0]);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (!topic.trim()) return;
    setResult(TEMPLATES[format](topic));
  };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-8000 mb-2">Content Format</label>
        <select value={format} onChange={e=>setFormat(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-purple-500/50">
          {Object.keys(TEMPLATES).map(t=><option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs text-gray-8000 mb-1">Topic or keyword</label>
        <input value={topic} onChange={e=>setTopic(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&generate()}
          placeholder="e.g. digital marketing, healthy eating, web development"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-purple-500/50"/>
      </div>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        ✨ Generate Content
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-gray-400">Generated Content</label>
            <button onClick={copy} className={`text-xs ${copied?"text-emerald-700":"text-blue-600"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm text-gray-800/80 leading-relaxed whitespace-pre-wrap">{result}</div>
          <button onClick={generate} className="mt-2 text-xs text-gray-400 hover:text-gray-8000">↺ Regenerate</button>
        </div>
      )}
      <p className="text-xs text-gray-300">✓ 100% free — no API key required</p>
    </div>
  );
}
