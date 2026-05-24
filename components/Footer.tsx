import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a2e", marginTop: "auto" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.08)" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#e8284a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-syne,sans-serif)", fontWeight: 900, fontSize: 15, color: "#fff" }}>Q</div>
              <span style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 800, fontSize: 17, color: "#fff" }}>QuantixTools</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.75, marginBottom: 16, maxWidth: 240 }}>
              100+ free AI &amp; file tools. No signup. Files stay private in your browser.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["✦ Free", "🔒 Private", "⚡ Instant"].map(b => (
                <span key={b} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.4)" }}>{b}</span>
              ))}
            </div>
          </div>

          {/* PDF */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.9)", marginBottom: 16, letterSpacing: ".6px", textTransform: "uppercase" }}>PDF Tools</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[["Compress PDF", "/tools/compress-pdf"], ["Merge PDF", "/tools/merge-pdf"], ["PDF to Word", "/tools/pdf-to-word"], ["OCR PDF", "/tools/ocr"], ["All PDF Tools →", "/tools/pdf"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* AI */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.9)", marginBottom: 16, letterSpacing: ".6px", textTransform: "uppercase" }}>AI Tools</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[["AI Writer", "/tools/ai-writer"], ["AI Summarizer", "/tools/ai-summarizer"], ["Remove BG", "/tools/remove-background"], ["Speech to Text", "/tools/speech-to-text"], ["All AI Tools →", "/tools/ai"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.9)", marginBottom: 16, letterSpacing: ".6px", textTransform: "uppercase" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[["About", "/about"], ["Blog", "/blog"], ["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Contact", "/contact"], ["Disclaimer", "/disclaimer"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: "20px 0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.22)" }}>© {new Date().getFullYear()} QuantixTools. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacy", "/privacy"], ["Terms", "/terms"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={href} href={href} className="footer-bottom-link">{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
