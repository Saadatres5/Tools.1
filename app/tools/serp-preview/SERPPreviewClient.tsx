
"use client";
import { useState } from "react";
export default function SERPPreviewClient() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [url,setUrl]=useState("");
  const tLen=title.length,dLen=desc.length;
  const tOk=tLen>=30&&tLen<=60,dOk=dLen>=120&&dLen<=160;
  return (
    <div className="space-y-4">
      {[["Page Title (30–60 chars)",title,setTitle,"e.g. Best Free PDF Tools Online | ToolsAI",60],["Meta Description (120–160 chars)",desc,setDesc,"e.g. Compress, merge, and convert PDFs for free. No signup required...",160],["Page URL",url,setUrl,"https://example.com/your-page",100]].map(([l,v,s,p,max])=>(
        <div key={l as string}>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/50">{l as string}</label>
            {max&&<span className={`text-xs ${(v as string).length>(max as number)?"text-red-400":(v as string).length>=(max as number)*0.5?"text-green-400":"text-white/30"}`}>{(v as string).length}/{max}</span>}
          </div>
          <input value={v as string} onChange={e=>(s as (v:string)=>void)(e.target.value)} placeholder={p as string}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500/50"/>
        </div>
      ))}
      {(title||desc||url)&&(
        <div>
          <p className="text-xs text-white/40 mb-3">Google SERP Preview:</p>
          <div className="p-5 rounded-2xl bg-white text-gray-900 font-sans shadow-lg">
            <p className="text-xs text-gray-500 mb-0.5">{url||"https://example.com/page"}</p>
            <p className="text-blue-700 text-xl hover:underline cursor-pointer mb-1 leading-tight">{title||"Page Title Goes Here"}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{desc||"Your meta description will appear here. Make it 120-160 characters for best results."}</p>
          </div>
          <div className="mt-3 flex gap-3 text-xs">
            <span className={tOk?"text-green-400":"text-red-400"}>{tOk?"✅":"❌"} Title length</span>
            <span className={dOk?"text-green-400":"text-red-400"}>{dOk?"✅":"❌"} Description length</span>
          </div>
        </div>
      )}
    </div>
  );
}
