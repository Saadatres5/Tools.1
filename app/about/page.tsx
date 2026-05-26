import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTotalToolCount } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "About QuantixTools — Free AI & File Tools Platform",
  description: "QuantixTools is a free browser-based platform offering 100+ AI and file tools. No signup, no uploads, privacy first. Learn our mission and technology.",
  alternates: { canonical: "https://quantixtools.com/about" },
  openGraph: {
    type: "website",
    url:  "https://quantixtools.com/about",
    title: "About QuantixTools — Free AI & File Tools Platform",
    description: "Learn about QuantixTools — 100+ free browser-based tools, privacy-first architecture, and our mission to make powerful tools accessible to everyone.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://quantixtools.com/about",
  "name": "About QuantixTools",
  "url": "https://quantixtools.com/about",
  "description": "QuantixTools is a free browser-based platform offering 100+ AI and file tools. No signup required.",
  "publisher": {
    "@type": "Organization",
    "@id": "https://quantixtools.com/#organization",
    "name": "QuantixTools",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://quantixtools.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://quantixtools.com/about" },
    ],
  },
};

export default function AboutPage() {
  const total = getTotalToolCount();
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Navbar />
      <main id="main-content">
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 14 }}>ℹ️</div>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 12 }}>About QuantixTools</h1>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>We believe powerful tools should be free, fast, and private — for everyone.</p>
        </div>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 32 }} className="stats-grid">
            {[
              { value: `${total}+`, label: "Free Tools", icon: "🔧" },
              { value: "15+",      label: "Categories",  icon: "📂" },
              { value: "0",        label: "Signups Needed", icon: "🚫" },
              { value: "100%",     label: "Free Forever", icon: "✅" },
            ].map(stat => (
              <div key={stat.label} style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "22px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{stat.icon}</div>
                <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 26, fontWeight: 800, color: "#e8284a", marginBottom: 4 }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
          {[
            { icon: "🎯", bg: "#fff0f3", title: "Our Mission", body: "QuantixTools was built to give everyone access to powerful AI and file processing tools — completely free, with no account required. Most of our tools run entirely inside your browser, meaning your files never leave your device." },
            { icon: "🔒", bg: "#f0fdf4", title: "Privacy-First Architecture", body: "Unlike most online tools, QuantixTools processes your files locally in your browser using modern Web APIs, WebAssembly, and browser-based AI models. Your documents, images, and data never touch our servers." },
            { icon: "⚙️", bg: "#eff6ff", title: "Technology Stack", body: "Built with Next.js 16, React 19, TypeScript, Tailwind CSS, Transformers.js, FFmpeg WASM, Tesseract OCR, PDF-lib, and WebAssembly — all running client-side for maximum speed and privacy." },
          ].map(s => (
            <div key={s.title} style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "28px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{s.icon}</div>
                <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 18, color: "#1a1a2e" }}>{s.title}</h2>
              </div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
          <div style={{ background: "#1a1a2e", borderRadius: 18, padding: "44px 36px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 10 }}>Start Using Tools for Free</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", marginBottom: 22 }}>No account needed. {total}+ tools right now.</p>
            <Link href="/tools" style={{ display: "inline-block", background: "#e8284a", color: "#fff", padding: "12px 28px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Browse All Tools →</Link>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:600px){ .stats-grid{ grid-template-columns:1fr 1fr !important; } }`}</style>
    </div>
  );
}
