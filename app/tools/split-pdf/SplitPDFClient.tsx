
"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";
function fmt(b:number){return b<1048576?(b/1024).toFixed(1)+" KB":(b/1048576).toFixed(2)+" MB";}
export default function SplitPDFClient() {
  const [file,setFile]=useState<File|null>(null);
  const [pages,setPages]=useState(0);
  const [mode,setMode]=useState<"all"|"range">("all");
  const [range,setRange]=useState("");
  const [status,setStatus]=useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress,setProgress]=useState(0);
  const [results,setResults]=useState<{url:string;name:string;pages:number}[]>([]);
  const handleFile=async(files:File[])=>{
    const f=files[0];setFile(f);setStatus("idle");setResults([]);
    const {PDFDocument}=await import("pdf-lib");
    const doc=await PDFDocument.load(await f.arrayBuffer());
    setPages(doc.getPageCount());
  };
  const split=async()=>{
    if(!file)return;
    setStatus("processing");setProgress(10);
    try{
      const {PDFDocument}=await import("pdf-lib");
      const src=await PDFDocument.load(await file.arrayBuffer());
      const total=src.getPageCount();
      setProgress(30);
      let indices:number[][]=[];
      if(mode==="all"){indices=Array.from({length:total},(_,i)=>[i]);}
      else{
        const parts=range.split(",").map(s=>s.trim());
        for(const p of parts){
          if(p.includes("-")){const [a,b]=p.split("-").map(n=>parseInt(n)-1);for(let i=a;i<=Math.min(b,total-1);i++)indices.push([i]);}
          else{const n=parseInt(p)-1;if(n>=0&&n<total)indices.push([n]);}
        }
      }
      const out:typeof results=[];
      for(let i=0;i<indices.length;i++){
        const doc=await PDFDocument.create();
        const copied=await doc.copyPages(src,indices[i]);
        copied.forEach(p=>doc.addPage(p));
        const bytes=await doc.save();
        const blob=new Blob([bytes],{type:"application/pdf"});
        out.push({url:URL.createObjectURL(blob),name:`page_${indices[i].map(n=>n+1).join("-")}.pdf`,pages:indices[i].length});
        setProgress(30+((i+1)/indices.length)*60);
      }
      setResults(out);setStatus("done");setProgress(100);
    }catch{setStatus("error");}
  };
  const dlAll=()=>results.forEach(r=>{const a=document.createElement("a");a.href=r.url;a.download=r.name;a.click();});
  const reset=()=>{setFile(null);setPages(0);setResults([]);setStatus("idle");setProgress(0);};
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept=".pdf,application/pdf" emoji="✂️" label="Drop your PDF here" onFiles={handleFile}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div><p className="font-medium text-sm">{file.name}</p><p className="text-white/40 text-xs">{pages} pages • {fmt(file.size)}</p></div>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm">✕</button>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex gap-3">
              {[["all","Split every page"],["range","Custom range"]].map(([v,l])=>(
                <button key={v} onClick={()=>setMode(v as "all"|"range")} className={`flex-1 py-2 rounded-xl text-sm transition-colors ${mode===v?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>{l}</button>
              ))}
            </div>
            {mode==="range"&&<div>
              <label className="block text-xs text-white/50 mb-1">Page ranges (e.g. 1-3, 5, 7-9)</label>
              <input value={range} onChange={e=>setRange(e.target.value)} placeholder="1-3, 5, 7-9"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500/50"/>
            </div>}
          </div>
          {status==="processing"&&<ProgressBar progress={progress} label="Splitting PDF..."/>}
          {status==="done"&&results.length>0&&(
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-green-400 text-sm font-semibold">✅ Split into {results.length} file{results.length>1?"s":""}!</p>
                <button onClick={dlAll} className="text-xs text-blue-400 hover:text-blue-300">Download all</button>
              </div>
              <div className="space-y-2 max-h-48 overflow-auto">
                {results.map((r,i)=>(
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/8">
                    <span className="text-sm">📄 {r.name}</span>
                    <a href={r.url} download={r.name} className="text-xs text-blue-400 hover:text-blue-300">Download</a>
                  </div>
                ))}
              </div>
              <button onClick={reset} className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm">New File</button>
            </div>
          )}
          {status==="error"&&<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">❌ Failed to split PDF.</div>}
          {status==="idle"&&<button onClick={split} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">✂️ Split PDF</button>}
        </div>
      )}
    </div>
  );
}
