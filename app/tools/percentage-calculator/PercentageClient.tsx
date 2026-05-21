
"use client";
import { useState } from "react";
export default function PercentageClient() {
  const [mode,setMode]=useState(0);
  const [a,setA]=useState("");
  const [b,setB]=useState("");
  const [result,setResult]=useState<string|null>(null);
  const modes=["X% of Y","X is what % of Y","Increase/decrease by %","Difference between X and Y"];
  const calc=()=>{
    const x=parseFloat(a),y=parseFloat(b);
    if(isNaN(x)||isNaN(y))return;
    let r="";
    if(mode===0)r=`${x}% of ${y} = ${(x/100*y).toFixed(4).replace(/\.?0+$/,"")}`;
    else if(mode===1)r=`${x} is ${(x/y*100).toFixed(2)}% of ${y}`;
    else if(mode===2)r=`${y} increased by ${x}% = ${(y*(1+x/100)).toFixed(4).replace(/\.?0+$/,"")}, decreased = ${(y*(1-x/100)).toFixed(4).replace(/\.?0+$/,"")}`;
    else if(mode===3)r=`Difference: ${Math.abs(x-y).toFixed(4)} (${(Math.abs(x-y)/((x+y)/2)*100).toFixed(2)}%)`;
    setResult(r);
  };
  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-2">
        {modes.map((m,i)=>(
          <button key={i} onClick={()=>{setMode(i);setResult(null);}} className={`py-2 px-3 rounded-xl text-xs transition-colors ${mode===i?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>{m}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><label className="block text-xs text-white/50 mb-1">Value X</label>
          <input type="number" value={a} onChange={e=>setA(e.target.value)} placeholder="e.g. 25" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 text-sm"/></div>
        <div><label className="block text-xs text-white/50 mb-1">Value Y</label>
          <input type="number" value={b} onChange={e=>setB(e.target.value)} placeholder="e.g. 200" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 text-sm"/></div>
      </div>
      <button onClick={calc} disabled={!a||!b} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm">Calculate</button>
      {result&&<div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold text-center text-lg">{result}</div>}
    </div>
  );
}
