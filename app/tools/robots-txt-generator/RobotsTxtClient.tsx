"use client";
import { useState } from "react";

export default function RobotsTxtClient() {
  const [sitemap, setSitemap] = useState("");
  const [rules, setRules] = useState([
    { agent: "*", allow: "/", disallow: "/admin/\nDisallow: /api/\nDisallow: /private/" },
  ]);
  const [extraDisallow, setExtraDisallow] = useState("");
  const [copied, setCopied] = useState(false);

  const txt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/${extraDisallow ? "\nDisallow: " + extraDisallow.split("\n").join("\nDisallow: ") : ""}${sitemap ? "\n\nSitemap: " + sitemap : ""}`;

  const copy = () => { navigator.clipboard.writeText(txt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const download = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt], { type: "text/plain" }));
    a.download = "robots.txt"; a.click();
  };

  const inp = { width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, color: "#1a1a2e", background: "#fff", outline: "none", boxSizing: "border-box" } as React.CSSProperties;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#1d4ed8" }}>
        💡 Generate a robots.txt file to control how search engine crawlers access your website.
      </div>

      {/* Default rules info */}
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 10 }}>📋 Default Rules (always included)</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[["✅ Allow", "/", "#22c55e"], ["❌ Disallow", "/admin/", "#ef4444"], ["❌ Disallow", "/api/", "#ef4444"], ["❌ Disallow", "/private/", "#ef4444"]].map(([type, path, color]) => (
            <div key={path} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
              <span style={{ color }}>{type}:</span>
              <code style={{ background: "#f1f5f9", padding: "1px 6px", borderRadius: 4, fontSize: 11, color: "#1a1a2e" }}>{path}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Additional disallow */}
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5 }}>Additional Paths to Disallow (one per line, optional)</label>
        <textarea value={extraDisallow} onChange={e => setExtraDisallow(e.target.value)} rows={3}
          placeholder={"/checkout\n/user-profile\n/internal"} style={{ ...inp, resize: "vertical", fontFamily: "monospace" }} />
      </div>

      {/* Sitemap */}
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5 }}>Sitemap URL (optional)</label>
        <input value={sitemap} onChange={e => setSitemap(e.target.value)} placeholder="https://example.com/sitemap.xml" style={inp} />
      </div>

      {/* Preview */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#475569" }}>Generated robots.txt</label>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={copy} style={{ padding: "6px 14px", background: copied ? "#22c55e" : "#f1f5f9", color: copied ? "#fff" : "#475569", border: "1px solid #e2e8f0", borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              {copied ? "✓ Copied!" : "📋 Copy"}
            </button>
            <button onClick={download} style={{ padding: "6px 14px", background: "#e8284a", color: "#fff", border: "none", borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              ⬇️ Download
            </button>
          </div>
        </div>
        <pre style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px", fontSize: 13, fontFamily: "monospace", color: "#1a1a2e", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
          {txt}
        </pre>
      </div>

      <div style={{ padding: "10px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, fontSize: 12, color: "#16a34a" }}>
        💡 Upload this file as <strong>robots.txt</strong> to the root of your website (e.g. <strong>https://yoursite.com/robots.txt</strong>).
      </div>
    </div>
  );
}
