"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";
export default function WatermarkPDFClient() {
  const [file,setFile]=useState<File|null>(null);
  const [text,setText]=useState("CONFIDENTIAL");
  const [opacity,setOpacity]=useState(30);
  const [status,setStatus]=useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress,setProgress]=useState(0);
  const [resultUrl,setResultUrl]=useState("");
  const watermark=async()=>{
    if(!file||!text)return;
    setStatus("processing");setProgress(20);
    try{
      const {PDFDocument,rgb,StandardFonts,degrees}=await import("pdf-lib");
      const doc=await PDFDocument.load(await file.arrayBuffer(),{ignoreEncryption:true});
      const font=await doc.embedFont(StandardFonts.HelveticaBold);
      setProgress(50);
      doc.getPages().forEach(page=>{
        const{width,height}=page.getSize();
        const fontSize=Math.min(width,height)*0.1;
        const textW=font.widthOfTextAtSize(text,fontSize);
        page.drawText(text,{x:(width-textW)/2,y:height/2,size:fontSize,font,color:rgb(0.5,0.5,0.5),opacity:opacity/100,rotate:degrees(45)});
      });
      setProgress(80);
      const bytes=await doc.save();
      setResultUrl(URL.createObjectURL(new Blob([new Uint8Array(bytes)],{type:"application/pdf"})));
      setStatus("done");setProgress(100);
    }catch{setStatus("error");}
  };
  const download=()=>{const a=document.createElement("a");a.href=resultUrl;a.download=`watermarked_${file?.name}`;a.click();};
  const reset=()=>{setFile(null);setResultUrl("");setStatus("idle");setProgress(0);};
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept=".pdf,application/pdf" emoji="💧" label="Drop your PDF here" onFiles={f=>{setFile(f[0]);setStatus("idle");}}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={reset} className="text-gray-400 hover:text-gray-8000 text-sm">✕</button>
          </div>
          <div><label className="block text-xs text-gray-8000 mb-1">Watermark Text</label>
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="e.g. CONFIDENTIAL, DRAFT, Company Name"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400"/></div>
          <div><div className="flex justify-between mb-1"><label className="text-sm text-gray-8000">Opacity</label><span className="text-blue-600 text-sm font-medium">{opacity}%</span></div>
            <input type="range" min={5} max={80} value={opacity} onChange={e=>setOpacity(+e.target.value)} className="w-full accent-blue-500"/></div>
          {status==="processing"&&<ProgressBar progress={progress} label="Adding watermark..."/>}
          {status==="done"?<div className="p-4 rounded-2xl bg-green-50 border border-green-200 space-y-3">
            <p className="text-emerald-700 font-semibold">✅ Watermark added!</p>
            <div className="flex gap-3"><button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download</button>
            <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-gray-50 text-sm">New</button></div>
          </div>:status==="error"?<div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">❌ Failed to add watermark.</div>:
          <button onClick={watermark} disabled={!text} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">💧 Add Watermark</button>}
        </div>
      )}
    </div>
  );
}
