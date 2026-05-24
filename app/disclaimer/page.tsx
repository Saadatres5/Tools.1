import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — QuantixTools",
  description: "QuantixTools disclaimer. Read our terms of use and limitations of liability.",
  alternates: { canonical: "https://quantixtools.com/disclaimer" },
};

const sections = [
  { icon: "📋", title: "General Disclaimer", body: "The information and tools provided on QuantixTools are for general informational and utility purposes only. QuantixTools makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the tools for any purpose." },
  { icon: "⚖️", title: "No Professional Advice", body: "Nothing on QuantixTools constitutes legal, financial, medical, or professional advice. Tools such as calculators, generators, and AI-powered features are provided for convenience only. Always consult a qualified professional for important decisions." },
  { icon: "🤖", title: "AI-Generated Content", body: "AI-powered tools on QuantixTools generate content automatically. This content may be inaccurate, incomplete, or biased. QuantixTools takes no responsibility for decisions made based on AI-generated content. Always review and verify AI outputs before use." },
  { icon: "🌐", title: "Browser-Based Processing", body: "Most tools on QuantixTools process files locally in your browser. While we take privacy seriously, QuantixTools accepts no liability for any data loss, corruption, or unintended processing that may occur during use." },
  { icon: "📢", title: "Third-Party Advertising", body: "QuantixTools displays advertisements served by Google AdSense and other third-party networks. QuantixTools is not responsible for the content, accuracy, or practices of any third-party advertisers." },
  { icon: "🔗", title: "External Links", body: "QuantixTools may contain links to external websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them." },
  { icon: "🛡️", title: "Limitation of Liability", body: "In no event shall QuantixTools be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform or its tools, even if advised of the possibility of such damages." },
  { icon: "🔄", title: "Changes to Disclaimer", body: "QuantixTools reserves the right to update this disclaimer at any time. Continued use of the platform constitutes acceptance of any changes." },
];

export default function DisclaimerPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <Navbar />
      <main id="main-content">
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 14 }}>⚠️</div>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 10 }}>Disclaimer</h1>
          <p style={{ fontSize: 13, color: "#94a3b8" }}>Last updated: {new Date().getFullYear()}</p>
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
