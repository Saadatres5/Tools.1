import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — QuantixTools",
  description: "QuantixTools terms of service. Read our usage terms and conditions.",
  alternates: { canonical: "https://quantixtools.com/terms" },
};

const sections = [
  { icon: "✅", title: "1. Acceptance of Terms", body: "By using QuantixTools, you agree to these terms. If you do not agree, please do not use our platform." },
  { icon: "🆓", title: "2. Free Service", body: "QuantixTools provides free online tools. We reserve the right to modify, limit, or discontinue any feature at any time without prior notice." },
  { icon: "📏", title: "3. Acceptable Use", body: "You agree not to use QuantixTools for any illegal, harmful, or abusive purposes. You may not attempt to reverse engineer, scrape, or overload our systems." },
  { icon: "©️", title: "4. Intellectual Property", body: "The QuantixTools platform, its design, and code are protected by copyright. Tools powered by open-source libraries are used under their respective licenses." },
  { icon: "⚠️", title: "5. Disclaimer of Warranties", body: "QuantixTools is provided 'as is' without warranties of any kind. We do not guarantee uptime, accuracy, or fitness for a particular purpose." },
  { icon: "🛡️", title: "6. Limitation of Liability", body: "QuantixTools shall not be liable for any indirect, incidental, or consequential damages arising from use of the platform." },
  { icon: "📢", title: "7. Third-Party Advertising", body: "We display advertisements via Google AdSense. QuantixTools is not responsible for the content of third-party ads." },
  { icon: "📧", title: "8. Contact", body: "For questions about these terms, contact us at legal@quantixtools.com" },
];

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 14 }}>📜</div>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 10 }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: "#94a3b8" }}>Last updated: December 2024</p>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "44px 24px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sections.map(s => (
              <div key={s.title} style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 15, color: "#1a1a2e" }}>{s.title}</h2>
                </div>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
