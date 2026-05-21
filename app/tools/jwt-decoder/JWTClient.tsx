
"use client";
import { useState } from "react";
function b64d(s:string){try{return JSON.parse(atob(s.replace(/-/g,"+").replace(/_/g,"/")));}catch{return null;}}
export default function JWTClient() {
  const [token,setToken]=useState("");
  const parts=token.split(".");
  const header=parts[0]?b64d(parts[0]):null;
  const payload=parts[1]?b64d(parts[1]):null;
  const isValid=parts.length===3;
  const exp=payload?.exp?new Date(payload.exp*1000):null;
  const expired=exp&&exp<new Date();
  const copy=(v:object)=>navigator.clipboard.writeText(JSON.stringify(v,null,2));
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-white/40 mb-1">Paste JWT Token</label>
        <textarea rows={4} value={token} onChange={e=>setToken(e.target.value)} placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-green-400 font-mono outline-none focus:border-blue-500/50 resize-none break-all"/>
      </div>
      {token&&!isValid&&<p className="text-red-400 text-sm">❌ Invalid JWT format</p>}
      {isValid&&(
        <div className="space-y-3">
          {exp&&<div className={`p-3 rounded-xl text-sm ${expired?"bg-red-500/10 border border-red-500/20 text-red-400":"bg-green-500/10 border border-green-500/20 text-green-400"}`}>
            {expired?"❌ Token EXPIRED":"✅ Token Valid"} — Expires: {exp.toLocaleString()}
          </div>}
          {[["Header (Algorithm & Token Type)",header,"blue"],["Payload (Claims)",payload,"purple"]].map(([l,v,c])=>(
            v&&<div key={l as string}>
              <div className="flex justify-between mb-1">
                <label className={`text-xs text-${c}-400 font-semibold`}>{l as string}</label>
                <button onClick={()=>copy(v as object)} className="text-xs text-white/30 hover:text-white/60">Copy</button>
              </div>
              <pre className={`bg-black/40 border border-${c}-500/20 rounded-xl p-4 text-xs text-${c}-300 font-mono overflow-auto`}>{JSON.stringify(v,null,2)}</pre>
            </div>
          ))}
          <div>
            <label className="block text-xs text-white/40 mb-1">Signature</label>
            <code className="block bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-yellow-400 font-mono break-all">{parts[2]}</code>
          </div>
        </div>
      )}
    </div>
  );
}
