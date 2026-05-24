"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";

export default function ResizeImageClient() {
  const [file, setFile] = useState<File|null>(null);
  const [preview, setPreview] = useState("");
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [lock, setLock] = useState(true);
  const [origW, setOrigW] = useState(0);
  const [origH, setOrigH] = useState(0);
  const [result, setResult] = useState("");

  const handleFile = (files: File[]) => {
    const f = files[0]; setFile(f); setResult("");
    const url = URL.createObjectURL(f); setPreview(url);
    const img = new Image();
    img.onload = () => { setOrigW(img.width); setOrigH(img.height); setW(String(img.width)); setH(String(img.height)); };
    img.src = url;
  };

  const updateW = (v: string) => { setW(v); if (lock && origW && origH) setH(String(Math.round(+v*origH/origW))); };
  const updateH = (v: string) => { setH(v); if (lock && origW && origH) setW(String(Math.round(+v*origW/origH))); };

  const resize = () => {
    if (!file || !w || !h) return;
    const canvas = document.createElement("canvas"); canvas.width=+w; canvas.height=+h;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.onload = () => { ctx.drawImage(img,0,0,+w,+h); setResult(canvas.toDataURL("image/jpeg",0.92)); };
    img.src = URL.createObjectURL(file);
  };

  const download = () => {
    const a = document.createElement("a"); a.href=result; a.download=`resized_${file?.name||"image.jpg"}`; a.click();
  };
  const reset = () => { setFile(null); setPreview(""); setResult(""); setW(""); setH(""); };

  return (
    <div className="space-y-4">
      {!file ? (
        <FileDropZone accept="image/*" emoji="📐" label="Drop your image here" onFiles={handleFile}/>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-4">
            {preview && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={preview} alt="preview" className="w-32 h-24 object-contain rounded-xl bg-white/5"/>
            )}
            <div><p className="font-medium text-sm">{file.name}</p><p className="text-white/40 text-xs">{origW}×{origH}px</p></div>
            <button onClick={reset} className="ml-auto text-white/30 hover:text-white/60 text-sm">✕</button>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <label className="block text-xs text-white/50 mb-1">Width (px)</label>
              <input type="number" value={w} onChange={e=>updateW(e.target.value)} className="w-28 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none"/>
            </div>
            <button onClick={() => setLock(l=>!l)} className={`mt-5 p-2 rounded-lg transition-colors ${lock?"bg-blue-600":"bg-white/5"}`} title="Lock aspect ratio">
              {lock?"🔒":"🔓"}
            </button>
            <div>
              <label className="block text-xs text-white/50 mb-1">Height (px)</label>
              <input type="number" value={h} onChange={e=>updateH(e.target.value)} className="w-28 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none"/>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {[[640,480],[800,600],[1280,720],[1920,1080],[1080,1080]].map(([pw,ph]) => (
              <button key={pw} onClick={() => { setW(String(pw)); setH(String(ph)); }}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/50">{pw}×{ph}</button>
            ))}
          </div>
          {result ? (
            <div className="space-y-3">
              <p className="text-green-400 text-sm font-semibold">✅ Resized to {w}×{h}px</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result} alt="resized" className="max-h-48 rounded-xl object-contain"/>
              <div className="flex gap-3">
                <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download</button>
                <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button>
              </div>
            </div>
          ) : (
            <button onClick={resize} disabled={!w||!h} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm">Resize Image</button>
          )}
        </div>
      )}
    </div>
  );
}
