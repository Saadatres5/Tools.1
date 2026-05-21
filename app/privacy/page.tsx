import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — ToolsAI",
  description: "ToolsAI privacy policy. Learn how we handle your data. We process files locally in your browser — your data stays on your device.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 pt-28 pb-20 prose prose-invert prose-sm max-w-none">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: December 2024</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Overview</h2>
          <p className="text-white/60 leading-relaxed">ToolsAI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights. Our core principle: your files never leave your device. Most tools process data entirely in your browser.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
          <div className="space-y-4 text-white/60">
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <h3 className="font-semibold text-white mb-2">Files & Content</h3>
              <p>Files you upload are processed <strong className="text-white">locally in your browser</strong> using JavaScript. They are never uploaded to our servers unless a specific tool explicitly requires server processing (in which case we notify you).</p>
            </div>
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <h3 className="font-semibold text-white mb-2">Usage Data</h3>
              <p>We may collect anonymous usage analytics (page views, tool usage counts) to improve the platform. This data cannot identify you personally.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/3 border border-white/8">
              <h3 className="font-semibold text-white mb-2">Cookies & Advertising</h3>
              <p>We use Google AdSense to serve ads. Google may use cookies to personalize ads based on your browsing history. You can opt out via <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:underline">Google Ad Settings</a>. See <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline">Google&apos;s Privacy Policy</a> for details.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Google AdSense</h2>
          <p className="text-white/60 leading-relaxed mb-3">We use Google AdSense (Publisher ID: pub-1017873487030471) to display advertisements. Google AdSense uses cookies and web beacons to serve ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.aboutads.info" className="text-blue-400 hover:underline">aboutads.info</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Data Security</h2>
          <p className="text-white/60 leading-relaxed">Since most processing is browser-based, your files are inherently secure — they never traverse our network. For any server-based features, we use HTTPS encryption and do not permanently store your data.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. Children&apos;s Privacy</h2>
          <p className="text-white/60 leading-relaxed">ToolsAI is not directed at children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, contact us immediately.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">6. Your Rights (GDPR / CCPA)</h2>
          <ul className="text-white/60 space-y-2 list-disc list-inside">
            <li>Right to access your personal data</li>
            <li>Right to delete your personal data</li>
            <li>Right to opt out of personalized advertising</li>
            <li>Right to data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">7. Contact</h2>
          <p className="text-white/60">For privacy questions, contact us at: <strong className="text-white">privacy@toolsai.com</strong></p>
        </section>
      </article>
      <Footer />
    </main>
  );
}
