
"use client";
import { useState } from "react";

const BLOG_TYPES: Record<string,(t:string)=>string> = {
  "How-to guide": (t) => `# How to ${t}: A Complete Step-by-Step Guide

## Introduction

Learning ${t} doesn't have to be overwhelming. Whether you're a complete beginner or looking to refine your skills, this guide walks you through everything you need to know — from the basics to advanced strategies.

## What You'll Need

Before we dive in, make sure you have the following:
- A clear goal in mind
- Time and commitment to practice
- The right tools and resources

## Step 1: Understand the Fundamentals

Before jumping into ${t}, it's essential to understand why it matters. The foundation you build here will determine your long-term success. Focus on learning the core concepts before moving to advanced techniques.

## Step 2: Start Small and Build Up

One of the biggest mistakes beginners make with ${t} is trying to do too much too soon. Start with simple, achievable goals. As you gain confidence, gradually increase the complexity of your practice.

## Step 3: Practice Consistently

Consistency is the key to mastering ${t}. Set aside dedicated time each day or week. Even 20–30 minutes of focused practice can lead to significant improvement over time.

## Step 4: Track Your Progress

Keep a record of your journey with ${t}. Document what works, what doesn't, and how you've improved. This will help you stay motivated and identify areas that need more attention.

## Common Mistakes to Avoid

- Skipping the basics and jumping to advanced topics
- Expecting immediate results
- Not seeking feedback or guidance
- Giving up after early setbacks

## Final Thoughts

Mastering ${t} takes time, patience, and consistent effort. By following the steps in this guide and staying committed, you'll see real results. Remember — every expert was once a beginner.

Ready to get started? Take the first step today!`,
  "Listicle (Top 10)": (t) => `# 10 Essential Tips for ${t} You Need to Know

## Introduction

Whether you're just starting out with ${t} or looking to take your skills to the next level, these 10 tips will help you get there faster. We've compiled the most actionable advice from experts and practitioners to save you time and effort.

## 1. Start With a Clear Plan

Before diving into ${t}, define your goals. A clear plan keeps you focused and helps you measure progress effectively.

## 2. Learn From the Best

Study those who have already succeeded with ${t}. Read their stories, watch their content, and apply their lessons to your own journey.

## 3. Embrace Consistent Practice

Skill in ${t} comes from repetition. Commit to regular practice, even when progress feels slow.

## 4. Use the Right Tools

Having the right tools makes ${t} significantly easier. Invest time in finding resources that match your goals and skill level.

## 5. Track and Measure Results

What gets measured gets improved. Keep track of your ${t} progress with clear metrics.

## 6. Join a Community

Connect with others interested in ${t}. Communities provide support, motivation, and valuable insights you won't find elsewhere.

## 7. Avoid Common Pitfalls

Many people struggle with ${t} because of avoidable mistakes. Learn what they are and how to sidestep them early.

## 8. Stay Updated

The world of ${t} evolves quickly. Stay informed about the latest trends, tools, and best practices.

## 9. Teach What You Learn

One of the best ways to solidify your ${t} knowledge is to teach it to others. Write, share, or mentor.

## 10. Stay Patient and Persistent

Success with ${t} rarely happens overnight. Stay consistent, trust the process, and results will follow.

## Conclusion

Implementing even a few of these tips can make a meaningful difference in your ${t} journey. Start today!`,
};

export default function AIBlogClient() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState(Object.keys(BLOG_TYPES)[0]);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => { if (topic.trim()) setResult(BLOG_TYPES[type](topic)); };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  const wordCount = result.split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {Object.keys(BLOG_TYPES).map(t=>(
          <button key={t} onClick={()=>setType(t)}
            className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors ${type===t?"bg-purple-600":"bg-white/5 hover:bg-white/10"}`}>{t}</button>
        ))}
      </div>
      <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
        placeholder="e.g. meditation for beginners, email marketing, learning guitar"
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-purple-500/50"/>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📝 Generate Blog Post
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-white/40">{wordCount} words</label>
            <button onClick={copy} className={`text-xs ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed whitespace-pre-wrap max-h-96 overflow-auto">{result}</div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
