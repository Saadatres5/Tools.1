
"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";

function formatBytes(b: number) { return b < 1048576 ? (b/1024).toFixed(1)+" KB" : (b/1048576).toFixed(2)+" MB"; }

export default function MergePDFClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [resultUrl, setResultUrl] = useState("");

  const handleFiles = (f: File[]) => { setFiles(prev => [...prev, ...f]); setStatus("idle"); };
  const removeFile = (i: number) => setFiles(prev => prev.filter((_, idx) => idx !== i));
  const moveUp = (i: number) => { if (i===0) return; const a=[...files]; [a[i-1],a[i]]=[a[i],a[i-1]]; setFiles(a); };

  const merge = async () => {
    if (files.length < 2) return;
    setStatus("processing"); setProgress(10);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const merged = await PDFDocument.create();
      setProgress(20);
      for (let i = 0; i < files.length; i++) {
        const buf = await files[i].arrayBuffer();
        const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(p => merged.addPage(p));
        setProgress(20 + ((i+1)/files.length)*70);
      }
      const bytes = await merged.save();
      const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
      setResultUrl(URL.createObjectURL(blob));
      setStatus("done"); setProgress(100);
    } catch { setStatus("error"); }
  };

  const download = () => { const a=document.createElement("a"); a.href=resultUrl; a.download="merged.pdf"; a.click(); };
  const reset = () => { setFiles([]); setResultUrl(""); setStatus("idle"); setProgress(0); };

  return (
    <div className="space-y-4">
      <FileDropZone accept=".pdf,application/pdf" multiple emoji="📄" label="Drop PDF files here" hint="You can select multiple PDFs at once" onFiles={handleFiles} />
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-white/50">{files.length} file{files.length>1?"s":""} selected — drag to reorder</p>
          {files.map((f,i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <button onClick={()=>moveUp(i)} disabled={i===0} className="text-white/30 hover:text-white disabled:opacity-20 text-xs px-1">↑</button>
              <span className="text-white/40 text-xs w-5">{i+1}</span>
              <span className="text-sm flex-1 truncate">{f.name}</span>
              <span className="text-white/30 text-xs">{formatBytes(f.size)}</span>
              <button onClick={()=>removeFile(i)} className="text-white/30 hover:text-red-400 text-xs">✕</button>
            </div>
          ))}
        </div>
      )}
      {status==="processing" && <ProgressBar progress={progress} label="Merging PDFs..." />}
      {status==="done" && (
        <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-3">
          <p className="text-green-400 font-semibold">✅ PDFs merged successfully!</p>
          <div className="flex gap-3">
            <button onClick={download} className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium text-sm transition-colors">⬇️ Download Merged PDF</button>
            <button onClick={reset} className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm">New</button>
          </div>
        </div>
      )}
      {status==="error" && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">❌ Failed to merge. Make sure all files are valid PDFs.</div>}
      {status==="idle" && files.length >= 2 && (
        <button onClick={merge} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition-colors">🔗 Merge {files.length} PDFs</button>
      )}
      {files.length === 1 && <p className="text-center text-white/40 text-sm">Add at least one more PDF to merge</p>}
    </div>
  );
}
