
"use client";
import { useState } from "react";

function extractiveSummarize(text: string, sentences: number): string {
  const sents = text.match(/[^.!?]+[.!?]+/g) || [text];
  if (sents.length <= sentences) return text.trim();
  // Score sentences by word frequency
  const words = text.toLowerCase().match(/\w{4,}/g) || [];
  const freq: Record<string,number> = {};
  words.forEach(w => freq[w] = (freq[w]||0) + 1);
  const scored = sents.map((s, i) => {
    const sw = s.toLowerCase().match(/\w{4,}/g) || [];
    const score = sw.reduce((sum, w) => sum + (freq[w]||0), 0) / (sw.length || 1);
    return { s, score, i };
  });
  // Keep top sentences in original order
  const top = [...scored].sort((a,b) => b.score - a.score).slice(0, sentences);
  return top.sort((a,b) => a.i - b.i).map(x => x.s.trim()).join(" ");
}

export default function AISummarizerClient() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"short"|"medium"|"detailed">("medium");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const counts = { short: 2, medium: 4, detailed: 7 };

  const summarize = () => {
    if (!text.trim()) return;
    setResult(extractiveSummarize(text, counts[mode]));
  };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["short","medium","detailed"] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${mode===m?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>{m}</button>
        ))}
      </div>
      <textarea rows={7} value={text} onChange={e=>setText(e.target.value)}
        placeholder="Paste the text you want to summarize..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <div className="flex items-center justify-between text-xs text-white/30">
        <span>{text.split(/\s+/).filter(Boolean).length} words · {text.match(/[.!?]+/g)?.length||0} sentences</span>
      </div>
      <button onClick={summarize} disabled={!text.trim()}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📋 Summarize
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-white/40">Summary ({result.split(/\s+/).length} words)</label>
            <button onClick={copy} className={`text-xs transition-colors ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed">{result}</div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ 100% browser-based — no API, no data sent anywhere</p>
    </div>
  );
}
