import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — QuantixTools",
  description: "QuantixTools privacy policy. Learn how we handle your data. We process files locally in your browser — your data stays on your device.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://quantixtools.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 14 }}>🔒</div>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 10 }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: "#94a3b8" }}>Last updated: December 2024</p>
        </div>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "44px 24px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {[
              {
                icon: "📖", title: "1. Overview",
                content: <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.8 }}>QuantixTools (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. Our core principle: <strong style={{ color: "#1a1a2e" }}>your files never leave your device.</strong> Most tools process data entirely in your browser.</p>
              },
              {
                icon: "📁", title: "2. Information We Collect",
                content: (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { heading: "Files & Content", text: "Files you upload are processed locally in your browser using JavaScript. They are never uploaded to our servers unless a specific tool explicitly requires server processing." },
                      { heading: "Usage Data", text: "We may collect anonymous usage analytics (page views, tool usage counts) to improve the platform. This data cannot identify you personally." },
                      { heading: "Cookies & Advertising", text: "We use Google AdSense to serve ads. Google may use cookies to personalize ads based on your browsing history. You can opt out via Google Ad Settings." },
                    ].map(item => (
                      <div key={item.heading} style={{ background: "#f8fafc", borderRadius: 10, padding: "14px 16px" }}>
                        <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e", marginBottom: 4 }}>{item.heading}</div>
                        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{item.text}</div>
                      </div>
                    ))}
                  </div>
                )
              },
              {
                icon: "📢", title: "3. Google AdSense",
                content: <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.8 }}>We use Google AdSense (Publisher ID: pub-1017873487030471) to display advertisements. You may opt out of personalized advertising by visiting <a href="https://www.aboutads.info" style={{ color: "#e8284a" }}>aboutads.info</a>.</p>
              },
              {
                icon: "🔐", title: "4. Data Security",
                content: <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.8 }}>Since most processing is browser-based, your files are inherently secure — they never traverse our network. For any server-based features, we use HTTPS encryption and do not permanently store your data.</p>
              },
              {
                icon: "👶", title: "5. Children's Privacy",
                content: <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.8 }}>QuantixTools is not directed at children under 13. We do not knowingly collect personal information from children.</p>
              },
              {
                icon: "⚖️", title: "6. Your Rights (GDPR / CCPA)",
                content: (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {["Right to access your personal data", "Right to delete your personal data", "Right to opt out of personalized advertising", "Right to data portability"].map(right => (
                      <div key={right} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#64748b" }}>
                        <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span> {right}
                      </div>
                    ))}
                  </div>
                )
              },
              {
                icon: "📧", title: "7. Contact",
                content: <p style={{ fontSize: 13, color: "#64748b" }}>For privacy questions, contact us at: <strong style={{ color: "#1a1a2e" }}>privacy@quantixtools.com</strong></p>
              },
            ].map(section => (
              <div key={section.title} style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>{section.icon}</span>
                  <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontWeight: 700, fontSize: 16, color: "#1a1a2e" }}>{section.title}</h2>
                </div>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
