"use client";
import { useState, useCallback } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";

type PageText = { page: number; text: string; words: number };

export default function PDFToTextClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [pages, setPages] = useState<PageText[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | number>("all");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fullText = pages.map(p => `--- Page ${p.page} ---\n${p.text}`).join("\n\n");
  const totalWords = pages.reduce((s, p) => s + p.words, 0);
  const totalChars = fullText.length;

  const extract = useCallback(async () => {
    if (!file) return;
    setStatus("processing");
    setProgress(10);
    setErrorMsg("");
    setPages([]);

    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "//unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
      setProgress(20);

      const buf = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      setProgress(30);

      const extracted: PageText[] = [];

      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p);
        const content = await page.getTextContent();

        // Group items by Y position for natural reading order
        const itemMap = new Map<number, string[]>();
        for (const item of content.items) {
          const i = item as { str: string; transform: number[] };
          if (!i.str?.trim()) continue;
          const y = Math.round(i.transform[5]);
          if (!itemMap.has(y)) itemMap.set(y, []);
          itemMap.get(y)!.push(i.str);
        }

        const lines = Array.from(itemMap.entries())
          .sort((a, b) => b[0] - a[0])  // higher Y = top of page
          .map(([, words]) => words.join(" ").trim())
          .filter(l => l.length > 0);

        const text = lines.join("\n");
        const words = text.split(/\s+/).filter(Boolean).length;
        extracted.push({ page: p, text, words });
        setProgress(30 + (p / pdf.numPages) * 65);
      }

      setPages(extracted);
      setStatus("done");
      setProgress(100);
    } catch (e) {
      console.error(e);
      setErrorMsg("Could not extract text. Make sure this is a text-based PDF (not a scanned image).");
      setStatus("error");
    }
  }, [file]);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = (text: string, suffix = "") => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = file!.name.replace(/\.pdf$/i, "") + (suffix || "") + ".txt";
    a.click();
  };

  const reset = () => { setFile(null); setPages([]); setStatus("idle"); setProgress(0); setActiveTab("all"); setErrorMsg(""); };

  const displayText = activeTab === "all" ? fullText : (pages.find(p => p.page === activeTab)?.text ?? "");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Upload */}
      {!file && (
        <FileDropZone
          accept=".pdf,application/pdf"
          emoji="📃"
          label="Drop your PDF here to extract text"
          hint="Works with text-based PDFs. For scanned PDFs, use OCR PDF tool. Max 50MB."
          onFiles={f => { setFile(f[0]); setStatus("idle"); }}
        />
      )}

      {/* File info bar */}
      {file && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>📃</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a2e" }}>{file.name}</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>{(file.size / 1024 / 1024).toFixed(2)} MB</div>
            </div>
          </div>
          <button onClick={reset} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>✕</button>
        </div>
      )}

      {/* Progress */}
      {status === "processing" && <ProgressBar progress={progress} label="Extracting text from PDF..." />}

      {/* Extract button */}
      {status === "idle" && file && (
        <button onClick={extract} style={{ width: "100%", padding: "13px", background: "#e8284a", color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
          📃 Extract Text from PDF
        </button>
      )}

      {/* Error */}
      {status === "error" && (
        <div style={{ padding: "14px 16px", background: "#fff0f3", border: "1px solid #fecdd3", borderRadius: 10, color: "#e8284a", fontSize: 13 }}>
          ❌ {errorMsg}
          <button onClick={reset} style={{ marginLeft: 12, fontSize: 12, color: "#94a3b8", background: "none", border: "none", cursor: "pointer" }}>Try again</button>
        </div>
      )}

      {/* Results */}
      {status === "done" && pages.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { label: "Pages", value: pages.length },
              { label: "Words", value: totalWords.toLocaleString() },
              { label: "Characters", value: totalChars.toLocaleString() },
            ].map(s => (
              <div key={s.label} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "8px 16px", textAlign: "center", flex: 1, minWidth: 80 }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: "#16a34a" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#94a3b8" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={() => download(fullText)} style={{ flex: 1, minWidth: 140, padding: "10px 16px", background: "#e8284a", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ⬇️ Download .txt
            </button>
            <button onClick={() => copy(displayText)} style={{ flex: 1, minWidth: 120, padding: "10px 16px", background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {copied ? "✅ Copied!" : "📋 Copy Text"}
            </button>
            <button onClick={reset} style={{ padding: "10px 16px", background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              New File
            </button>
          </div>

          {/* Page tabs */}
          {pages.length > 1 && (
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2, WebkitOverflowScrolling: "touch" }}>
              <button onClick={() => setActiveTab("all")} style={{ padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none", whiteSpace: "nowrap", background: activeTab === "all" ? "#e8284a" : "#f1f5f9", color: activeTab === "all" ? "#fff" : "#475569" }}>
                All Pages
              </button>
              {pages.map(p => (
                <button key={p.page} onClick={() => setActiveTab(p.page)} style={{ padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none", whiteSpace: "nowrap", background: activeTab === p.page ? "#e8284a" : "#f1f5f9", color: activeTab === p.page ? "#fff" : "#475569" }}>
                  Page {p.page}
                </button>
              ))}
            </div>
          )}

          {/* Text preview */}
          <div style={{ position: "relative" }}>
            <textarea
              readOnly
              value={displayText}
              style={{ width: "100%", minHeight: 280, padding: "14px 16px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, fontSize: 12, fontFamily: "'Consolas', 'Courier New', monospace", color: "#1a1a2e", lineHeight: 1.7, resize: "vertical", boxSizing: "border-box" }}
            />
            <div style={{ position: "absolute", bottom: 10, right: 10, fontSize: 11, color: "#94a3b8" }}>
              {displayText.length.toLocaleString()} chars
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, fontSize: 12, color: "#1d4ed8" }}>
            💡 For scanned PDFs (images), use the <a href="/tools/ocr" style={{ fontWeight: 700, color: "#1d4ed8" }}>OCR PDF tool</a> instead for better accuracy.
          </div>
        </div>
      )}
    </div>
  );
}
