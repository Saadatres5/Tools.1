
"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";
export default function JPGToPDFClient() {
  const [files,setFiles]=useState<File[]>([]);
  const [status,setStatus]=useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress,setProgress]=useState(0);
  const [resultUrl,setResultUrl]=useState("");
  const handleFiles=(f:File[])=>setFiles(p=>[...p,...f]);
  const remove=(i:number)=>setFiles(f=>f.filter((_,idx)=>idx!==i));
  const convert=async()=>{
    if(!files.length)return;
    setStatus("processing");setProgress(10);
    try{
      const {PDFDocument}=await import("pdf-lib");
      const doc=await PDFDocument.create();
      for(let i=0;i<files.length;i++){
        const buf=await files[i].arrayBuffer();
        const isJpg=files[i].type==="image/jpeg";
        const img=isJpg?await doc.embedJpg(buf):await doc.embedPng(buf);
        const page=doc.addPage([img.width,img.height]);
        page.drawImage(img,{x:0,y:0,width:img.width,height:img.height});
        setProgress(10+(i+1)/files.length*80);
      }
      const bytes=await doc.save();
      setResultUrl(URL.createObjectURL(new Blob([new Uint8Array(bytes)],{type:"application/pdf"})));
      setStatus("done");setProgress(100);
    }catch{setStatus("error");}
  };
  const download=()=>{const a=document.createElement("a");a.href=resultUrl;a.download="images.pdf";a.click();};
  const reset=()=>{setFiles([]);setResultUrl("");setStatus("idle");setProgress(0);};
  return (
    <div className="space-y-4">
      <FileDropZone accept="image/*" multiple emoji="🖼️" label="Drop images here" hint="JPG, PNG, WEBP supported • Multiple files allowed" onFiles={handleFiles}/>
      {files.length>0&&(
        <div className="space-y-2">
          {files.map((f,i)=>(
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
              <span className="text-sm flex-1 truncate">{f.name}</span>
              <button onClick={()=>remove(i)} className="text-white/30 hover:text-red-400 text-xs">✕</button>
            </div>
          ))}
        </div>
      )}
      {status==="processing"&&<ProgressBar progress={progress} label="Creating PDF..."/>}
      {status==="done"?<div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-3">
        <p className="text-green-400 font-semibold">✅ PDF created from {files.length} image{files.length>1?"s":""}!</p>
        <div className="flex gap-3"><button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download PDF</button>
        <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button></div>
      </div>:status==="error"?<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">❌ Conversion failed.</div>:
      files.length>0?<button onClick={convert} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">📄 Create PDF</button>:null}
    </div>
  );
}
