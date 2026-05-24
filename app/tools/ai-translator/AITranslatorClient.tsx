"use client";
import { useState } from "react";

const LANGUAGES = [
  ["en","English"],["ar","Arabic"],["es","Spanish"],["fr","French"],["de","German"],
  ["it","Italian"],["pt","Portuguese"],["zh","Chinese"],["ja","Japanese"],["ko","Korean"],
  ["ru","Russian"],["hi","Hindi"],["tr","Turkish"],["nl","Dutch"],["pl","Polish"],
  ["sv","Swedish"],["da","Danish"],["fi","Finnish"],["no","Norwegian"],["id","Indonesian"],
];

export default function AITranslatorClient() {
  const [text, setText] = useState("");
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("ar");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const translate = async () => {
    if (!text.trim()) return;
    setLoading(true); setError(""); setResult("");
    try {
      const pair = `${from}|${to}`;
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${pair}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.responseStatus === 200) {
        setResult(data.responseData.translatedText);
      } else {
        setError("Translation failed. Please try again.");
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const swap = () => { setFrom(to); setTo(from); setResult(""); setText(result||text); };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <label className="block text-xs text-white/50 mb-1">From</label>
          <select value={from} onChange={e=>{setFrom(e.target.value);setResult("");}}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white outline-none">
            {LANGUAGES.map(([c,l])=><option key={c} value={c}>{l}</option>)}
          </select>
        </div>
        <button onClick={swap} className="mt-5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">⇄</button>
        <div className="flex-1">
          <label className="block text-xs text-white/50 mb-1">To</label>
          <select value={to} onChange={e=>{setTo(e.target.value);setResult("");}}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white outline-none">
            {LANGUAGES.map(([c,l])=><option key={c} value={c}>{l}</option>)}
          </select>
        </div>
      </div>
      <textarea rows={5} value={text} onChange={e=>setText(e.target.value)}
        placeholder="Enter text to translate..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <button onClick={translate} disabled={!text.trim()||loading}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        {loading?"Translating...":"🌍 Translate"}
      </button>
      {error && <p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">{error}</p>}
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-white/40">Translation</label>
            <button onClick={copy} className={`text-xs ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓":"Copy"}</button>
          </div>
          <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed whitespace-pre-wrap">{result}</div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ Powered by MyMemory — free translation, no API key required</p>
    </div>
  );
}
