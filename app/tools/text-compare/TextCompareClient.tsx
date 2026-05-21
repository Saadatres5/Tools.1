
"use client";
import { useState } from "react";
export default function TextCompareClient() {
  const [a,setA]=useState("");
  const [b,setB]=useState("");
  const similarity=()=>{
    if(!a||!b)return 0;
    const wa=new Set(a.toLowerCase().split(/\s+/));
    const wb=new Set(b.toLowerCase().split(/\s+/));
    const inter=[...wa].filter(x=>wb.has(x)).length;
    const union=new Set([...wa,...wb]).size;
    return Math.round(inter/union*100);
  };
  const sim=similarity();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-xs text-white/40 mb-1">Text A</label>
          <textarea rows={8} value={a} onChange={e=>setA(e.target.value)} placeholder="Paste first text..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500/50 resize-none"/></div>
        <div><label className="block text-xs text-white/40 mb-1">Text B</label>
          <textarea rows={8} value={b} onChange={e=>setB(e.target.value)} placeholder="Paste second text..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-red-500/50 resize-none"/></div>
      </div>
      {(a&&b)&&(
        <div className="grid grid-cols-3 gap-3 text-center">
          {[["Words A",a.trim().split(/\s+/).length,"blue"],["Words B",b.trim().split(/\s+/).length,"purple"],["Similarity",sim+"%",sim>70?"green":sim>40?"yellow":"red"]].map(([l,v,c])=>(
            <div key={l as string} className={`p-4 rounded-2xl bg-${c}-500/10 border border-${c}-500/20`}>
              <div className={`text-2xl font-bold text-${c}-400`}>{v}</div>
              <div className="text-white/40 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
