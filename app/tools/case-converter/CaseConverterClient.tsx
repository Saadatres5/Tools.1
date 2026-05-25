"use client";
import { useState } from "react";
export default function CaseConverterClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const convert = (type: string) => {
    let r = "";
    if (type==="upper") r = input.toUpperCase();
    else if (type==="lower") r = input.toLowerCase();
    else if (type==="title") r = input.replace(/\w\S*/g,t=>t[0].toUpperCase()+t.slice(1).toLowerCase());
    else if (type==="sentence") r = input.toLowerCase().replace(/(^|[.!?]\s+)([a-z])/g,(_,p,c)=>p+c.toUpperCase());
    else if (type==="camel") r = input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(_,c)=>c.toUpperCase());
    else if (type==="snake") r = input.toLowerCase().replace(/\s+/g,"_");
    else if (type==="kebab") r = input.toLowerCase().replace(/\s+/g,"-");
    else if (type==="pascal") r = input.replace(/(^|\s)([a-z])/g,(_,p,c)=>c.toUpperCase()).replace(/\s+/g,"");
    setResult(r);
  };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  const cases = [["UPPERCASE","upper"],["lowercase","lower"],["Title Case","title"],["Sentence case","sentence"],["camelCase","camel"],["snake_case","snake"],["kebab-case","kebab"],["PascalCase","pascal"]];
  return (
    <div className="space-y-4">
      <textarea rows={5} value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter your text here..."
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-400 resize-none" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {cases.map(([l,t])=>(
          <button key={t} onClick={()=>convert(t)} disabled={!input}
            className="py-2 px-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 disabled:opacity-40 text-sm transition-colors font-mono">
            {l}
          </button>
        ))}
      </div>
      {result && (
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-gray-400">Result</label>
            <button onClick={copy} className={`text-xs transition-colors ${copied?"text-emerald-700":"text-blue-600 hover:text-blue-300"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 break-words">{result}</div>
        </div>
      )}
    </div>
  );
}
