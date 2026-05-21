
"use client";
import { useState, useRef } from "react";
import FileDropZone from "@/components/tools/FileDropZone";

export default function MemeGeneratorClient() {
  const [imgSrc, setImgSrc] = useState("");
  const [top, setTop] = useState("TOP TEXT");
  const [bottom, setBottom] = useState("BOTTOM TEXT");
  const [fontSize, setFontSize] = useState(48);
  const [result, setResult] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = (files: File[]) => setImgSrc(URL.createObjectURL(files[0]));

  const generate = () => {
    if (!imgSrc) return;
    const img = new Image();
    img.onload = () => {
      const c = canvasRef.current!;
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      ctx.font = `bold ${fontSize}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillStyle = "white"; ctx.strokeStyle = "black"; ctx.lineWidth = fontSize/8;
      if (top) { ctx.strokeText(top.toUpperCase(),c.width/2,fontSize+10); ctx.fillText(top.toUpperCase(),c.width/2,fontSize+10); }
      if (bottom) { ctx.strokeText(bottom.toUpperCase(),c.width/2,c.height-20); ctx.fillText(bottom.toUpperCase(),c.width/2,c.height-20); }
      setResult(c.toDataURL("image/jpeg",0.95));
    };
    img.src = imgSrc;
  };

  const download = () => { const a=document.createElement("a"); a.href=result; a.download="meme.jpg"; a.click(); };

  return (
    <div className="space-y-4">
      {!imgSrc ? (
        <FileDropZone accept="image/*" emoji="🖼️" label="Upload your image" hint="JPG, PNG, WEBP supported" onFiles={handleFile}/>
      ) : (
        <div className="space-y-3">
          <canvas ref={canvasRef} className="hidden"/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt="Meme base" className="w-full rounded-xl max-h-48 object-contain bg-black"/>
          {[["Top text",top,setTop],["Bottom text",bottom,setBottom]].map(([l,v,s]) => (
            <div key={l as string}>
              <label className="block text-xs text-white/50 mb-1">{l as string}</label>
              <input value={v as string} onChange={e=>(s as (v:string)=>void)(e.target.value)}
                placeholder={l as string}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500/50 uppercase"/>
            </div>
          ))}
          <div>
            <div className="flex justify-between mb-1"><label className="text-xs text-white/50">Font size</label><span className="text-xs text-blue-400">{fontSize}px</span></div>
            <input type="range" min={20} max={100} value={fontSize} onChange={e=>setFontSize(+e.target.value)} className="w-full accent-blue-500"/>
          </div>
          <button onClick={generate} className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">😂 Generate Meme</button>
          {result && (
            <div className="space-y-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result} alt="Generated meme" className="w-full rounded-xl"/>
              <div className="flex gap-2">
                <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-sm font-medium">⬇️ Download</button>
                <button onClick={()=>{setImgSrc("");setResult("");}} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
