"use client";
import { useState } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";

export default function PDFToWordClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle"|"processing"|"done"|"error">("idle");
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");

  const convert = async () => {
    if (!file) return;
    setStatus("processing"); setProgress(20);
    try {
      // pdfjs-dist v4 import path
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "//unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
      setProgress(30);
      const buf = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      setProgress(50);
      const lines: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items
          .map((item: unknown) => (item as { str: string }).str)
          .join(" ");
        lines.push(pageText, "");
        setProgress(50 + (i / pdf.numPages) * 40);
      }
      setText(lines.join("\n"));
      setStatus("done"); setProgress(100);
    } catch {
      setStatus("error");
    }
  };

  const download = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = file!.name.replace(".pdf", ".txt");
    a.click();
  };
  const reset = () => { setFile(null); setText(""); setStatus("idle"); setProgress(0); };

  return (
    <div className="space-y-4">
      {!file ? (
        <FileDropZone accept=".pdf,application/pdf" emoji="📝" label="Drop your PDF here"
          onFiles={f => { setFile(f[0]); setStatus("idle"); }} />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="font-medium text-sm">{file.name}</p>
            <button onClick={reset} className="text-gray-400 hover:text-gray-8000 text-sm">✕</button>
          </div>
          {status === "processing" && <ProgressBar progress={progress} label="Extracting text from PDF..." />}
          {status === "done" && text && (
            <div className="space-y-3">
              <p className="text-emerald-700 text-sm font-semibold">✅ Text extracted successfully!</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600 max-h-48 overflow-auto whitespace-pre-wrap font-mono text-xs">
                {text.slice(0, 2000)}{text.length > 2000 ? "..." : ""}
              </div>
              <div className="flex gap-3">
                <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download .txt</button>
                <button onClick={() => navigator.clipboard.writeText(text)} className="px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-sm">Copy</button>
                <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-gray-50 text-sm">New</button>
              </div>
            </div>
          )}
          {status === "error" && <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">❌ Failed. Try a text-based PDF.</div>}
          {status === "idle" && <button onClick={convert} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm transition-colors">📝 Extract Text from PDF</button>}
        </div>
      )}
    </div>
  );
}
