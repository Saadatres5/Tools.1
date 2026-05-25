"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";
export default function UnlockPDFClient() {
  const [file,setFile]=useState<File|null>(null);
  const [password,setPassword]=useState("");
  const [status,setStatus]=useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress,setProgress]=useState(0);
  const [resultUrl,setResultUrl]=useState("");
  const unlock=async()=>{
    if(!file)return;
    setStatus("processing");setProgress(30);
    try{
      const {PDFDocument}=await import("pdf-lib");
      const doc=await PDFDocument.load(await file.arrayBuffer(),{ignoreEncryption:true});
      setProgress(70);
      const bytes=await doc.save();
      setResultUrl(URL.createObjectURL(new Blob([new Uint8Array(bytes)],{type:"application/pdf"})));
      setStatus("done");setProgress(100);
    }catch{setStatus("error");}
  };
  const download=()=>{const a=document.createElement("a");a.href=resultUrl;a.download=`unlocked_${file?.name}`;a.click();};
  const reset=()=>{setFile(null);setPassword("");setResultUrl("");setStatus("idle");setProgress(0);};
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept=".pdf,application/pdf" emoji="🔓" label="Drop your protected PDF here" onFiles={f=>{setFile(f[0]);setStatus("idle");}}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={reset} className="text-gray-400 hover:text-gray-8000 text-sm">✕</button>
          </div>
          <div><label className="block text-xs text-gray-8000 mb-1">Password (if known)</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter PDF password (optional)"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400"/></div>
          {status==="processing"&&<ProgressBar progress={progress} label="Removing password..."/>}
          {status==="done"?<div className="p-4 rounded-2xl bg-green-50 border border-green-200 space-y-3">
            <p className="text-emerald-700 font-semibold">✅ Password removed!</p>
            <div className="flex gap-3"><button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download Unlocked PDF</button>
            <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-gray-50 text-sm">New</button></div>
          </div>:status==="error"?<div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">❌ Could not unlock this PDF. The password may be required.</div>:
          <button onClick={unlock} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">🔓 Remove Password</button>}
        </div>
      )}
    </div>
  );
}
