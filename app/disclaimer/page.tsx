import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — QuantixTools",
  description: "QuantixTools disclaimer. Read our terms of use and limitations of liability.",
  alternates: { canonical: "https://quantixtools.com/disclaimer" },
};

const sections = [
  { title: "General Disclaimer", body: "The information and tools provided on QuantixTools are for general informational and utility purposes only. QuantixTools makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the tools for any purpose." },
  { title: "No Professional Advice", body: "Nothing on QuantixTools constitutes legal, financial, medical, or professional advice. Tools such as calculators, generators, and AI-powered features are provided for convenience only. Always consult a qualified professional for important decisions." },
  { title: "AI-Generated Content", body: "AI-powered tools on QuantixTools generate content automatically. This content may be inaccurate, incomplete, or biased. QuantixTools takes no responsibility for decisions made based on AI-generated content. Always review and verify AI outputs before use." },
  { title: "Browser-Based Processing", body: "Most tools on QuantixTools process files locally in your browser. While we take privacy seriously, QuantixTools accepts no liability for any data loss, corruption, or unintended processing that may occur during use." },
  { title: "Third-Party Advertising", body: "QuantixTools displays advertisements served by Google AdSense and other third-party networks. QuantixTools is not responsible for the content, accuracy, or practices of any third-party advertisers." },
  { title: "External Links", body: "QuantixTools may contain links to external websites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them." },
  { title: "Limitation of Liability", body: "In no event shall QuantixTools be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform or its tools, even if advised of the possibility of such damages." },
  { title: "Changes to Disclaimer", body: "QuantixTools reserves the right to update this disclaimer at any time. Continued use of the platform constitutes acceptance of any changes." },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-2">Disclaimer</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: {new Date().getFullYear()}</p>
        <div className="space-y-4">
          {sections.map(s => (
            <section key={s.title} className="p-5 rounded-2xl bg-white/3 border border-white/8">
              <h2 className="font-bold text-base mb-2">{s.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
