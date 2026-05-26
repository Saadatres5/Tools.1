import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — QuantixTools",
  description: "Contact the QuantixTools team. We'd love to hear from you.",
  alternates: { canonical: "https://quantixtools.com/contact" },
};

const contacts = [
  { icon: "💬", title: "General Enquiries", email: "hello@quantixtools.com", desc: "Questions, feedback, or just want to say hi?" },
  { icon: "🔒", title: "Privacy & Legal", email: "privacy@quantixtools.com", desc: "GDPR requests, data questions, legal matters." },
  { icon: "📢", title: "Advertising", email: "ads@quantixtools.com", desc: "Interested in advertising on QuantixTools?" },
  { icon: "🐛", title: "Bug Reports & Feature Requests", email: "support@quantixtools.com", desc: "Found a bug or have a tool idea? We'd love to hear it." },
];


const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://quantixtools.com/contact",
  "name": "Contact QuantixTools",
  "url": "https://quantixtools.com/contact",
  "publisher": { "@type": "Organization", "@id": "https://quantixtools.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://quantixtools.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://quantixtools.com/contact" },
    ],
  },
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 14 }}>📬</div>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 12 }}>
            Contact Us
          </h1>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 420, margin: "0 auto" }}>
            Have a question, suggestion, or found a bug? We&apos;d love to hear from you.
          </p>
        </div>

        <div style={{ maxWidth: 700, margin: "0 auto", padding: "44px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="contact-grid">
            {contacts.map(c => (
              <div key={c.email} style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "24px 22px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fff0f3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{c.icon}</div>
                <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 15, color: "#1a1a2e", marginBottom: 6 }}>{c.title}</h2>
                <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6, marginBottom: 10 }}>{c.desc}</p>
                <a href={`mailto:${c.email}`} style={{ fontSize: 13, fontWeight: 600, color: "#e8284a", textDecoration: "none" }}>{c.email}</a>
              </div>
            ))}
          </div>

          {/* Response time note */}
          <div style={{ marginTop: 20, background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>⏱️</div>
            <div>
              <div style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 3 }}>Response Time</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>We typically respond within 24–48 hours on business days.</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:540px){ .contact-grid{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}
