import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — ToolsAI",
  description: "ToolsAI terms of service. Read our usage terms and conditions.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: December 2024</p>

        {[
          { title: "1. Acceptance of Terms", body: "By using ToolsAI, you agree to these terms. If you do not agree, please do not use our platform." },
          { title: "2. Free Service", body: "ToolsAI provides free online tools. We reserve the right to modify, limit, or discontinue any feature at any time without prior notice." },
          { title: "3. Acceptable Use", body: "You agree not to use ToolsAI for any illegal, harmful, or abusive purposes. You may not attempt to reverse engineer, scrape, or overload our systems." },
          { title: "4. Intellectual Property", body: "The ToolsAI platform, its design, and code are protected by copyright. Tools powered by open-source libraries are used under their respective licenses." },
          { title: "5. Disclaimer of Warranties", body: "ToolsAI is provided 'as is' without warranties of any kind. We do not guarantee uptime, accuracy, or fitness for a particular purpose." },
          { title: "6. Limitation of Liability", body: "ToolsAI shall not be liable for any indirect, incidental, or consequential damages arising from use of the platform." },
          { title: "7. Third-Party Advertising", body: "We display advertisements via Google AdSense. ToolsAI is not responsible for the content of third-party ads." },
          { title: "8. Contact", body: "For questions about these terms, contact us at legal@toolsai.com" },
        ].map(s => (
          <section key={s.title} className="mb-6 p-5 rounded-2xl bg-white/3 border border-white/8">
            <h2 className="font-bold text-lg mb-2">{s.title}</h2>
            <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
          </section>
        ))}
      </article>
      <Footer />
    </main>
  );
}
