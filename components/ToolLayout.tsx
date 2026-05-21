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
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Ad — Top Banner (below nav) */}
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <AdBanner slot="1234567890" format="horizontal" className="rounded-xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-white/30 mt-6 mb-8">
          <Link href="/" className="hover:text-white/60">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white/60">Tools</Link>
          <span>/</span>
          <Link href={categoryHref} className="hover:text-white/60">{category}</Link>
          <span>/</span>
          <span className="text-white/60" aria-current="page">{title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="text-5xl mb-4" role="img" aria-label={title}>{emoji}</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
          <p className="text-white/50 text-lg">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            {["Free", "No Signup", "Browser-Based", "Privacy First"].map(badge => (
              <span key={badge} className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">{badge}</span>
            ))}
          </div>
        </header>

        {/* Tool UI */}
        <div className="rounded-3xl bg-white/3 border border-white/8 p-6 sm:p-8 mb-8">
          <ErrorBoundary toolName={title}>
            {children}
          </ErrorBoundary>
        </div>

        {/* Ad — In-article after tool */}
        <AdSidebar slot="0987654321" />

        {/* How it works */}
        <section className="mb-8 p-6 rounded-2xl bg-white/3 border border-white/8">
          <h2 className="font-bold text-lg mb-4">How to use {title}</h2>
          <ol className="space-y-3 text-sm text-white/60">
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span><span>Open the tool above</span></li>
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span><span>Upload your file or enter your content</span></li>
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span><span>Click the process button and get instant results</span></li>
            <li className="flex gap-3"><span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span><span>Download or copy your output</span></li>
          </ol>
        </section>

        {/* FAQ Section (AEO/AIO) */}
        <section className="mb-8">
          <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: `Is ${title} free?`, a: `Yes, completely free. No account, no credit card, no hidden fees.` },
              { q: `Are my files safe with ${title}?`, a: `Absolutely. Processing happens entirely in your browser. Your files never leave your device.` },
              { q: `Does ${title} work on mobile?`, a: `Yes, it works on all devices — desktop, tablet, and mobile.` },
            ].map(faq => (
              <details key={faq.q} className="group p-4 rounded-xl bg-white/3 border border-white/8 cursor-pointer">
                <summary className="font-medium text-sm flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-white/30 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-white/50 text-sm mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        {related.length > 0 && (
          <section>
            <h2 className="font-bold text-lg mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-3">
              {related.map(r => (
                <Link key={r.href} href={r.href}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-sm hover:bg-white/10 transition-colors">
                  {r.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
