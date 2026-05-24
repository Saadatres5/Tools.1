"use client";
import { useState, useRef } from "react";
import FileDropZone from "@/components/tools/FileDropZone";

export default function SignPDFClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [hasSig, setHasSig] = useState(false);
  const [file, setFile] = useState<File|null>(null);
  const [status, setStatus] = useState<"idle"|"done"|"error">("idle");
  const [resultUrl, setResultUrl] = useState("");

  const getPos = (e: React.MouseEvent<HTMLCanvasElement>|React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    if ("touches" in e) {
      const t = e.touches[0];
      return { x: t.clientX-rect.left, y: t.clientY-rect.top };
    }
    return { x: e.clientX-rect.left, y: e.clientY-rect.top };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>|React.TouchEvent<HTMLCanvasElement>) => {
    setDrawing(true);
    const { x, y } = getPos(e);
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.beginPath(); ctx.moveTo(x,y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>|React.TouchEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const { x, y } = getPos(e);
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.lineWidth=2; ctx.strokeStyle="#4f8ef7"; ctx.lineCap="round";
    ctx.lineTo(x,y); ctx.stroke(); setHasSig(true);
  };

  const stop = () => setDrawing(false);

  const clear = () => {
    const c = canvasRef.current!;
    c.getContext("2d")!.clearRect(0,0,c.width,c.height);
    setHasSig(false);
  };

  const apply = async () => {
    if (!file || !hasSig) return;
    try {
      const { PDFDocument } = await import("pdf-lib");
      const doc = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
      const page = doc.getPage(doc.getPageCount()-1);
      const sigImg = canvasRef.current!.toDataURL("image/png");
      const pngBytes = await fetch(sigImg).then(r => r.arrayBuffer());
      const img = await doc.embedPng(pngBytes);
      const { width } = page.getSize();
      page.drawImage(img, { x: width-200, y: 20, width: 180, height: 60, opacity: 1 });
      const bytes = await doc.save();
      setResultUrl(URL.createObjectURL(new Blob([new Uint8Array(bytes)],{type:"application/pdf"})));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const download = () => {
    const a = document.createElement("a"); a.href=resultUrl; a.download=`signed_${file?.name}`; a.click();
  };
  const reset = () => { setFile(null); setResultUrl(""); setStatus("idle"); clear(); };

  return (
    <div className="space-y-4">
      {!file ? (
        <FileDropZone accept=".pdf,application/pdf" emoji="✍️" label="Drop your PDF here"
          onFiles={f => { setFile(f[0]); setStatus("idle"); }}/>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm">✕</button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-white/60">Draw your signature</label>
              <button onClick={clear} className="text-xs text-white/30 hover:text-white/60">Clear</button>
            </div>
            <canvas ref={canvasRef} width={500} height={120}
              onMouseDown={startDraw} onMouseMove={draw} onMouseUp={stop} onMouseLeave={stop}
              onTouchStart={startDraw} onTouchMove={draw} onTouchEnd={stop}
              className="w-full rounded-xl cursor-crosshair touch-none" style={{background:"white"}}/>
            <p className="text-xs text-white/30 mt-1">Sign inside the box above</p>
          </div>
          {status==="done" ? (
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-3">
              <p className="text-green-400 font-semibold">✅ Signature applied!</p>
              <div className="flex gap-3">
                <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download Signed PDF</button>
                <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-white/5 text-sm">New</button>
              </div>
            </div>
          ) : status==="error" ? (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">❌ Failed to apply signature.</div>
          ) : (
            <button onClick={apply} disabled={!hasSig}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
              ✍️ Apply Signature to PDF
            </button>
          )}
        </div>
      )}
    </div>
  );
}
