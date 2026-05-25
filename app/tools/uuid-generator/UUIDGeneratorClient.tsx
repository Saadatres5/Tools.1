"use client";
import { useState } from "react";
function genUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c=>{
    const r=Math.random()*16|0, v=c==="x"?r:(r&0x3|0x8); return v.toString(16);
  });
}
export default function UUIDGeneratorClient() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);
  const [copied, setCopied] = useState("");
  const generate = () => setUuids(Array.from({length:count},()=>genUUID()));
  const copy = (u: string) => { navigator.clipboard.writeText(u); setCopied(u); setTimeout(()=>setCopied(""),2000); };
  const copyAll = () => { navigator.clipboard.writeText(uuids.join("\n")); };
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
        <label className="text-sm text-gray-8000">How many?</label>
        <input type="number" min={1} max={50} value={count} onChange={e=>setCount(+e.target.value)}
          className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-800 outline-none" />
        <button onClick={generate} className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
          🎲 Generate UUIDs
        </button>
      </div>
      {uuids.length > 0 && (
        <>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">{uuids.length} UUIDs (v4)</span>
            <button onClick={copyAll} className="text-xs text-blue-600 hover:text-blue-300">Copy all</button>
          </div>
          <div className="space-y-2">
            {uuids.map(u=>(
              <div key={u} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 gap-3">
                <code className="text-sm text-emerald-700 font-mono">{u}</code>
                <button onClick={()=>copy(u)} className={`text-xs px-3 py-1 rounded-lg transition-colors flex-shrink-0 ${copied===u?"bg-green-600 text-gray-800":"bg-gray-100 hover:bg-gray-100 text-gray-8000"}`}>
                  {copied===u?"✓":"Copy"}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
