"use client";
import { useState, useCallback } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
import ProgressBar from "@/components/tools/ProgressBar";

type Table = { headers: string[]; rows: string[][] };

// ── helpers ──────────────────────────────────────────────────────────────────

type TextItem = { x: number; y: number; str: string };

function groupIntoRows(items: TextItem[]): string[][] {
  if (!items.length) return [];
  const sorted = [...items].sort((a, b) => a.y - b.y);
  const rows: TextItem[][] = [];
  let current: TextItem[] = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    if (Math.abs(sorted[i].y - sorted[i - 1].y) < 5) {
      current.push(sorted[i]);
    } else {
      rows.push(current);
      current = [sorted[i]];
    }
  }
  rows.push(current);
  return rows.map(row => row.sort((a, b) => a.x - b.x).map(c => c.str.trim()).filter(Boolean));
}

function rowsToCSV(rows: string[][]): string {
  return rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n");
}

function buildXLSX(tables: Table[]): string {
  // Minimal XLSX using SheetJS-style data — we output CSV for max compatibility
  // but label it .csv so it opens directly in Excel
  const lines: string[][] = [];
  tables.forEach((t, ti) => {
    if (ti > 0) lines.push([]);
    if (t.headers.length) lines.push(t.headers);
    t.rows.forEach(r => lines.push(r));
  });
  return rowsToCSV(lines);
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function PDFToExcelClient() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [tables, setTables] = useState<Table[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const extract = useCallback(async () => {
    if (!file) return;
    setStatus("processing");
    setProgress(10);
    setErrorMsg("");

    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "//unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
      setProgress(20);

      const buf = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      setProgress(30);

      const allTables: Table[] = [];

      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p);
        const content = await page.getTextContent();

        const items = content.items
          .filter((item: unknown) => typeof (item as { str?: string }).str === "string")
          .map((item: unknown) => {
            const i = item as { str: string; transform: number[] };
            return { str: i.str, x: Math.round(i.transform[4]), y: Math.round(i.transform[5]) };
          })
          .filter(i => i.str.trim().length > 0);

        const rows = groupIntoRows(items);

        if (rows.length >= 2) {
          // treat first row as header
          const headers = rows[0];
          const dataRows = rows.slice(1);
          // Only add if it looks like tabular data (multiple columns)
          if (headers.length >= 2) {
            allTables.push({ headers, rows: dataRows });
          }
        }
        setProgress(30 + (p / pdf.numPages) * 60);
      }

      if (allTables.length === 0) {
        // fallback: dump all text rows as single table
        const page = await pdf.getPage(1);
        const content = await page.getTextContent();
        const items = content.items
          .filter((item: unknown) => typeof (item as { str?: string }).str === "string")
          .map((item: unknown) => {
            const i = item as { str: string; transform: number[] };
            return { str: i.str, x: Math.round(i.transform[4]), y: Math.round(i.transform[5]) };
          })
          .filter(i => i.str.trim().length > 0);
        const rows = groupIntoRows(items);
        if (rows.length > 0) {
          allTables.push({ headers: [], rows });
        }
      }

      setTables(allTables);
      setStatus("done");
      setProgress(100);
    } catch (e) {
      console.error(e);
      setErrorMsg("Could not extract tables. Make sure this is a text-based PDF.");
      setStatus("error");
    }
  }, [file]);

  const downloadCSV = () => {
    const csv = buildXLSX(tables);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = file!.name.replace(/\.pdf$/i, "") + "_tables.csv";
    a.click();
  };

  const reset = () => { setFile(null); setTables([]); setStatus("idle"); setProgress(0); setErrorMsg(""); };

  const btn = (label: string, onClick: () => void, variant: "primary" | "secondary" | "danger" = "primary") => {
    const styles: Record<string, React.CSSProperties> = {
      primary: { background: "#e8284a", color: "#fff" },
      secondary: { background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0" },
      danger: { background: "#fff0f3", color: "#e8284a", border: "1px solid #fecdd3" },
    };
    return (
      <button onClick={onClick} style={{ padding: "10px 20px", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer", border: "none", transition: "opacity .15s", ...styles[variant] }}>
        {label}
      </button>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Upload */}
      {!file && (
        <FileDropZone
          accept=".pdf,application/pdf"
          emoji="📊"
          label="Drop your PDF here to extract tables"
          hint="Supports text-based PDFs with tables. Max 50MB."
          onFiles={f => { setFile(f[0]); setStatus("idle"); }}
        />
      )}

      {/* File info */}
      {file && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>📊</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a2e" }}>{file.name}</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>{(file.size / 1024 / 1024).toFixed(2)} MB</div>
            </div>
          </div>
          <button onClick={reset} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>✕</button>
        </div>
      )}

      {/* Progress */}
      {status === "processing" && (
        <ProgressBar progress={progress} label="Scanning PDF for tables..." />
      )}

      {/* Action button */}
      {status === "idle" && file && (
        <button onClick={extract} style={{ width: "100%", padding: "13px", background: "#e8284a", color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
          📊 Extract Tables to Excel
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
      {status === "done" && tables.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#22c55e" }}>
              ✅ Found {tables.length} table{tables.length > 1 ? "s" : ""}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {btn("⬇️ Download CSV (Excel)", downloadCSV, "primary")}
              {btn("New File", reset, "secondary")}
            </div>
          </div>

          {/* Table previews */}
          {tables.slice(0, 3).map((table, ti) => (
            <div key={ti} style={{ overflowX: "auto" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>Table {ti + 1} — {table.headers.length || table.rows[0]?.length || 0} columns × {table.rows.length} rows</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                {table.headers.length > 0 && (
                  <thead>
                    <tr>
                      {table.headers.map((h, i) => (
                        <th key={i} style={{ padding: "8px 12px", background: "#f1f5f9", border: "1px solid #e2e8f0", textAlign: "left", fontWeight: 700, color: "#1a1a2e", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {table.rows.slice(0, 5).map((row, ri) => (
                    <tr key={ri} style={{ background: ri % 2 === 0 ? "#fff" : "#f8fafc" }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: "7px 12px", border: "1px solid #e2e8f0", color: "#475569" }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                  {table.rows.length > 5 && (
                    <tr>
                      <td colSpan={table.headers.length || table.rows[0]?.length || 1} style={{ padding: "7px 12px", border: "1px solid #e2e8f0", color: "#94a3b8", fontStyle: "italic", textAlign: "center" }}>
                        +{table.rows.length - 5} more rows in downloaded file
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))}

          <div style={{ padding: "10px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, fontSize: 12, color: "#16a34a" }}>
            💡 The downloaded .csv file opens directly in Microsoft Excel, Google Sheets, or LibreOffice Calc.
          </div>
        </div>
      )}
    </div>
  );
}
