"use client";
import { useState } from "react";
export default function Base64Client() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");
  const [error, setError] = useState("");
  const process = () => {
    setError("");
    try {
      if (mode==="encode") setOutput(btoa(unescape(encodeURIComponent(input))));
      else setOutput(decodeURIComponent(escape(atob(input))));
    } catch { setError("Invalid input for " + mode); }
  };
  const copy = () => navigator.clipboard.writeText(output);
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(["encode","decode"] as const).map(m=>(
          <button key={m} onClick={()=>setMode(m)} className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${mode===m?"bg-blue-600 text-gray-800":"bg-gray-50 text-gray-8000 hover:bg-gray-100"}`}>
            {m==="encode"?"Encode to Base64":"Decode from Base64"}
          </button>
        ))}
      </div>
      <div>
        <label className="block text-xs text-gray-400 mb-1">Input</label>
        <textarea rows={4} value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="encode"?"Enter text to encode...":"Enter Base64 to decode..."}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-400 resize-none font-mono" />
      </div>
      <button onClick={process} disabled={!input} className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-medium text-sm transition-colors">
        {mode==="encode"?"🔒 Encode":"🔓 Decode"}
      </button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {output && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs text-gray-400">Output</label>
            <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-300">Copy</button>
          </div>
          <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-emerald-700 font-mono break-all">{output}</div>
        </div>
      )}
    </div>
  );
}
