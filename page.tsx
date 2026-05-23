import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import HomepageTools from "@/components/HomepageTools";
import AdBanner from "@/components/AdBanner";
import { allCategories, getTotalToolCount } from "@/lib/tools-data";

const categoryBg: Record<string, string> = {
  pdf: "#fef2f2", image: "#eff6ff", ai: "#f5f3ff",
  video: "#fdf2f8", audio: "#fffbeb", developer: "#ecfdf5",
  seo: "#ecfeff", text: "#eef2ff", security: "#fef2f2",
  calculators: "#fffbeb", productivity: "#f5f3ff",
  "social-media": "#fdf2f8", student: "#eff6ff",
  business: "#f0fdfa", browser: "#f8fafc",
};

const faqs = [
  { q: "Are all tools really free?", a: "Yes, 100% free. No signup, no credit card, no hidden fees — ever." },
  { q: "Are my files safe?", a: "Absolutely. Most tools process files directly in your browser — nothing is sent to our servers." },
  { q: "Do I need to create an account?", a: "No account needed. Just open a tool and start using it immediately." },
  { q: "What file formats are supported?", a: "We support all major formats: PDF, JPG, PNG, MP4, MP3, DOCX, and many more." },
];

export default function HomePage() {
  const total = getTotalToolCount();
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "linear-gradient(180deg,#f8fafc 0%,#fff 100%)", padding: "80px 24px 64px", textAlign: "center", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 100, padding: "5px 14px 5px 8px", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 24 }}>
          <span style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
          {total}+ Free Tools · No Signup Required
        </div>
        <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(38px,6vw,66px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 18, maxWidth: 780, marginLeft: "auto", marginRight: "auto" }}>
          Every AI &amp; File Tool<br /><span style={{ color: "#2563eb" }}>In One Place</span>
        </h1>
        <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#64748b", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.65 }}>
          Compress PDFs, remove backgrounds, write with AI, trim videos — all free, all instant, all private.
        </p>
        <div style={{ marginBottom: 28 }}><SearchBar /></div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>Popular:</span>
          {["Compress PDF", "Remove Background", "AI Writer", "Merge PDF", "Trim Video", "JSON Formatter"].map(t => (
            <Link key={t} href={`/tools/${t.toLowerCase().replace(/ /g, "-")}`} className="ql-tag">{t}</Link>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {[{ num: `${total}+`, lbl: "Free Tools" }, { num: "15", lbl: "Categories" }, { num: "0", lbl: "Signups Needed" }, { num: "100%", lbl: "Free Forever" }].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 40 }}>
              {i > 0 && <div style={{ width: 1, height: 36, background: "#e2e8f0" }} />}
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 28, fontWeight: 800, color: "#0f172a" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN */}
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 22, fontWeight: 700, color: "#0f172a" }}>All Tools</h2>
          <Link href="/tools" style={{ fontSize: 13, fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>View all {total}+ →</Link>
        </div>

        <HomepageTools />

        <div style={{ margin: "40px 0" }}>
          <AdBanner slot="2233445566" format="horizontal" className="rounded-2xl" />
        </div>

        {/* TRUST BAR */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap", padding: 28, background: "#f8fafc", borderRadius: 14, border: "1px solid #e2e8f0", marginBottom: 48 }}>
          {[{ icon: "🔒", label: "Browser-based processing" }, { icon: "⚡", label: "Instant, no queues" }, { icon: "🆓", label: "Free forever" }, { icon: "🛡️", label: "No data stored" }, { icon: "📱", label: "Any device" }].map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#475569" }}>
              <span style={{ fontSize: 18 }}>{icon}</span> {label}
            </div>
          ))}
        </div>

        {/* FEATURES DARK */}
        <div style={{ background: "#0f172a", borderRadius: 20, padding: "52px 48px", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Why QuantixTools?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.45)", marginBottom: 36 }}>Built different. No bloat, no paywalls, no sign-in walls.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {[{ icon: "🔒", title: "Privacy First", desc: "Files processed in your browser. Nothing uploaded to our servers." }, { icon: "⚡", title: "Instant & Fast", desc: "No waiting, no queues. Every tool starts the moment you open it." }, { icon: "🆓", title: "Always Free", desc: "No account. No credit card. No hidden fees. 100% free, forever." }, { icon: "🤖", title: "AI-Powered", desc: "Smart AI tools in your browser — no API keys, no cost." }].map(f => (
              <div key={f.title} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.10)", borderRadius: 14, padding: 22 }}>
                <div style={{ fontSize: 22, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 22, fontWeight: 700, color: "#0f172a" }}>Browse by Category</h2>
          <Link href="/tools" style={{ fontSize: 13, fontWeight: 600, color: "#2563eb", textDecoration: "none" }}>All {allCategories.length} categories →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: 12, marginBottom: 48 }}>
          {allCategories.map(cat => (
            <Link key={cat.id} href={cat.href} className="cat-card-link">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: categoryBg[cat.id] || "#f8fafc", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{cat.emoji}</div>
              <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{cat.name}</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>{cat.tools.length} tools</div>
            </Link>
          ))}
        </div>

        <div style={{ marginBottom: 48 }}>
          <AdBanner slot="3344556677" format="rectangle" className="rounded-2xl" />
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: 720, margin: "0 auto 48px" }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 22, fontWeight: 700, color: "#0f172a", textAlign: "center", marginBottom: 24 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map(faq => (
              <div key={faq.q} className="faq-card">
                <h3 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 6 }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#2563eb 0%,#4f46e5 100%)", borderRadius: 20, padding: "56px 48px", textAlign: "center", color: "#fff" }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, marginBottom: 12 }}>Start Using Tools for Free</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.7)", marginBottom: 28 }}>No signup required. {total}+ tools at your fingertips, right now.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tools" className="cta-btn-white">Explore All Tools →</Link>
            <Link href="/tools/pdf" className="cta-btn-ghost">PDF Tools</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
