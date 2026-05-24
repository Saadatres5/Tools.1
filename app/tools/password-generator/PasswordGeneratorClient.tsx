"use client";
import { useState, useCallback } from "react";
export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copied, setCopied] = useState("");
  const generate = useCallback(() => {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) return;
    const gen = () => Array.from({length}, ()=>chars[Math.floor(Math.random()*chars.length)]).join("");
    setPasswords([gen(),gen(),gen(),gen(),gen()]);
  }, [length,upper,lower,numbers,symbols]);
  const copy = (p: string) => { navigator.clipboard.writeText(p); setCopied(p); setTimeout(()=>setCopied(""),2000); };
  const strength = (symbols && numbers && upper && lower && length>=16) ? ["Strong","green"] : length>=12 ? ["Medium","yellow"] : ["Weak","red"];
  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
        <div>
          <div className="flex justify-between mb-2"><label className="text-sm text-white/60">Length</label><span className="text-sm font-bold text-blue-400">{length}</span></div>
          <input type="range" min={6} max={64} value={length} onChange={e=>setLength(+e.target.value)} className="w-full accent-blue-500" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[["Uppercase (A-Z)",upper,setUpper],["Lowercase (a-z)",lower,setLower],["Numbers (0-9)",numbers,setNumbers],["Symbols (!@#...)",symbols,setSymbols]].map(([l,v,s])=>(
            <label key={l as string} className="flex items-center gap-2 cursor-pointer text-sm text-white/70">
              <input type="checkbox" checked={v as boolean} onChange={e=>(s as (v:boolean)=>void)(e.target.checked)} className="accent-blue-500 w-4 h-4" />
              {l as string}
            </label>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40">Strength:</span>
          <span className={`text-xs font-semibold text-${strength[1]}-400`}>{strength[0]}</span>
        </div>
      </div>
      <button onClick={generate} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">
        🔐 Generate Passwords
      </button>
      {passwords.length > 0 && (
        <div className="space-y-2">
          {passwords.map(p=>(
            <div key={p} className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 gap-3">
              <code className="text-sm text-green-400 font-mono flex-1 break-all">{p}</code>
              <button onClick={()=>copy(p)} className={`text-xs px-3 py-1 rounded-lg transition-colors flex-shrink-0 ${copied===p?"bg-green-600 text-white":"bg-white/10 hover:bg-white/20 text-white/60"}`}>
                {copied===p?"Copied!":"Copy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
