
"use client";
import { useState, useRef } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
export default function TrimVideoClient() {
  const [file,setFile]=useState<File|null>(null);
  const [url,setUrl]=useState("");
  const [start,setStart]=useState("0");
  const [end,setEnd]=useState("10");
  const [duration,setDuration]=useState(0);
  const videoRef=useRef<HTMLVideoElement>(null);
  const handleFile=(files:File[])=>{
    const f=files[0];setFile(f);
    const u=URL.createObjectURL(f);setUrl(u);
  };
  const onLoad=()=>{if(videoRef.current){const d=videoRef.current.duration;setDuration(d);setEnd(Math.min(10,d).toFixed(1));}};
  const fmt=(s:number)=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
  const reset=()=>{setFile(null);setUrl("");setStart("0");setEnd("10");setDuration(0);};
  return (
    <div className="space-y-4">
      {!file?<FileDropZone accept="video/*" emoji="🎬" label="Drop your video here" hint="MP4, MOV, AVI, WEBM supported" onFiles={handleFile}/>:(
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm ml-3">✕</button>
          </div>
          <video ref={videoRef} src={url} controls onLoadedMetadata={onLoad} className="w-full rounded-xl bg-black max-h-48"/>
          {duration>0&&(
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <p className="text-xs text-white/40">Duration: {fmt(duration)} • Set trim points below</p>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs text-white/50 mb-1">Start time (seconds)</label>
                  <input type="number" value={start} min="0" max={duration} step="0.1" onChange={e=>setStart(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none"/></div>
                <div><label className="block text-xs text-white/50 mb-1">End time (seconds)</label>
                  <input type="number" value={end} min="0" max={duration} step="0.1" onChange={e=>setEnd(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none"/></div>
              </div>
              <p className="text-xs text-white/30">⚠️ Browser-based video trimming is limited. For full FFmpeg processing, a server-side tool is required. You can preview the trim range above using the video controls.</p>
              <button onClick={()=>{if(videoRef.current){videoRef.current.currentTime=+start;videoRef.current.play();}}} className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
                ▶ Preview from {fmt(+start)}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
