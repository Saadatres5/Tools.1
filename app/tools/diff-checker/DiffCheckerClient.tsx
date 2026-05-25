"use client";
import { useState, useMemo } from "react";
export default function DiffCheckerClient() {
  const [a,setA]=useState("");
  const [b,setB]=useState("");
  const diff=useMemo(()=>{
    if(!a&&!b)return[];
    const la=a.split("\n"),lb=b.split("\n");
    const max=Math.max(la.length,lb.length);
    return Array.from({length:max},(_,i)=>{
      const lineA=la[i]??"",lineB=lb[i]??"";
      const type=lineA===lineB?"same":!la[i]?"added":!lb[i]?"removed":"changed";
      return{lineA,lineB,type,n:i+1};
    });
  },[a,b]);
  const colors: Record<string,string>={same:"",added:"bg-green-50 border-l-2 border-green-500",removed:"bg-red-50 border-l-2 border-red-500",changed:"bg-yellow-500/10 border-l-2 border-yellow-500"};
  const stats=diff.reduce((s,d)=>({...s,[d.type]:(s[d.type]||0)+1}),{} as Record<string,number>);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div><label className="block text-xs text-gray-400 mb-1">Original Text</label>
          <textarea rows={8} value={a} onChange={e=>setA(e.target.value)} placeholder="Paste original text..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400 resize-none font-mono"/></div>
        <div><label className="block text-xs text-gray-400 mb-1">Modified Text</label>
          <textarea rows={8} value={b} onChange={e=>setB(e.target.value)} placeholder="Paste modified text..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-red-500/50 resize-none font-mono"/></div>
      </div>
      {(a||b)&&(
        <>
          <div className="flex gap-4 text-xs text-gray-8000">
            {stats.added&&<span className="text-emerald-700">+{stats.added} added</span>}
            {stats.removed&&<span className="text-red-600">-{stats.removed} removed</span>}
            {stats.changed&&<span className="text-yellow-600">~{stats.changed} changed</span>}
            {stats.same&&<span>{stats.same} unchanged</span>}
          </div>
          <div className="rounded-xl border border-gray-200 overflow-hidden text-xs font-mono">
            {diff.filter(d=>d.type!=="same"||true).map((d,i)=>(
              <div key={i} className={`px-4 py-1.5 ${colors[d.type]} ${d.type==="same"?"opacity-40":""}`}>
                <span className="text-gray-300 mr-4">{d.n}</span>
                {d.type==="added"&&<span className="text-green-300">+ {d.lineB}</span>}
                {d.type==="removed"&&<span className="text-red-300">- {d.lineA}</span>}
                {d.type==="changed"&&<><span className="text-red-300">- {d.lineA}</span><br/><span className="text-green-300">+ {d.lineB}</span></>}
                {d.type==="same"&&<span className="text-gray-8000">{d.lineA}</span>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
