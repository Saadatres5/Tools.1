"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import FileDropZone from "@/components/tools/FileDropZone";

type Status = "idle" | "loading" | "preview" | "processing" | "done" | "error";

// ── Canvas helpers ─────────────────────────────────────────────────────────────

function getBBox(data: Uint8ClampedArray, w: number, h: number) {
  let minX = w, minY = h, maxX = 0, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
      if (a > 0) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); }
    }
  }
  return { minX, minY, maxX, maxY };
}

interface Settings {
  threshold: number;   // 0-255 — pixels brighter than this are removed
  padding: number;     // px padding around detected signature
  smoothing: boolean;  // anti-alias edges
  inkColor: string;    // output ink color override ("" = keep original)
}

function processSignature(
  src: HTMLImageElement,
  settings: Settings
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = src.naturalWidth;
      canvas.height = src.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(src, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const { threshold, smoothing, inkColor } = settings;

      // Parse override color
      let ir = -1, ig = -1, ib = -1;
      if (inkColor && inkColor !== "") {
        const hex = inkColor.replace("#", "");
        ir = parseInt(hex.substring(0, 2), 16);
        ig = parseInt(hex.substring(2, 4), 16);
        ib = parseInt(hex.substring(4, 6), 16);
      }

      // Step 1: Remove background — white/near-white pixels become transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        if (brightness > threshold) {
          // Background pixel → transparent
          data[i + 3] = 0;
        } else {
          // Ink pixel → optionally remap alpha for smoothing
          if (smoothing) {
            // Soft edge: map brightness range [threshold-40 .. threshold] to alpha 255..128
            const edge = threshold - 40;
            if (brightness > edge) {
              data[i + 3] = Math.round(255 * (1 - (brightness - edge) / 40));
            }
          }
          // Color override
          if (ir >= 0) {
            // Preserve original alpha after smoothing, but set RGB to ink color
            data[i] = ir; data[i + 1] = ig; data[i + 2] = ib;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Step 2: Auto-crop to bounding box of non-transparent pixels + padding
      const bbox = getBBox(data, canvas.width, canvas.height);
      const pad = settings.padding;
      const cx = Math.max(0, bbox.minX - pad);
      const cy = Math.max(0, bbox.minY - pad);
      const cw = Math.min(canvas.width, bbox.maxX + pad) - cx;
      const ch = Math.min(canvas.height, bbox.maxY + pad) - cy;

      if (cw <= 0 || ch <= 0) {
        reject(new Error("No signature detected. Try adjusting the threshold."));
        return;
      }

      const out = document.createElement("canvas");
      out.width = cw; out.height = ch;
      const octx = out.getContext("2d")!;
      octx.drawImage(canvas, cx, cy, cw, ch, 0, 0, cw, ch);

      out.toBlob(blob => blob ? resolve(blob) : reject(new Error("Export failed")), "image/png");
    } catch (e) {
      reject(e);
    }
  });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SignaturePNGClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [settings, setSettings] = useState<Settings>({ threshold: 200, padding: 12, smoothing: true, inkColor: "" });
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Cleanup URLs on unmount
  useEffect(() => () => {
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
  }, []);

  const loadFile = useCallback((f: File) => {
    setFile(f);
    setStatus("loading");
    setResultUrl(null);
    setErrorMsg("");
    const url = URL.createObjectURL(f);
    setPreviewUrl(url);
    const img = new Image();
    img.onload = () => { imgRef.current = img; setStatus("preview"); };
    img.onerror = () => setStatus("error");
    img.src = url;
  }, []);

  const process = useCallback(async () => {
    if (!imgRef.current) return;
    setStatus("processing");
    setResultUrl(null);
    try {
      const blob = await processSignature(imgRef.current, settings);
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
      setStatus("done");
    } catch (e: unknown) {
      setErrorMsg(e instanceof Error ? e.message : "Processing failed.");
      setStatus("error");
    }
  }, [settings]);

  const download = () => {
    if (!resultUrl || !file) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = file.name.replace(/\.[^.]+$/, "") + "_signature.png";
    a.click();
  };

  const reset = () => {
    setFile(null); setStatus("idle"); setResultUrl(null); setErrorMsg(""); setPreviewUrl(null); imgRef.current = null;
  };

  const slider = (label: string, key: keyof Settings, min: number, max: number, step = 1, hint?: string) => (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: "#475569" }}>{label}</label>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>{settings[key] as number}{hint}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={settings[key] as number}
        onChange={e => setSettings(s => ({ ...s, [key]: Number(e.target.value) }))}
        style={{ width: "100%", accentColor: "#e8284a" }}
      />
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Upload */}
      {status === "idle" && (
        <FileDropZone
          accept=".jpg,.jpeg,.png,.webp,.bmp,.tiff,image/*"
          emoji="✍️"
          label="Drop your signed document or image here"
          hint="JPG, PNG, WEBP supported. The tool finds and isolates your signature automatically."
          onFiles={f => loadFile(f[0])}
        />
      )}

      {/* File bar */}
      {file && status !== "idle" && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>✍️</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>{file.name}</span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>— {(file.size / 1024).toFixed(0)} KB</span>
          </div>
          <button onClick={reset} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 16 }}>✕</button>
        </div>
      )}

      {/* Loading */}
      {status === "loading" && (
        <div style={{ textAlign: "center", padding: "28px", color: "#64748b", fontSize: 13 }}>Loading image…</div>
      )}

      {/* Preview + settings */}
      {(status === "preview" || status === "processing") && previewUrl && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Original preview */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Original</div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 140, padding: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Original" style={{ maxWidth: "100%", maxHeight: 220, objectFit: "contain", borderRadius: 6 }} />
            </div>
          </div>

          {/* Settings */}
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 18px" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e", marginBottom: 14 }}>⚙️ Extraction Settings</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {slider("Background Threshold", "threshold", 100, 254, 1, " (higher = remove more)")}
              {slider("Padding around signature", "padding", 0, 60, 2, "px")}

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <input type="checkbox" id="smooth" checked={settings.smoothing} onChange={e => setSettings(s => ({ ...s, smoothing: e.target.checked }))} style={{ accentColor: "#e8284a", width: 15, height: 15 }} />
                <label htmlFor="smooth" style={{ fontSize: 12, fontWeight: 600, color: "#475569", cursor: "pointer" }}>Smooth edges (anti-aliasing)</label>

              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>Ink color override <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional — leave blank to keep original)</span></label>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input type="color" value={settings.inkColor || "#000000"} disabled={!settings.inkColor}
                    onChange={e => setSettings(s => ({ ...s, inkColor: e.target.value }))}
                    style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid #e2e8f0", cursor: "pointer", padding: 2 }}
                  />
                  <select value={settings.inkColor} onChange={e => setSettings(s => ({ ...s, inkColor: e.target.value }))}
                    style={{ flex: 1, padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 12, background: "#fff", color: "#475569" }}>
                    <option value="">Keep original color</option>
                    <option value="#000000">Black</option>
                    <option value="#1a1a6e">Dark Blue (formal)</option>
                    <option value="#003087">Navy Blue</option>
                    <option value="#1a1a2e">Charcoal</option>
                    <option value="#2563eb">Blue</option>
                    <option value="#7c3aed">Purple</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Process button */}
          <button onClick={process} disabled={status === "processing"} style={{ width: "100%", padding: "13px", background: status === "processing" ? "#94a3b8" : "#e8284a", color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: status === "processing" ? "not-allowed" : "pointer", transition: "background .15s" }}>
            {status === "processing" ? "⏳ Processing…" : "✍️ Extract Signature"}
          </button>
        </div>
      )}

      {/* Result */}
      {status === "done" && resultUrl && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#22c55e" }}>✅ Signature extracted successfully!</div>

          {/* Side by side preview */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", marginBottom: 6, textAlign: "center" }}>ORIGINAL</div>
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 10, background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: 10, minHeight: 110 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl!} alt="Original" style={{ maxWidth: "100%", maxHeight: 120, objectFit: "contain" }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", marginBottom: 6, textAlign: "center" }}>SIGNATURE PNG</div>
              {/* Checkerboard background to show transparency */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", padding: 10, minHeight: 110, backgroundImage: "linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0px", backgroundColor: "#fff" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resultUrl} alt="Extracted signature" style={{ maxWidth: "100%", maxHeight: 120, objectFit: "contain" }} />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={download} style={{ flex: 1, minWidth: 160, padding: "11px 16px", background: "#e8284a", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ⬇️ Download PNG
            </button>
            <button onClick={() => setStatus("preview")} style={{ padding: "11px 16px", background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ⚙️ Adjust
            </button>
            <button onClick={reset} style={{ padding: "11px 16px", background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              New File
            </button>
          </div>

          <div style={{ padding: "10px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, fontSize: 12, color: "#16a34a" }}>
            💡 The PNG has a transparent background — paste it directly into Word, PDF, PowerPoint, or email.
          </div>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div style={{ padding: "14px 16px", background: "#fff0f3", border: "1px solid #fecdd3", borderRadius: 10, color: "#e8284a", fontSize: 13 }}>
          ❌ {errorMsg || "Something went wrong. Please try a different image."}
          <button onClick={reset} style={{ marginLeft: 12, fontSize: 12, color: "#94a3b8", background: "none", border: "none", cursor: "pointer" }}>Try again</button>
        </div>
      )}
    </div>
  );
}
