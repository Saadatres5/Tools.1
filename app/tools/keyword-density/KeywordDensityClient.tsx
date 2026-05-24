"use client";
import { useState, useMemo } from "react";
export default function KeywordDensityClient() {
  const [text,setText]=useState("");
  const [min,setMin]=useState(3);
  const analysis=useMemo(()=>{
    if(!text.trim())return{words:0,density:[]};
    const words=text.toLowerCase().match(/\b[a-z]{3,}\b/g)||[];
    const freq:Record<string,number>={};
    const stop=new Set(["the","and","for","are","but","not","you","all","can","her","was","one","our","had","but","what","said","there","which","their","this","have","from","they","will","been","with","that","more","into","when","your","than","also","then","each","some","were","would","about","could","other","after","first","well","over","even","most","such","only","both","many","time","very","just","like","make","know","take","into","way","out","has"]);
    words.filter(w=>!stop.has(w)).forEach(w=>freq[w]=(freq[w]||0)+1);
    const sorted=Object.entries(freq).filter(([,c])=>c>=min).sort(([,a],[,b])=>b-a).slice(0,20);
    return{words:words.length,density:sorted.map(([w,c])=>({word:w,count:c,pct:Math.round(c/words.length*1000)/10}))};
  },[text,min]);
  return (
    <div className="space-y-4">
      <textarea rows={6} value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your content here to analyze keyword density..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <div className="flex items-center gap-3 text-sm text-white/60">
        <span>Show keywords appearing at least</span>
        <input type="number" value={min} min={1} max={20} onChange={e=>setMin(+e.target.value)}
          className="w-16 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-white outline-none text-sm"/>
        <span>times</span>
      </div>
      {analysis.words>0&&(
        <div>
          <p className="text-xs text-white/40 mb-3">Total words: {analysis.words} • Top keywords:</p>
          <div className="space-y-2">
            {analysis.density.map(({word,count,pct})=>(
              <div key={word} className="flex items-center gap-3">
                <span className="text-sm w-32 font-mono text-white">{word}</span>
                <div className="flex-1 bg-white/5 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all" style={{width:`${Math.min(100,pct*10)}%`}}/>
                </div>
                <span className="text-xs text-white/50 w-20 text-right">{count}x ({pct}%)</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
