
"use client";
import { useState, useRef } from "react";
export default function WebcamRecorderClient() {
  const [recording,setRecording]=useState(false);
  const [previewing,setPreviewing]=useState(false);
  const [videos,setVideos]=useState<{url:string;name:string}[]>([]);
  const [error,setError]=useState("");
  const [duration,setDuration]=useState(0);
  const videoRef=useRef<HTMLVideoElement>(null);
  const mediaRef=useRef<MediaRecorder|null>(null);
  const chunksRef=useRef<Blob[]>([]);
  const timerRef=useRef<NodeJS.Timeout>();
  const streamRef=useRef<MediaStream|null>(null);
  const startPreview=async()=>{
    try{
      const s=await navigator.mediaDevices.getUserMedia({video:true,audio:true});
      streamRef.current=s;
      if(videoRef.current){videoRef.current.srcObject=s;videoRef.current.play();}
      setPreviewing(true);setError("");
    }catch{setError("Cannot access camera. Please allow camera permission.");}
  };
  const startRec=()=>{
    if(!streamRef.current)return;
    const rec=new MediaRecorder(streamRef.current);
    chunksRef.current=[];
    rec.ondataavailable=(e)=>chunksRef.current.push(e.data);
    rec.onstop=()=>{
      const blob=new Blob(chunksRef.current,{type:"video/webm"});
      const url=URL.createObjectURL(blob);
      setVideos(v=>[{url,name:`Webcam ${v.length+1}`},...v]);
      setDuration(0);
    };
    rec.start();mediaRef.current=rec;setRecording(true);
    timerRef.current=setInterval(()=>setDuration(d=>d+1),1000);
  };
  const stopRec=()=>{mediaRef.current?.stop();clearInterval(timerRef.current);setRecording(false);};
  const stopAll=()=>{stopRec();streamRef.current?.getTracks().forEach(t=>t.stop());setPreviewing(false);setRecording(false);};
  const dl=(url:string,name:string)=>{const a=document.createElement("a");a.href=url;a.download=name+".webm";a.click();};
  const fmt=(s:number)=>`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  return (
    <div className="space-y-4">
      {error&&<p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">{error}</p>}
      {!previewing?(
        <div className="text-center py-10 space-y-4">
          <div className="text-6xl">📹</div>
          <button onClick={startPreview} className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition-colors">📹 Start Camera</button>
        </div>
      ):(
        <div className="space-y-3">
          <div className="relative rounded-xl overflow-hidden bg-black">
            <video ref={videoRef} muted className="w-full max-h-56 object-cover"/>
            {recording&&<div className="absolute top-3 left-3 flex items-center gap-2 bg-red-600 px-2 py-1 rounded-lg text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"/>REC {fmt(duration)}
            </div>}
          </div>
          <div className="flex gap-3">
            {!recording?<button onClick={startRec} className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 font-medium text-sm transition-colors">● Start Recording</button>:
            <button onClick={stopRec} className="flex-1 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 font-medium text-sm">⏹ Stop Recording</button>}
            <button onClick={stopAll} className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm">✕ Close</button>
          </div>
        </div>
      )}
      {videos.length>0&&(
        <div className="space-y-2">
          <p className="text-sm text-white/50 font-medium">Recorded Videos</p>
          {videos.map((v,i)=>(
            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/8 space-y-2">
              <div className="flex justify-between"><span className="text-sm">{v.name}</span>
                <button onClick={()=>dl(v.url,v.name)} className="text-xs text-blue-400">⬇️ Download</button></div>
              <video controls src={v.url} className="w-full rounded-lg max-h-28"/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
