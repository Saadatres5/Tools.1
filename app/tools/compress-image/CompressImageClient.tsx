
"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
function fmt(b:number){return b<1048576?(b/1024).toFixed(1)+" KB":(b/1048576).toFixed(2)+" MB";}
export default function CompressImageClient() {
  const [file,setFile]=useState<File|null>(null);
  const [quality,setQuality]=useState(80);
  const [result,setResult]=useState<{url:string;size:number;orig:number}|null>(null);
  const handleFile=(files:File[])=>{setFile(files[0]);setResult(null);};
  const compress=()=>{
    if(!file)return;
    const img=new Image();
    img.onload=()=>{
      const c=document.createElement("canvas");c.width=img.width;c.height=img.height;
      c.getContext("2d")!.drawImage(img,0,0);
      c.toBlob(blob=>{if(!blob)return;setResult({url:URL.createObjectURL(blob),size:blob.size,orig:file.size});},file.type.includes("png")?"image/png":"image/jpeg",quality/100);
    };
    img.src=URL.createObjectURL(file);
  };
  const download=()=>{if(!result)return;const a=document.createElement("a");a.href=result.url;a.download=`compressed_${file?.name}`;a.click();};
  const reset=()=>{setFile(null);setResult(null);};
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept="image/*" emoji="📦" label="Drop your image here" onFiles={handleFile}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-medium text-sm">{file.name} — {fmt(file.size)}</p>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm">✕</button>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex justify-between mb-2"><label className="text-sm text-white/60">Quality</label><span className="text-blue-400 font-medium">{quality}%</span></div>
            <input type="range" min={10} max={100} value={quality} onChange={e=>setQuality(+e.target.value)} className="w-full accent-blue-500"/>
          </div>
          {result?(
            <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-3">
              <p className="text-green-400 font-semibold">✅ Compressed!</p>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="p-3 rounded-xl bg-white/5"><p className="text-white/40 text-xs">Original</p><p className="font-semibold">{fmt(result.orig)}</p></div>
                <div className="p-3 rounded-xl bg-white/5"><p className="text-white/40 text-xs">Compressed</p><p className="font-semibold text-green-400">{fmt(result.size)}</p></div>
                <div className="p-3 rounded-xl bg-white/5"><p className="text-white/40 text-xs">Saved</p><p className="font-semibold text-blue-400">{Math.round((1-result.size/result.orig)*100)}%</p></div>
              </div>
              <div className="flex gap-3"><button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download</button>
              <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button></div>
            </div>
          ):<button onClick={compress} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">📦 Compress Image</button>}
        </div>
      )}
    </div>
  );
}
