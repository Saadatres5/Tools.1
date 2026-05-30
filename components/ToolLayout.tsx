"use client";
import React from "react";
import Link from "next/link";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface Requirement {
  label: string;
  value: string;
  color: string;
}

export interface Step {
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedTool {
  name: string;
  icon: string;
  href: string;
}

export interface ToolPageLayoutProps {
  toolName: string;
  toolIcon: string;
  toolDescription: string;
  toolCategory: string;
  toolCategorySlug: string;
  toolSlug: string;
  /** Tailwind-compatible gradient stops e.g. "from-[#0c4a6e] via-[#0e7490] to-[#0d9488]" */
  gradientClass: string;
  /** Hex accent colour used for highlights, borders, badges */
  accentColor: string;
  requirements: Requirement[];
  toolUI: React.ReactNode;
  steps: Step[];
  faqs: FAQ[];
  relatedTools?: RelatedTool[];
  tags?: string[];
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function Breadcrumb({ category, categorySlug, toolName }: { category: string; categorySlug: string; toolName: string }) {
  return (
    <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-5">
      <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
      <span>/</span>
      <Link href="/tools" className="hover:text-white/80 transition-colors">Tools</Link>
      <span>/</span>
      <Link href={`/tools/${categorySlug}`} className="hover:text-white/80 transition-colors">{category}</Link>
      <span>/</span>
      <span className="text-white/85 font-semibold">{toolName}</span>
    </nav>
  );
}

function RequirementsBanner({ requirements }: { requirements: Requirement[] }) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-sky-100 p-4 grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
      {requirements.map((r, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: r.color }} />
          <div>
            <div className="text-[10px] font-bold tracking-wide uppercase mb-0.5" style={{ color: r.color }}>{r.label}</div>
            <div className="text-[13px] font-medium text-slate-800 leading-snug whitespace-pre-line">{r.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HowToUse({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {steps.map((s, i) => (
        <div key={i} className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black text-white shadow-md"
            style={{ background: "linear-gradient(135deg,#0ea5e9,#0d9488)" }}>
            {i + 1}
          </div>
          <div className="pt-0.5">
            <div className="text-sm font-bold text-slate-800 mb-0.5">{s.title}</div>
            <div className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((f, i) => (
        <div key={i}
          className={`rounded-xl border px-4 py-3.5 cursor-pointer transition-all ${open === i ? "bg-white border-sky-300" : "bg-slate-50 border-slate-200 hover:bg-sky-50"}`}
          onClick={() => setOpen(open === i ? null : i)}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-slate-800 leading-snug pr-3">{f.q}</span>
            <span className="text-sky-500 text-xl font-light flex-shrink-0">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="text-[13px] text-slate-500 mt-3 leading-relaxed">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

function Card({ icon, iconBg, title, children }: { icon: string; iconBg: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm shadow-sky-100 overflow-hidden">
      <div className="flex items-center gap-2.5 px-6 pt-5 pb-0">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${iconBg}`}>{icon}</div>
        <h2 className="font-bold text-[17px] text-slate-900" style={{ fontFamily: "'Outfit',sans-serif" }}>{title}</h2>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Layout
// ─────────────────────────────────────────────
export default function ToolPageLayout({
  toolName, toolIcon, toolDescription, toolCategory, toolCategorySlug, toolSlug,
  gradientClass, accentColor, requirements, toolUI, steps, faqs, relatedTools = [], tags = [],
}: ToolPageLayoutProps) {
  return (
    <>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');body{font-family:'DM Sans',sans-serif;}`}</style>

      {/* ── HERO HEADER ── */}
      <div className={`bg-gradient-to-br ${gradientClass} px-6 py-12 relative overflow-hidden`}>
        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-[860px] mx-auto relative z-10">
          <Breadcrumb category={toolCategory} categorySlug={toolCategorySlug} toolName={toolName} />
          <div className="flex items-start gap-5 flex-wrap sm:flex-nowrap">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-[32px] flex-shrink-0 border-2 border-white/25 bg-white/15 backdrop-blur shadow-lg">
              {toolIcon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 drop-shadow"
                style={{ fontFamily: "'Outfit',sans-serif" }}>{toolName}</h1>
              <p className="text-sm text-white/75 leading-relaxed max-w-xl mb-4">{toolDescription}</p>
              <div className="flex flex-wrap gap-2">
                {["✓ Free", "✓ No Signup", "✓ Instant Results", "✓ Download Report", "✓ 100% Private", ...(tags || [])].map((t) => (
                  <span key={t} className="text-[11px] font-bold px-3 py-1 rounded-full border border-white/30 bg-white/12 text-white/90 backdrop-blur">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="max-w-[860px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">

        {/* Requirements */}
        <RequirementsBanner requirements={requirements} />

        {/* Tool UI */}
        <Card icon={toolIcon} iconBg="bg-sky-100" title={`Use ${toolName}`}>{toolUI}</Card>

        {/* How to Use */}
        <Card icon="📋" iconBg="bg-emerald-100" title={`How to Use ${toolName}`}><HowToUse steps={steps} /></Card>

        {/* FAQ */}
        <Card icon="❓" iconBg="bg-amber-100" title="Frequently Asked Questions"><FAQSection faqs={faqs} /></Card>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <Card icon="🔗" iconBg="bg-violet-100" title="Related Tools">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedTools.map((rt) => (
                <Link key={rt.href} href={rt.href}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-200 transition-all text-center group">
                  <span className="text-2xl">{rt.icon}</span>
                  <span className="text-[12px] font-600 text-slate-700 group-hover:text-sky-700 leading-tight">{rt.name}</span>
                </Link>
              ))}
            </div>
          </Card>
        )}
      </main>
    </>
  );
}
