"use client";
import { useState } from "react";

interface SitemapURL {
  loc: string;
  priority: string;
  changefreq: string;
  lastmod: string;
}

export default function SitemapClient() {
  const [domain, setDomain] = useState("");
  const [urlsText, setUrlsText] = useState("");
  const [defaultPriority, setDefaultPriority] = useState("0.8");
  const [defaultFreq, setDefaultFreq] = useState("monthly");
  const [includeLastmod, setIncludeLastmod] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const base = domain.trim().replace(/\/$/, "");
    const today = new Date().toISOString().split("T")[0];
    const lines = urlsText.trim() ? urlsText.trim().split("\n").map(l => l.trim()).filter(Boolean) : ["/"];

    const urls: SitemapURL[] = lines.map(line => {
      // Support "url | priority | freq" format
      const parts = line.split("|").map(p => p.trim());
      const loc = parts[0].startsWith("http") ? parts[0] : `${base}${parts[0].startsWith("/") ? parts[0] : "/" + parts[0]}`;
      return {
        loc,
        priority: parts[1] || defaultPriority,
        changefreq: parts[2] || defaultFreq,
        lastmod: today,
      };
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${includeLastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`).join("\n")}
</urlset>`;
    setOutput(xml);
  };

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  const download = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([output], { type: "application/xml" }));
    a.download = "sitemap.xml"; a.click();
  };

  const S = { label: { fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 5 } as React.CSSProperties,
    input: { width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, color: "#1a1a2e", background: "#fff", outline: "none", boxSizing: "border-box" } as React.CSSProperties };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Instructions */}
      <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#1d4ed8" }}>
        💡 Enter your domain and URLs below to generate a valid XML sitemap. One URL per line. Optionally use <code style={{ background: "#dbeafe", padding: "1px 4px", borderRadius: 3 }}>url | priority | changefreq</code> format.
      </div>

      {/* Domain */}
      <div>
        <label style={S.label}>Website Domain</label>
        <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="https://example.com" style={S.input} />
      </div>

      {/* URLs */}
      <div>
        <label style={S.label}>URLs to include (one per line)</label>
        <textarea
          value={urlsText}
          onChange={e => setUrlsText(e.target.value)}
          rows={7}
          placeholder={`/\n/about\n/blog\n/tools | 0.9 | weekly\n/contact | 0.5 | monthly`}
          style={{ ...S.input, resize: "vertical", fontFamily: "monospace", lineHeight: 1.6 }}
        />
        <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Leave empty to generate a single-URL sitemap for the homepage only.</p>
      </div>

      {/* Settings row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={S.label}>Default Priority</label>
          <select value={defaultPriority} onChange={e => setDefaultPriority(e.target.value)} style={S.input}>
            {["1.0","0.9","0.8","0.7","0.6","0.5","0.4","0.3","0.2","0.1"].map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label style={S.label}>Default Change Frequency</label>
          <select value={defaultFreq} onChange={e => setDefaultFreq(e.target.value)} style={S.input}>
            {["always","hourly","daily","weekly","monthly","yearly","never"].map(f => <option key={f}>{f}</option>)}
          </select>
        </div>
      </div>

      {/* Include lastmod */}
      <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, color: "#475569" }}>
        <input type="checkbox" checked={includeLastmod} onChange={e => setIncludeLastmod(e.target.checked)} style={{ accentColor: "#e8284a", width: 15, height: 15 }} />
        Include <code style={{ background: "#f1f5f9", padding: "1px 5px", borderRadius: 4, fontSize: 12 }}>lastmod</code> with today&apos;s date
      </label>

      {/* Generate button */}
      <button onClick={generate} disabled={!domain}
        style={{ width: "100%", padding: 13, background: domain ? "#e8284a" : "#e2e8f0", color: domain ? "#fff" : "#94a3b8", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: domain ? "pointer" : "not-allowed" }}>
        🗺️ Generate Sitemap XML
      </button>

      {/* Output */}
      {output && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#22c55e" }}>✅ Sitemap generated!</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={copy} style={{ padding: "7px 16px", background: copied ? "#22c55e" : "#f1f5f9", color: copied ? "#fff" : "#475569", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                {copied ? "✓ Copied!" : "📋 Copy"}
              </button>
              <button onClick={download} style={{ padding: "7px 16px", background: "#e8284a", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                ⬇️ Download sitemap.xml
              </button>
            </div>
          </div>
          <pre style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px", fontSize: 11, fontFamily: "monospace", color: "#1a1a2e", overflowX: "auto", maxHeight: 320, lineHeight: 1.7, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {output}
          </pre>
          <div style={{ padding: "10px 14px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, fontSize: 12, color: "#16a34a" }}>
            💡 Upload this file as <strong>sitemap.xml</strong> to your website root. Then submit the URL <strong>{domain}/sitemap.xml</strong> in Google Search Console.
          </div>
        </div>
      )}
    </div>
  );
}
