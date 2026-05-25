"use client";
import { useState, useRef } from "react";
import FileDropZone from "@/components/tools/FileDropZone";

export default function ColorPickerClient() {
  const [picked, setPicked] = useState("#3b82f6");
  const [palette, setPalette] = useState<string[]>([]);
  const [imgSrc, setImgSrc] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState("");

  const toRGB = (hex: string) => {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `rgb(${r},${g},${b})`;
  };
  const toHSL = (hex: string) => {
    const r = parseInt(hex.slice(1,3),16)/255;
    const g = parseInt(hex.slice(3,5),16)/255;
    const b = parseInt(hex.slice(5,7),16)/255;
    const max = Math.max(r,g,b), min = Math.min(r,g,b);
    let h = 0, s = 0;
    const l = (max+min)/2;
    if (max !== min) {
      const d = max-min;
      s = l > 0.5 ? d/(2-max-min) : d/(max+min);
      h = max===r ? (g-b)/d+(g<b?6:0) : max===g ? (b-r)/d+2 : (r-g)/d+4;
      h /= 6;
    }
    return `hsl(${Math.round(h*360)},${Math.round(s*100)}%,${Math.round(l*100)}%)`;
  };

  const handleImg = (files: File[]) => {
    const url = URL.createObjectURL(files[0]);
    setImgSrc(url);
  };

  const pickFromCanvas = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current; if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX-rect.left)*(canvas.width/rect.width));
    const y = Math.floor((e.clientY-rect.top)*(canvas.height/rect.height));
    const d = canvas.getContext("2d")!.getImageData(x,y,1,1).data;
    const hex = "#"+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,"0")).join("");
    setPicked(hex);
    setPalette(p=>[hex,...p.filter(c=>c!==hex)].slice(0,8));
  };

  const copy = (t: string) => {
    navigator.clipboard.writeText(t);
    setCopied(t);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <label className="block text-xs text-gray-8000 mb-1">Pick a color</label>
          <input type="color" value={picked}
            onChange={e => { setPicked(e.target.value); setPalette(p=>[e.target.value,...p.filter(c=>c!==e.target.value)].slice(0,8)); }}
            className="w-full h-16 rounded-xl border border-gray-200 cursor-pointer bg-transparent" />
        </div>
        <div className="space-y-2">
          {[["HEX", picked], ["RGB", toRGB(picked)], ["HSL", toHSL(picked)]].map(([l,v]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="text-xs text-gray-400 w-8">{l}</span>
              <code className="text-xs text-emerald-700 font-mono bg-gray-50 px-2 py-1 rounded">{v}</code>
              <button onClick={() => copy(v)} className={`text-xs transition-colors ${copied===v?"text-emerald-700":"text-gray-400 hover:text-gray-8000"}`}>{copied===v?"✓":"⎘"}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 rounded-2xl border" style={{ background: picked, borderColor: picked }}>
        <p className="text-xs font-mono" style={{ color: picked.slice(1,3)>"88"?"#000":"#fff" }}>{picked} preview</p>
      </div>
      {!imgSrc
        ? <FileDropZone accept="image/*" emoji="🎨" label="Drop an image to pick colors" hint="Click anywhere on the image to pick" onFiles={handleImg} />
        : (
          <div>
            <p className="text-xs text-gray-400 mb-2">Click anywhere to pick a color</p>
            <canvas
              ref={el => {
                (canvasRef as React.MutableRefObject<HTMLCanvasElement|null>).current = el;
                if (el && imgSrc) {
                  const img = new Image();
                  img.onload = () => { el.width=img.width; el.height=img.height; el.getContext("2d")!.drawImage(img,0,0); };
                  img.src = imgSrc;
                }
              }}
              onClick={pickFromCanvas}
              className="max-w-full rounded-xl cursor-crosshair block"
            />
          </div>
        )
      }
      {palette.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 mb-2">Picked Colors</p>
          <div className="flex gap-2 flex-wrap">
            {palette.map(c => (
              <button key={c} onClick={() => { setPicked(c); copy(c); }} title={c}
                className="w-10 h-10 rounded-xl border-2 border-gray-200 hover:scale-110 transition-transform"
                style={{ background: c }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
