
"use client";
import { useState } from "react";
export default function WordCounterClient() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,"").length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paragraphs = text.split(/\n\s*\n/).filter(p=>p.trim()).length;
  const readTime = Math.max(1, Math.round(words / 200));
  return (
    <div className="space-y-4">
      <textarea rows={10} value={text} onChange={e=>setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[["Words",words,"blue"],["Characters",chars,"purple"],["Chars (no spaces)",charsNoSpace,"pink"],["Sentences",sentences,"green"],["Paragraphs",paragraphs,"yellow"],["Read time",readTime+"m","orange"]].map(([l,v,c])=>(
          <div key={l as string} className="text-center p-4 rounded-xl bg-white/5 border border-white/8">
            <div className={`text-2xl font-bold text-${c}-400`}>{v}</div>
            <div className="text-xs text-white/40 mt-1">{l}</div>
          </div>
        ))}
      </div>
      {text && <button onClick={()=>setText("")} className="text-xs text-white/30 hover:text-white/60 transition-colors">Clear text</button>}
    </div>
  );
}
