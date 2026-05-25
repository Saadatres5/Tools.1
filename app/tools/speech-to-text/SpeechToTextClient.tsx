"use client";
import { useState, useRef } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
export default function SpeechToTextClient() {
  const [mode,setMode]=useState<"file"|"mic">("mic");
  const [transcript,setTranscript]=useState("");
  const [listening,setListening]=useState(false);
  const [file,setFile]=useState<File|null>(null);
  const [error,setError]=useState("");
  const recRef=useRef<SpeechRecognition|null>(null);
  const startMic=()=>{
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){setError("Speech recognition not supported in this browser. Try Chrome.");return;}
    const rec=new SR();rec.continuous=true;rec.interimResults=true;rec.lang="en-US";
    rec.onresult=(e:SpeechRecognitionEvent)=>{
      let t="";for(let i=e.resultIndex;i<e.results.length;i++)t+=e.results[i][0].transcript;
      setTranscript(p=>p+t);
    };
    rec.onerror=()=>{setError("Mic error. Please allow microphone access.");setListening(false);};
    rec.start();recRef.current=rec;setListening(true);setError("");
  };
  const stopMic=()=>{recRef.current?.stop();setListening(false);};
  const copy=()=>navigator.clipboard.writeText(transcript);
  const clear=()=>{setTranscript("");setFile(null);};
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {[["mic","🎤 Microphone"],["file","📁 Audio File"]].map(([v,l])=>(
          <button key={v} onClick={()=>setMode(v as "file"|"mic")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${mode===v?"bg-blue-600":"bg-gray-50 hover:bg-gray-100"}`}>{l}</button>
        ))}
      </div>
      {mode==="mic"?(
        <div className="text-center space-y-4 py-6">
          <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center text-4xl transition-all ${listening?"bg-red-500/20 border-2 border-red-500 animate-pulse":"bg-gray-50 border-2 border-gray-200"}`}>
            🎤
          </div>
          <button onClick={listening?stopMic:startMic} className={`px-8 py-3 rounded-xl font-semibold transition-colors ${listening?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`}>
            {listening?"⏹ Stop Recording":"▶ Start Recording"}
          </button>
          {listening&&<p className="text-gray-400 text-sm animate-pulse">Listening... speak now</p>}
        </div>
      ):(
        <div>
          {!file?<FileDropZone accept="audio/*" emoji="🎵" label="Drop audio file here" hint="MP3, WAV, M4A, OGG supported" onFiles={f=>setFile(f[0])}/>:
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
            <p className="text-sm">{file.name}</p>
            <audio controls src={URL.createObjectURL(file)} className="w-full"/>
            <p className="text-xs text-gray-400">Use microphone mode for real-time transcription. File-based AI transcription requires a backend service.</p>
          </div>}
        </div>
      )}
      {error&&<p className="text-red-600 text-sm bg-red-50 p-3 rounded-xl">{error}</p>}
      {transcript&&(
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-gray-400">Transcript ({transcript.split(" ").length} words)</label>
            <div className="flex gap-3"><button onClick={copy} className="text-xs text-blue-600">Copy</button><button onClick={clear} className="text-xs text-gray-400">Clear</button></div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-800/80 leading-relaxed min-h-24">{transcript}</div>
        </div>
      )}
    </div>
  );
}
