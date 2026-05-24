"use client";
import { useState } from "react";

const ESSAY_TYPES: Record<string,(topic:string)=>string> = {
  "Argumentative": (t) => `# ${t}: An Argumentative Essay

## Introduction

${t} is one of the most debated topics in modern discourse. While some argue against its significance, a thorough examination of the evidence reveals a compelling case in its favor. This essay will argue that ${t} deserves serious attention and thoughtful consideration.

## Body Paragraph 1: The Core Argument

The most compelling reason to support ${t} lies in its direct impact on society. Research consistently demonstrates that engaging with ${t} leads to measurable improvements in outcomes, quality of life, and collective progress. The evidence is difficult to ignore.

Furthermore, those who dismiss ${t} often rely on outdated assumptions or incomplete information. A more nuanced analysis reveals that the benefits far outweigh any potential drawbacks.

## Body Paragraph 2: Addressing Counterarguments

Opponents of ${t} frequently raise concerns about its feasibility and cost. These are legitimate concerns that deserve acknowledgment. However, the long-term benefits of embracing ${t} substantially outweigh the short-term challenges.

It is also worth noting that many of the concerns raised by critics are based on hypothetical risks rather than demonstrated harms. The precautionary principle, while valuable, should not prevent progress when the evidence points clearly in a positive direction.

## Body Paragraph 3: Broader Implications

Beyond the immediate debate, ${t} carries profound implications for how we think about the future. By taking ${t} seriously, we open the door to new possibilities, innovations, and ways of thinking that could transform our collective experience.

History shows us that ideas once dismissed as radical — from democratic governance to universal education — later became cornerstones of civilization. ${t} may well follow the same trajectory.

## Conclusion

In conclusion, the case for ${t} is strong, well-supported, and worthy of serious engagement. We should approach it not with fear or dismissal, but with the curiosity and rigor it deserves. The future belongs to those who engage thoughtfully with the ideas that matter most.`,

  "Descriptive": (t) => `# ${t}: A Descriptive Essay

## Introduction

To truly understand ${t}, one must go beyond surface-level observation. ${t} is a rich, multifaceted subject that rewards careful attention and thoughtful examination. This essay aims to paint a vivid picture of ${t} in all its complexity and nuance.

## The Landscape of ${t}

At first glance, ${t} presents itself in familiar forms — recognizable, approachable, and seemingly simple. But look closer, and an entirely different world reveals itself. The layers of ${t} unfold gradually, each one offering new insight and discovery.

The environment surrounding ${t} is just as important as the subject itself. Context shapes meaning, and understanding where and how ${t} exists gives us essential clues to its true nature.

## The Experience of ${t}

Those who engage deeply with ${t} often describe a transformative experience. There is something about ${t} that changes the way you see the world — not dramatically, but in subtle, lasting ways.

The sensory dimensions of ${t} are often overlooked. What does it feel like to encounter ${t} directly? What emotions arise? What memories surface? These questions are central to understanding ${t} in its fullness.

## The Significance of ${t}

Why does ${t} matter? The answer lies in its ability to connect us — to each other, to our past, and to our potential future. ${t} serves as both a mirror and a window: reflecting who we are while showing us who we might become.

## Conclusion

${t} defies easy summarization. It is dynamic, evolving, and endlessly fascinating. To describe it fully would require more than words — it requires experience. This essay is merely an invitation to look more closely at the world around you, and to see ${t} with fresh eyes.`,
};

export default function EssayWriterClient() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("Argumentative");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => { if (topic.trim()) setResult(ESSAY_TYPES[type](topic)); };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  const wc = result.split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {Object.keys(ESSAY_TYPES).map(t=>(
          <button key={t} onClick={()=>setType(t)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${type===t?"bg-teal-600":"bg-white/5 hover:bg-white/10"}`}>{t}</button>
        ))}
      </div>
      <input value={topic} onChange={e=>setTopic(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
        placeholder="e.g. climate change, social media, artificial intelligence"
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-teal-500/50"/>
      <button onClick={generate} disabled={!topic.trim()}
        className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        ✍️ Write Essay
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-white/40">~{wc} words</label>
            <button onClick={copy} className={`text-xs ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed whitespace-pre-wrap max-h-96 overflow-auto">{result}</div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
