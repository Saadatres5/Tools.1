"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";

export default function ImageCropperClient() {
  const [imgSrc, setImgSrc] = useState("");
  const [file, setFile] = useState<File|null>(null);
  const [result, setResult] = useState("");
  const [aspect, setAspect] = useState("free");
  const aspects = [["Free","free"],["1:1","1:1"],["16:9","16:9"],["4:3","4:3"],["3:2","3:2"]];

  const handleFile = (files: File[]) => {
    setFile(files[0]);
    setImgSrc(URL.createObjectURL(files[0]));
    setResult("");
  };

  const crop = () => {
    if (!imgSrc) return;
    const img = new Image();
    img.onload = () => {
      let sw=img.width, sh=img.height, sx=0, sy=0;
      if (aspect !== "free") {
        const [aw,ah] = aspect.split(":").map(Number);
        const r = aw/ah;
        if (img.width/img.height > r) { sw=img.height*r; sx=(img.width-sw)/2; }
        else { sh=img.width/r; sy=(img.height-sh)/2; }
      }
      const canvas = document.createElement("canvas");
      canvas.width=sw; canvas.height=sh;
      canvas.getContext("2d")!.drawImage(img,sx,sy,sw,sh,0,0,sw,sh);
      setResult(canvas.toDataURL("image/jpeg",0.95));
    };
    img.src = imgSrc;
  };

  const download = () => {
    const a = document.createElement("a");
    a.href = result;
    a.download = `cropped_${file?.name||"image.jpg"}`;
    a.click();
  };
  const reset = () => { setImgSrc(""); setFile(null); setResult(""); };

  return (
    <div className="space-y-4">
      {!file ? (
        <FileDropZone accept="image/*" emoji="✂️" label="Drop your image here" onFiles={handleFile} />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{file.name}</p>
            <button onClick={reset} className="text-gray-400 hover:text-gray-8000 text-sm">✕</button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {imgSrc && <img src={imgSrc} alt="preview" className="max-h-48 rounded-xl object-contain w-full bg-gray-50" />}
          <div>
            <label className="block text-xs text-gray-8000 mb-2">Crop Ratio</label>
            <div className="flex gap-2 flex-wrap">
              {aspects.map(([l,v]) => (
                <button key={v} onClick={() => setAspect(v)}
                  className={`px-3 py-1.5 rounded-xl text-xs transition-colors ${aspect===v?"bg-blue-600":"bg-gray-50 hover:bg-gray-100"}`}>{l}</button>
              ))}
            </div>
          </div>
          {result ? (
            <div className="space-y-3">
              <p className="text-emerald-700 text-sm">✅ Cropped!</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result} alt="cropped" className="max-h-48 rounded-xl object-contain w-full bg-gray-50" />
              <div className="flex gap-3">
                <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download</button>
                <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-gray-50 text-sm">New</button>
              </div>
            </div>
          ) : (
            <button onClick={crop} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm">✂️ Crop Image</button>
          )}
        </div>
      )}
    </div>
  );
}
