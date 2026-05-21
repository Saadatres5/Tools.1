
"use client";
import { useState, useMemo } from "react";
export default function RegexClient() {
  const [pattern,setPattern]=useState("");
  const [flags,setFlags]=useState("g");
  const [text,setText]=useState("Hello World! This is a test string. Testing 123.");
  const {matches,highlighted,error}=useMemo(()=>{
    if(!pattern)return{matches:[],highlighted:text,error:""};
    try{
      const re=new RegExp(pattern,flags);
      const m=[...text.matchAll(re)].map(m=>({match:m[0],index:m.index||0,groups:m.groups}));
      const h=text.replace(re,match=>`<mark class="bg-yellow-400/40 text-yellow-200 rounded px-0.5">${match}</mark>`);
      return{matches:m,highlighted:h,error:""};
    }catch(e:unknown){return{matches:[],highlighted:text,error:(e instanceof Error?e.message:String(e))};}
  },[pattern,flags,text]);
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-xs text-white/40 mb-1">Regular Expression</label>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-500/50">
            <span className="text-white/30 mr-2">/</span>
            <input value={pattern} onChange={e=>setPattern(e.target.value)} placeholder="your pattern here"
              className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none"/>
            <span className="text-white/30 mx-2">/</span>
            <input value={flags} onChange={e=>setFlags(e.target.value)} className="w-12 bg-transparent text-blue-400 font-mono text-sm outline-none" placeholder="gi"/>
          </div>
        </div>
      </div>
      {error&&<p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">❌ {error}</p>}
      <div>
        <label className="block text-xs text-white/40 mb-1">Test String</label>
        <textarea rows={4} value={text} onChange={e=>setText(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500/50 resize-none font-mono"/>
      </div>
      {pattern&&!error&&(
        <div>
          <label className="block text-xs text-white/40 mb-1">Highlighted Matches ({matches.length})</label>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono leading-relaxed"
            dangerouslySetInnerHTML={{__html:highlighted}}/>
          {matches.length>0&&(
            <div className="mt-3 space-y-1">
              {matches.slice(0,10).map((m,i)=>(
                <div key={i} className="flex gap-3 text-xs p-2 rounded-lg bg-white/3">
                  <span className="text-white/30">Match {i+1}:</span>
                  <code className="text-yellow-300">{JSON.stringify(m.match)}</code>
                  <span className="text-white/30">at index {m.index}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
