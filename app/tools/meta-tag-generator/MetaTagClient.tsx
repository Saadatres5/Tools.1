"use client";
import { useState } from "react";
export default function MetaTagClient() {
  const [f,setF]=useState({title:"",desc:"",keywords:"",author:"",og:true,twitter:true,robots:"index, follow",canonical:""});
  const update=(k:string,v:string|boolean)=>setF(p=>({...p,[k]:v}));
  const tags=[
    `<title>${f.title}</title>`,
    `<meta name="description" content="${f.desc}">`,
    f.keywords?`<meta name="keywords" content="${f.keywords}">`:null,
    f.author?`<meta name="author" content="${f.author}">`:null,
    `<meta name="robots" content="${f.robots}">`,
    f.canonical?`<link rel="canonical" href="${f.canonical}">`:null,
    f.og&&f.title?`<meta property="og:title" content="${f.title}">`:null,
    f.og&&f.desc?`<meta property="og:description" content="${f.desc}">`:null,
    f.og?`<meta property="og:type" content="website">`:null,
    f.twitter&&f.title?`<meta name="twitter:title" content="${f.title}">`:null,
    f.twitter&&f.desc?`<meta name="twitter:description" content="${f.desc}">`:null,
    f.twitter?`<meta name="twitter:card" content="summary_large_image">`:null,
  ].filter(Boolean).join("\n");
  const copy=()=>navigator.clipboard.writeText(tags);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[["Page Title","title","e.g. Best Free PDF Tools"],["Meta Description","desc","150-160 characters recommended"],["Keywords","keywords","comma, separated, keywords"],["Author","author","Your name or brand"],["Canonical URL","canonical","https://example.com/page"]].map(([l,k,p])=>(
          <div key={k}><label className="block text-xs text-gray-8000 mb-1">{l}</label>
            <input value={f[k as keyof typeof f] as string} onChange={e=>update(k,e.target.value)} placeholder={p}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-400"/></div>
        ))}
        <div><label className="block text-xs text-gray-8000 mb-1">Robots</label>
          <select value={f.robots} onChange={e=>update("robots",e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none">
            <option>index, follow</option><option>noindex, follow</option><option>index, nofollow</option><option>noindex, nofollow</option>
          </select></div>
      </div>
      <div className="flex gap-4">
        {[["og","Open Graph (Facebook/LinkedIn)"],["twitter","Twitter Cards"]].map(([k,l])=>(
          <label key={k} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
            <input type="checkbox" checked={f[k as "og"|"twitter"]} onChange={e=>update(k,e.target.checked)} className="accent-blue-500"/>
            {l}
          </label>
        ))}
      </div>
      {f.title&&(
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-gray-400">Generated Meta Tags</label>
            <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-300">Copy All</button>
          </div>
          <pre className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-emerald-700 font-mono overflow-auto whitespace-pre-wrap">{tags}</pre>
        </div>
      )}
    </div>
  );
}
