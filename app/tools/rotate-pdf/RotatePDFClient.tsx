"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";
export default function RotatePDFClient() {
  const [file,setFile]=useState<File|null>(null);
  const [angle,setAngle]=useState<90|180|270>(90);
  const [status,setStatus]=useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress,setProgress]=useState(0);
  const [resultUrl,setResultUrl]=useState("");
  const rotate=async()=>{
    if(!file)return;
    setStatus("processing");setProgress(20);
    try{
      const {PDFDocument,degrees}=await import("pdf-lib");
      const doc=await PDFDocument.load(await file.arrayBuffer());
      setProgress(50);
      doc.getPages().forEach(p=>p.setRotation(degrees(angle)));
      setProgress(80);
      const bytes=await doc.save();
      setResultUrl(URL.createObjectURL(new Blob([new Uint8Array(bytes)],{type:"application/pdf"})));
      setStatus("done");setProgress(100);
    }catch{setStatus("error");}
  };
  const download=()=>{const a=document.createElement("a");a.href=resultUrl;a.download=`rotated_${file?.name}`;a.click();};
  const reset=()=>{setFile(null);setResultUrl("");setStatus("idle");setProgress(0);};
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept=".pdf,application/pdf" emoji="🔄" label="Drop your PDF here" onFiles={f=>{setFile(f[0]);setStatus("idle");}}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={reset} className="text-gray-400 hover:text-gray-8000 text-sm">✕</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {([90,180,270] as const).map(a=>(
              <button key={a} onClick={()=>setAngle(a)} className={`py-4 rounded-2xl text-center transition-colors border ${angle===a?"bg-blue-600 border-blue-500":"bg-gray-50 border-gray-200 hover:bg-gray-100"}`}>
                <div className="text-2xl mb-1" style={{display:"inline-block",transform:`rotate(${a}deg)`}}>📄</div>
                <div className="text-sm font-medium">{a}°</div>
              </button>
            ))}
          </div>
          {status==="processing"&&<ProgressBar progress={progress} label="Rotating pages..."/>}
          {status==="done"&&<div className="p-4 rounded-2xl bg-green-50 border border-green-200 space-y-3">
            <p className="text-emerald-700 font-semibold">✅ Rotated {angle}°!</p>
            <div className="flex gap-3">
              <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download</button>
              <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-gray-50 text-sm">New</button>
            </div>
          </div>}
          {status==="error"&&<div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">❌ Failed to rotate.</div>}
          {status==="idle"&&<button onClick={rotate} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm">🔄 Rotate PDF</button>}
        </div>
      )}
    </div>
  );
}
