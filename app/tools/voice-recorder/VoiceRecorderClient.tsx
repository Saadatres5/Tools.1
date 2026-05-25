"use client";
import { useState, useRef } from "react";
export default function VoiceRecorderClient() {
  const [recording,setRecording]=useState(false);
  const [recordings,setRecordings]=useState<{url:string;name:string;duration:number}[]>([]);
  const [duration,setDuration]=useState(0);
  const [error,setError]=useState("");
  const mediaRef=useRef<MediaRecorder|null>(null);
  const chunksRef=useRef<Blob[]>([]);
  const timerRef=useRef<NodeJS.Timeout | undefined>(undefined);
  const start=async()=>{
    try{
      const stream=await navigator.mediaDevices.getUserMedia({audio:true});
      const rec=new MediaRecorder(stream);
      chunksRef.current=[];
      rec.ondataavailable=(e)=>chunksRef.current.push(e.data);
      rec.onstop=()=>{
        const blob=new Blob(chunksRef.current,{type:"audio/webm"});
        const url=URL.createObjectURL(blob);
        const d=duration;
        setRecordings(r=>[{url,name:`Recording ${r.length+1} (${d}s)`,duration:d},...r]);
        stream.getTracks().forEach(t=>t.stop());
        setDuration(0);
      };
      rec.start();mediaRef.current=rec;setRecording(true);setError("");
      timerRef.current=setInterval(()=>setDuration(d=>d+1),1000);
    }catch{setError("Cannot access microphone. Please allow microphone permission.");}
  };
  const stop=()=>{
    mediaRef.current?.stop();clearInterval(timerRef.current);setRecording(false);
  };
  const dl=(url:string,name:string)=>{const a=document.createElement("a");a.href=url;a.download=name+".webm";a.click();};
  const fmt=(s:number)=>`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  return (
    <div className="space-y-5">
      <div className="text-center py-8 space-y-4">
        <div className={`w-28 h-28 rounded-full mx-auto flex flex-col items-center justify-center transition-all ${recording?"bg-red-500/20 border-2 border-red-500":"bg-gray-50 border-2 border-gray-200"}`}>
          <span className="text-4xl">🎙️</span>
          {recording&&<span className="text-red-600 font-mono text-sm mt-1">{fmt(duration)}</span>}
        </div>
        {error&&<p className="text-red-600 text-sm">{error}</p>}
        <button onClick={recording?stop:start} className={`px-8 py-3 rounded-xl font-semibold transition-colors ${recording?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`}>
          {recording?"⏹ Stop Recording":"🎙️ Start Recording"}
        </button>
        {recording&&<p className="text-gray-400 text-sm animate-pulse">Recording in progress...</p>}
      </div>
      {recordings.length>0&&(
        <div className="space-y-2">
          <p className="text-sm text-gray-8000 font-medium">Recordings</p>
          {recordings.map((r,i)=>(
            <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">{r.name}</span>
                <button onClick={()=>dl(r.url,r.name)} className="text-xs text-blue-600 hover:text-blue-300">⬇️ Download</button>
              </div>
              <audio controls src={r.url} className="w-full h-8"/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
