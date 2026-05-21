"use client";
import { useState } from "react";
export default function ResumeBuilderClient() {
  const [input,setInput]=useState("");
  const [output,setOutput]=useState("");
  return (
    <div className="space-y-4">
      <textarea rows={5} value={input} onChange={e=>setInput(e.target.value)}
        placeholder="Enter your content here..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <button onClick={()=>setOutput("Output will appear here. Full functionality requires server-side processing.")}
        disabled={!input} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📄 Process
      </button>
      {output&&<div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/70">{output}</div>}
    </div>
  );
}
