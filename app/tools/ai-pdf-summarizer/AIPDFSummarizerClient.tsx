"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";

function extractiveSummarize(text: string, count: number): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  if (sentences.length <= count) return text.trim();
  const words = text.toLowerCase().match(/\w{4,}/g) || [];
  const freq: Record<string,number> = {};
  words.forEach(w => freq[w] = (freq[w]||0)+1);
  const scored = sentences.map((s,i) => {
    const sw = s.toLowerCase().match(/\w{4,}/g) || [];
    const score = sw.reduce((sum,w)=>sum+(freq[w]||0),0)/(sw.length||1);
    return { s, score, i };
  });
  return [...scored].sort((a,b)=>b.score-a.score).slice(0,count)
    .sort((a,b)=>a.i-b.i).map(x=>x.s.trim()).join(" ");
}

export default function AIPDFSummarizerClient() {
  const [file, setFile] = useState<File|null>(null);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [mode, setMode] = useState<"short"|"medium"|"detailed">("medium");
  const counts = { short: 3, medium: 6, detailed: 10 };

  const process = async () => {
    if (!file) return;
    setStatus("processing"); setProgress(10);
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
      setProgress(30);
      const buf = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({data: buf}).promise;
      setProgress(50);
      const pages: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        pages.push(content.items.map((item: unknown) => (item as {str:string}).str).join(" "));
        setProgress(50 + (i/pdf.numPages)*30);
      }
      const fullText = pages.join(" ");
      setText(fullText);
      setSummary(extractiveSummarize(fullText, counts[mode]));
      setStatus("done"); setProgress(100);
    } catch { setStatus("error"); }
  };

  const regenerate = () => { if (text) setSummary(extractiveSummarize(text, counts[mode])); };
  const reset = () => { setFile(null); setText(""); setSummary(""); setStatus("idle"); setProgress(0); };

  return (
    <div className="space-y-4">
      {!file ? (
        <FileDropZone accept=".pdf,application/pdf" emoji="🤖" label="Drop your PDF here to summarize" onFiles={f=>{setFile(f[0]);setStatus("idle");}}/>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm">✕</button>
          </div>
          <div className="flex gap-2">
            {(["short","medium","detailed"] as const).map(m=>(
              <button key={m} onClick={()=>setMode(m)}
                className={`flex-1 py-2 rounded-xl text-xs capitalize transition-colors ${mode===m?"bg-purple-600":"bg-white/5 hover:bg-white/10"}`}>{m}</button>
            ))}
          </div>
          {status==="processing" && <ProgressBar progress={progress} label="Extracting and summarizing PDF..."/>}
          {status==="done" && summary && (
            <div className="space-y-3">
              <p className="text-green-400 text-sm font-semibold">✅ Summary ready!</p>
              <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed">{summary}</div>
              <div className="flex gap-3">
                <button onClick={regenerate} className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm">↺ Re-summarize</button>
                <button onClick={()=>navigator.clipboard.writeText(summary)} className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm">Copy</button>
                <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button>
              </div>
            </div>
          )}
          {status==="error" && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">❌ Could not read this PDF. Try a text-based PDF.</div>}
          {status==="idle" && <button onClick={process} className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 font-semibold text-sm transition-colors">🤖 Summarize PDF</button>}
        </div>
      )}
      <p className="text-xs text-white/20">✓ Browser-based extractive summarization — no API key required</p>
    </div>
  );
}
