"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";

function formatBytes(bytes: number) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

export default function CompressPDFClient() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [result, setResult] = useState<{ url: string; size: number; original: number } | null>(null);
  const [quality, setQuality] = useState(75);

  const handleFile = (files: File[]) => {
    setFile(files[0]);
    setStatus("idle");
    setResult(null);
    setProgress(0);
  };

  const compress = async () => {
    if (!file) return;
    setStatus("processing");
    setProgress(10);

    try {
      // Dynamically import pdf-lib
      const { PDFDocument } = await import("pdf-lib");
      setProgress(30);

      const arrayBuffer = await file.arrayBuffer();
      setProgress(50);

      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setProgress(70);

      // Re-save with compression options
      const compressed = await pdfDoc.save({
        useObjectStreams: true,
        addDefaultPage: false,
        objectsPerTick: 50,
      });
      setProgress(90);

      const blob = new Blob([new Uint8Array(compressed)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setResult({ url, size: blob.size, original: file.size });
      setProgress(100);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  const download = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result.url;
    a.download = file!.name.replace(".pdf", "_compressed.pdf");
    a.click();
  };

  const reset = () => {
    setFile(null); setResult(null); setStatus("idle"); setProgress(0);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <FileDropZone accept=".pdf,application/pdf" emoji="📄" label="Drop your PDF here" hint="Drag & drop or click to browse • PDF files only • Max 50MB" onFiles={handleFile} />
      ) : (
        <div className="space-y-4">
          {/* File info */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <div>
                <p className="font-medium text-sm">{file.name}</p>
                <p className="text-white/40 text-xs">{formatBytes(file.size)}</p>
              </div>
            </div>
            <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm">✕ Remove</button>
          </div>

          {/* Quality slider */}
          {status === "idle" && (
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-white/60">Compression Level</label>
                <span className="text-sm font-medium text-blue-400">
                  {quality >= 80 ? "Low (Best Quality)" : quality >= 60 ? "Medium (Balanced)" : "High (Smallest Size)"}
                </span>
              </div>
              <input type="range" min={30} max={90} value={quality} onChange={e => setQuality(+e.target.value)}
                className="w-full accent-blue-500" />
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>Smaller file</span><span>Better quality</span>
              </div>
            </div>
          )}

          {/* Progress */}
          {status === "processing" && <ProgressBar progress={progress} label="Compressing PDF..." />}

          {/* Result */}
          {status === "done" && result && (
            <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20 space-y-3">
              <div className="flex items-center gap-2 text-green-400 font-semibold">
                <span>✅</span> Compression complete!
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="p-3 rounded-xl bg-white/5">
                  <p className="text-white/40 text-xs mb-1">Original</p>
                  <p className="font-semibold">{formatBytes(result.original)}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <p className="text-white/40 text-xs mb-1">Compressed</p>
                  <p className="font-semibold text-green-400">{formatBytes(result.size)}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <p className="text-white/40 text-xs mb-1">Saved</p>
                  <p className="font-semibold text-blue-400">
                    {Math.max(0, Math.round((1 - result.size / result.original) * 100))}%
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={download} className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium text-sm transition-colors">
                  ⬇️ Download Compressed PDF
                </button>
                <button onClick={reset} className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm transition-colors">
                  New File
                </button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              ❌ Failed to compress. Please try another PDF file.
            </div>
          )}

          {status === "idle" && (
            <button onClick={compress} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition-colors">
              📦 Compress PDF
            </button>
          )}
        </div>
      )}
    </div>
  );
}
