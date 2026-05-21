
"use client";
import { useState, useRef } from "react";

export default function ScreenRecorderClient() {
  const [recording, setRecording] = useState(false);
  const [recordings, setRecordings] = useState<{url:string;name:string}[]>([]);
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(0);
  const mediaRef = useRef<MediaRecorder|null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
        ? "video/webm;codecs=vp9" : "video/webm";
      const rec = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      rec.ondataavailable = (e) => chunksRef.current.push(e.data);
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setRecordings(r => [{ url, name: `Screen Recording ${r.length+1}` }, ...r]);
        stream.getTracks().forEach(t => t.stop());
        setDuration(0);
      };
      stream.getVideoTracks()[0].onended = () => {
        rec.stop(); clearInterval(timerRef.current); setRecording(false);
      };
      rec.start(); mediaRef.current = rec; setRecording(true); setError("");
      timerRef.current = setInterval(() => setDuration(d => d+1), 1000);
    } catch {
      setError("Could not start screen recording. Please allow screen share permission.");
    }
  };

  const stop = () => { mediaRef.current?.stop(); clearInterval(timerRef.current); setRecording(false); };
  const dl = (url: string, name: string) => { const a=document.createElement("a"); a.href=url; a.download=name+".webm"; a.click(); };
  const fmt = (s: number) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

  return (
    <div className="space-y-5">
      <div className="text-center py-8 space-y-4">
        <div className={`w-28 h-28 rounded-2xl mx-auto flex flex-col items-center justify-center transition-all ${recording?"bg-red-500/20 border-2 border-red-500":"bg-white/5 border-2 border-white/20"}`}>
          <span className="text-4xl">🖥️</span>
          {recording && <span className="text-red-400 font-mono text-sm mt-1">{fmt(duration)}</span>}
        </div>
        {error && <p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">{error}</p>}
        <button onClick={recording?stop:start}
          className={`px-8 py-3 rounded-xl font-semibold transition-colors ${recording?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`}>
          {recording?"⏹ Stop Recording":"🖥️ Start Screen Recording"}
        </button>
        {recording && <p className="text-red-400 text-sm animate-pulse">● Recording screen...</p>}
        {!recording && <p className="text-white/30 text-xs">Choose to share your screen, a window, or a browser tab</p>}
      </div>
      {recordings.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-white/50 font-medium">Recorded Videos</p>
          {recordings.map((r,i) => (
            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/8 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">{r.name}</span>
                <button onClick={() => dl(r.url,r.name)} className="text-xs text-blue-400 hover:text-blue-300">⬇️ Download</button>
              </div>
              <video controls src={r.url} className="w-full rounded-lg max-h-32"/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
