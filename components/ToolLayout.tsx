import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import AdSidebar from "@/components/AdSidebar";
import ErrorBoundary from "@/components/ErrorBoundary";

interface RelatedTool { name: string; href: string; }
interface Props {
  title: string;
  description: string;
  emoji: string;
  category: string;
  categoryHref: string;
  related?: RelatedTool[];
  children: React.ReactNode;
  schemaType?: "SoftwareApplication" | "WebApplication";
}

export default function ToolLayout({ title, description, emoji, category, categoryHref, related = [], children }: Props) {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [description, "Free to use", "No signup required", "Browser-based", "Privacy first"],
    browserRequirements: "Requires JavaScript",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: `Is ${title} free?`, acceptedAnswer: { "@type": "Answer", text: `Yes, ${title} is completely free to use. No signup or account required.` } },
      { "@type": "Question", name: `Is ${title} safe?`, acceptedAnswer: { "@type": "Answer", text: "Yes. Your files are processed locally in your browser. Nothing is uploaded to our servers." } },
      { "@type": "Question", name: `How do I use ${title}?`, acceptedAnswer: { "@type": "Answer", text: `Simply open the ${title} tool, upload or paste your content, and click process. Results are instant.` } },
    ],
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Tool page hero header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "36px 24px 28px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#94a3b8", marginBottom: 16, flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }} className="bc-link">Home</Link>
            <span>/</span>
            <Link href="/tools" style={{ color: "#94a3b8", textDecoration: "none" }} className="bc-link">Tools</Link>
            <span>/</span>
            <Link href={categoryHref} style={{ color: "#94a3b8", textDecoration: "none" }} className="bc-link">{category}</Link>
            <span>/</span>
            <span style={{ color: "#475569", fontWeight: 600 }} aria-current="page">{title}</span>
          </nav>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <div style={{ width: 60, height: 60, borderRadius: 14, background: "#fff0f3", border: "1px solid #fecdd3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>
              {emoji}
            </div>
            <div>
              <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px", marginBottom: 6 }}>{title}</h1>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, marginBottom: 10 }}>{description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Free", "No Signup", "Browser-Based", "Privacy First"].map(badge => (
                  <span key={badge} style={{ fontSize: 11, fontWeight: 600, color: "#22c55e", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 100, padding: "3px 10px" }}>{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" style={{ maxWidth: 860, margin: "0 auto", padding: "28px 24px 80px" }}>

        {/* Ad top */}
        <div style={{ marginBottom: 24 }}>
          <AdBanner slot="1234567890" format="horizontal" className="rounded-xl" />
        </div>

        {/* Tool UI Card */}
        <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 16, padding: "28px", marginBottom: 20 }}>
          <ErrorBoundary toolName={title}>
            {children}
          </ErrorBoundary>
        </div>

        {/* Ad after tool */}
        <div style={{ marginBottom: 20 }}>
          <AdSidebar slot="0987654321" />
        </div>

        {/* How it works */}
        <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "24px 24px", marginBottom: 16 }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 16 }}>How to use {title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Open the tool above",
              "Upload your file or enter your content",
              "Click the process button and get instant results",
              "Download or copy your output",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#fff0f3", border: "1px solid #fecdd3", color: "#e8284a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, fontSize: 12 }}>{i + 1}</div>
                <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, paddingTop: 4 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "24px 24px", marginBottom: 16 }}>
          <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 14 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { q: `Is ${title} free?`, a: `Yes, completely free. No account, no credit card, no hidden fees.` },
              { q: `Are my files safe with ${title}?`, a: `Absolutely. Processing happens entirely in your browser. Your files never leave your device.` },
              { q: `Does ${title} work on mobile?`, a: `Yes, it works on all devices — desktop, tablet, and mobile.` },
            ].map(faq => (
              <details key={faq.q} style={{ background: "#f8fafc", border: "1px solid #e8eaf0", borderRadius: 10, padding: "14px 16px", cursor: "pointer" }}>
                <summary style={{ fontWeight: 600, fontSize: 13, color: "#1a1a2e", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                  {faq.q}
                  <span style={{ color: "#94a3b8", fontSize: 12 }}>▼</span>
                </summary>
                <p style={{ fontSize: 13, color: "#64748b", marginTop: 10, lineHeight: 1.65 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        {related.length > 0 && (
          <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "24px 24px" }}>
            <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 16, color: "#1a1a2e", marginBottom: 14 }}>Related Tools</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {related.map(r => (
                <Link key={r.href} href={r.href} style={{
                  fontSize: 13, fontWeight: 500, color: "#475569",
                  background: "#f1f5f9", border: "1px solid #e2e8f0",
                  borderRadius: 100, padding: "7px 16px",
                  textDecoration: "none", transition: "all .15s",
                }} className="related-tag">{r.name}</Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <style>{`
        .bc-link:hover { color: #1a1a2e !important; }
        .related-tag:hover { background: #e2e8f0 !important; border-color: #cbd5e1 !important; color: #1a1a2e !important; }
      `}</style>
    </div>
  );
}
