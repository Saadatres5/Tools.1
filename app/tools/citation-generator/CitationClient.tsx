"use client";
import { useState } from "react";

type Style = "APA" | "MLA" | "Chicago" | "Harvard" | "IEEE";

interface Fields { author: string; title: string; year: string; publisher: string; url: string; journal: string; volume: string; pages: string; }

function formatCitation(f: Fields, style: Style): string {
  const a = f.author || "Unknown Author";
  const t = f.title || "Unknown Title";
  const y = f.year || "n.d.";
  const p = f.publisher || "";
  const u = f.url ? ` Retrieved from ${f.url}` : "";
  const j = f.journal || "";
  const v = f.volume || "";
  const pg = f.pages || "";

  if (style === "APA") {
    if (j) return `${a} (${y}). ${t}. *${j}*, *${v}*, ${pg}.${u}`;
    return `${a} (${y}). *${t}*. ${p}.${u}`;
  }
  if (style === "MLA") {
    if (j) return `${a}. "${t}." *${j}*, vol. ${v}, ${y}, pp. ${pg}.`;
    return `${a}. *${t}*. ${p}, ${y}.`;
  }
  if (style === "Chicago") {
    if (j) return `${a}. "${t}." *${j}* ${v} (${y}): ${pg}.`;
    return `${a}. *${t}*. ${p}: ${y}.`;
  }
  if (style === "Harvard") {
    if (j) return `${a} ${y}, '${t}', *${j}*, vol. ${v}, pp. ${pg}.`;
    return `${a} ${y}, *${t}*, ${p}.`;
  }
  if (style === "IEEE") {
    return `${a}, "${t}," ${j||p}, vol. ${v||"1"}, pp. ${pg||"1"}, ${y}.`;
  }
  return "";
}

export default function CitationClient() {
  const [style, setStyle] = useState<Style>("APA");
  const [fields, setFields] = useState<Fields>({ author:"", title:"", year:"", publisher:"", url:"", journal:"", volume:"", pages:"" });
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const upd = (k: keyof Fields, v: string) => setFields(f=>({...f,[k]:v}));
  const generate = () => setResult(formatCitation(fields, style));
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  const styles: Style[] = ["APA","MLA","Chicago","Harvard","IEEE"];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {styles.map(s=>(
          <button key={s} onClick={()=>setStyle(s)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${style===s?"bg-indigo-600":"bg-gray-50 hover:bg-gray-100"}`}>{s}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {([["author","Author(s) e.g. Smith, J."],["title","Title of work"],["year","Year e.g. 2024"],["publisher","Publisher"],["journal","Journal name (if article)"],["volume","Volume"],["pages","Pages e.g. 12-25"],["url","URL (optional)"]] as [keyof Fields, string][]).map(([k,ph])=>(
          <div key={k}>
            <label className="block text-xs text-gray-400 mb-1 capitalize">{k}</label>
            <input value={fields[k]} onChange={e=>upd(k,e.target.value)} placeholder={ph}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 outline-none focus:border-indigo-500/50 placeholder-gray-300"/>
          </div>
        ))}
      </div>
      <button onClick={generate} disabled={!fields.title}
        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📖 Generate Citation
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-gray-400">{style} Citation</label>
            <button onClick={copy} className={`text-xs ${copied?"text-emerald-700":"text-blue-600"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm text-gray-800/80 leading-relaxed italic">{result}</div>
        </div>
      )}
      <p className="text-xs text-gray-300">✓ Free — no API key required</p>
    </div>
  );
}
