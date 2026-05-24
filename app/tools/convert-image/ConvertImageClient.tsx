"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
export default function ConvertImageClient() {
  const [file,setFile]=useState<File|null>(null);
  const [format,setFormat]=useState<"image/jpeg"|"image/png"|"image/webp">("image/png");
  const [quality,setQuality]=useState(92);
  const [result,setResult]=useState("");
  const [size,setSize]=useState(0);
  const FORMATS=[["JPEG","image/jpeg",".jpg"],["PNG","image/png",".png"],["WebP","image/webp",".webp"]];
  const convert=()=>{
    if(!file)return;
    const img=new Image();
    img.onload=()=>{
      const c=document.createElement("canvas");c.width=img.width;c.height=img.height;
      c.getContext("2d")!.drawImage(img,0,0);
      c.toBlob(blob=>{if(!blob)return;setSize(blob.size);setResult(URL.createObjectURL(blob));},format,quality/100);
    };
    img.src=URL.createObjectURL(file);
  };
  const download=()=>{
    const ext=FORMATS.find(([,f])=>f===format)?.[2]||".jpg";
    const a=document.createElement("a");a.href=result;a.download=file!.name.replace(/\.[^.]+$/,"")+ext;a.click();
  };
  const reset=()=>{setFile(null);setResult("");};
  const fmt=(b:number)=>b<1048576?(b/1024).toFixed(1)+" KB":(b/1048576).toFixed(2)+" MB";
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept="image/*" emoji="🔄" label="Drop your image here" onFiles={f=>{setFile(f[0]);setResult("");}}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div><p className="font-medium text-sm">{file.name}</p><p className="text-xs text-white/40">{fmt(file.size)}</p></div>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm">✕</button>
          </div>
          <div><label className="block text-xs text-white/50 mb-2">Convert to</label>
            <div className="flex gap-2">
              {FORMATS.map(([l,v])=>(
                <button key={v} onClick={()=>setFormat(v as typeof format)} className={`flex-1 py-2 rounded-xl text-sm transition-colors ${format===v?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>{l}</button>
              ))}
            </div>
          </div>
          {format!=="image/png"&&<div><div className="flex justify-between mb-1"><label className="text-xs text-white/50">Quality</label><span className="text-xs text-blue-400">{quality}%</span></div>
            <input type="range" min={10} max={100} value={quality} onChange={e=>setQuality(+e.target.value)} className="w-full accent-blue-500"/></div>}
          {result?(
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-3">
              <p className="text-green-400 font-semibold">✅ Converted! New size: {fmt(size)}</p>
              <div className="flex gap-3"><button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download</button>
              <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button></div>
            </div>
          ):<button onClick={convert} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">🔄 Convert Image</button>}
        </div>
      )}
    </div>
  );
}
