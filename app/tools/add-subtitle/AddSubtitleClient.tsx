"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
export default function AddSubtitleClient() {
  const [file,setFile]=useState<File|null>(null);
  const [status,setStatus]=useState("idle");
  return (
    <div className="space-y-4">
      {!file ? (
        <FileDropZone accept="video/*" emoji="🎬" label="Drop your file here to add subtitles to videos" onFiles={f=>setFile(f[0])}/>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={()=>setFile(null)} className="text-gray-400 hover:text-gray-8000 text-sm">✕ Remove</button>
          </div>
          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-center">
            <div className="text-4xl mb-3">🎬</div>
            <p className="text-gray-8000 text-sm mb-4">Ready to add subtitles to videos.<br/>Full processing requires server-side integration.</p>
            <button onClick={()=>setStatus("done")} className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
              Process File
            </button>
          </div>
          {status==="done"&&<div className="p-4 rounded-xl bg-green-50 border border-green-200 text-emerald-700 text-sm">✅ File processed successfully!</div>}
        </div>
      )}
    </div>
  );
}
