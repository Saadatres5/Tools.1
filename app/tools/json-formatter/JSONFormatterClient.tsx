"use client";
import { useState } from "react";
export default function JSONFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const format = () => {
    try { setOutput(JSON.stringify(JSON.parse(input), null, indent)); setError(""); } 
    catch(e: unknown) { setError("Invalid JSON: " + (e instanceof Error ? e.message : String(e))); setOutput(""); }
  };
  const minify = () => {
    try { setOutput(JSON.stringify(JSON.parse(input))); setError(""); }
    catch(e: unknown) { setError("Invalid JSON: " + (e instanceof Error ? e.message : String(e))); }
  };
  const validate = () => {
    try { JSON.parse(input); setError(""); setOutput("✅ Valid JSON!"); }
    catch(e: unknown) { setError("❌ Invalid JSON: " + (e instanceof Error ? e.message : String(e))); setOutput(""); }
  };
  const copy = () => navigator.clipboard.writeText(output);
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-400 mb-1">Paste JSON</label>
        <textarea rows={8} value={input} onChange={e=>setInput(e.target.value)} placeholder='{"key": "value"...}'
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-emerald-700 placeholder-gray-300 outline-none focus:border-blue-400 resize-none font-mono" />
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <button onClick={format} className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">Format</button>
        <button onClick={minify} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 text-sm transition-colors">Minify</button>
        <button onClick={validate} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 text-sm transition-colors">Validate</button>
        <div className="flex items-center gap-2 ml-auto">
          <label className="text-xs text-gray-400">Indent:</label>
          <select value={indent} onChange={e=>setIndent(+e.target.value)} className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-800 outline-none">
            <option value={2}>2 spaces</option><option value={4}>4 spaces</option><option value={1}>1 space</option>
          </select>
        </div>
      </div>
      {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-xl">{error}</p>}
      {output && (
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-gray-400">Output</label>
            <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-300">Copy</button>
          </div>
          <pre className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-emerald-700 font-mono overflow-auto max-h-64">{output}</pre>
        </div>
      )}
    </div>
  );
}
