import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — AI Tools, PDF Tips & Productivity — QuantixTools",
  description: "Guides and tips on AI tools, PDF editing, image processing, video tools and productivity. Free resources from QuantixTools.",
  alternates: { canonical: "https://quantixtools.com/blog" },
  openGraph: {
    type: "website",
    url: "https://quantixtools.com/blog",
    title: "Blog — AI Tools, PDF Tips & Productivity — QuantixTools",
    description: "Guides and tips on AI tools, PDF editing, image processing and productivity.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — QuantixTools",
    description: "Tips and guides on AI tools, PDF, image, and productivity tools.",
    images: ["/og-image.png"],
  },
};

const posts = [
  { title: "Best Free PDF Editor Online in 2025", slug: "best-free-pdf-editor", desc: "Compare the top free PDF editors available online with no software to install.", date: "Jan 2025", readTime: "5 min", emoji: "📄", category: "PDF" },
  { title: "AI Tools for Students — Complete Guide", slug: "ai-tools-for-students", desc: "Discover the best free AI tools to help students write, summarize, and study more effectively.", date: "Jan 2025", readTime: "7 min", emoji: "🎓", category: "AI" },
  { title: "How to Compress PDF Without Losing Quality", slug: "compress-pdf-without-losing-quality", desc: "Step-by-step guide to compressing PDF files while keeping them looking sharp.", date: "Dec 2024", readTime: "4 min", emoji: "📦", category: "PDF" },
  { title: "Remove Background from Image — Free Methods", slug: "remove-background-online-free", desc: "The best free tools and methods to remove backgrounds from images in seconds.", date: "Dec 2024", readTime: "5 min", emoji: "🖼️", category: "Image" },
  { title: "Best AI Summarizer Tools in 2025", slug: "best-ai-summarizer-tools", desc: "A roundup of the best free AI summarizer tools available right now.", date: "Nov 2024", readTime: "6 min", emoji: "✨", category: "AI" },
];

const catColor: Record<string, { bg: string; color: string }> = {
  PDF:   { bg: "#fff0f3", color: "#e8284a" },
  AI:    { bg: "#f5f3ff", color: "#7c3aed" },
  Image: { bg: "#eff6ff", color: "#2563eb" },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://quantixtools.com/blog",
  "name": "QuantixTools Blog",
  "url": "https://quantixtools.com/blog",
  "description": "Tips, guides, and insights on AI tools, PDF editing, image processing, and productivity.",
  "publisher": { "@type": "Organization", "@id": "https://quantixtools.com/#organization" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quantixtools.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://quantixtools.com/blog" },
    ],
  },
};

export default function BlogPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "56px 24px 44px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 14 }}>✍️</div>
          <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 12 }}>
            Blog
          </h1>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 420, margin: "0 auto" }}>
            Tips, guides, and insights on AI tools and productivity.
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", padding: "44px 24px 80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {posts.map(post => {
              const cat = catColor[post.category] || { bg: "#f1f5f9", color: "#64748b" };
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14,
                    padding: "22px 24px", transition: "all .18s", cursor: "pointer",
                    display: "flex", alignItems: "flex-start", gap: 18,
                  }} className="blog-card">
                    {/* Icon */}
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: cat.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                      {post.emoji}
                    </div>
                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, background: cat.bg, color: cat.color, padding: "2px 9px", borderRadius: 100 }}>{post.category}</span>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.date}</span>
                        <span style={{ fontSize: 12, color: "#cbd5e1" }}>·</span>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.readTime} read</span>
                      </div>
                      <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 6, lineHeight: 1.3 }}>{post.title}</h2>
                      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{post.desc}</p>
                    </div>
                    <div style={{ fontSize: 18, color: "#cbd5e1", flexShrink: 0, marginTop: 4 }}>→</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`.blog-card:hover { border-color: #e8284a !important; box-shadow: 0 6px 24px rgba(232,40,74,.09); transform: translateY(-2px); }`}</style>
    </div>
  );
}
