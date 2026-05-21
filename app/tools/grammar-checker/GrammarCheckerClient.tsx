"use client";
import { useState } from "react";
const COMMON=[
  {re:/\bi\b/g,fix:"I",msg:"\"i\" should be capitalized"},
  {re:/\bdont\b/g,fix:"don't",msg:"Missing apostrophe in dont"},
  {re:/\bcant\b/g,fix:"can't",msg:"Missing apostrophe in cant"},
  {re:/\bwont\b/g,fix:"won't",msg:"Missing apostrophe in wont"},
  {re:/\bim\b/g,fix:"I'm",msg:"Use I'm instead of im"},
  {re:/  +/g,fix:" ",msg:"Multiple spaces found"},
  {re:/([.!?])([A-Z])/g,fix:"$1 $2",msg:"Missing space after punctuation"},
];
export default function GrammarCheckerClient() {
  const [text,setText]=useState("");
  const [fixed,setFixed]=useState("");
  const [issues,setIssues]=useState<{msg:string;count:number}[]>([]);
  const check=()=>{
    let t=text;
    const found:typeof issues=[];
    COMMON.forEach(({re,fix,msg})=>{
      const matches=t.match(re);
      if(matches){found.push({msg,count:matches.length});t=t.replace(re,fix);}
    });
    setFixed(t);setIssues(found);
  };
  const copy=()=>navigator.clipboard.writeText(fixed);
  return (
    <div className="space-y-4">
      <textarea rows={7} value={text} onChange={e=>{setText(e.target.value);setFixed("");setIssues([]);}}
        placeholder="Paste your text here and we'll check for common grammar issues..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <button onClick={check} disabled={!text} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-medium text-sm transition-colors">
        ✅ Check Grammar
      </button>
      {issues.length>0&&(
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 space-y-2">
          <p className="text-yellow-400 text-sm font-semibold">Found {issues.length} issue{issues.length>1?"s":""}:</p>
          {issues.map((i,idx)=><p key={idx} className="text-white/60 text-xs">⚠️ {i.msg} ({i.count}x)</p>)}
        </div>
      )}
      {fixed&&(
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/40">Corrected Text {issues.length===0?"(No issues found!)":""}</label>
            <button onClick={copy} className="text-xs text-blue-400">Copy</button>
          </div>
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl px-4 py-3 text-sm text-white/80 leading-relaxed">{fixed}</div>
        </div>
      )}
    </div>
  );
}
