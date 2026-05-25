import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = "https://quantixtools.com";

interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  content: string;
  related: { title: string; slug: string }[];
}

const posts: Record<string, Post> = {
  "best-free-pdf-editor": {
    title: "Best Free PDF Editor Online in 2025",
    description: "Compare the top free PDF editors available online with no software to install. Edit, compress, merge and convert PDFs for free.",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "PDF",
    emoji: "📄",
    content: `
## What Makes a Great Free PDF Editor?

A great free PDF editor should let you edit text, add annotations, compress file size, merge documents, and convert formats — all without requiring expensive software or a subscription.

## Top Free PDF Tools in 2025

**1. Compress PDF**
Reduce your PDF file size without losing quality. Perfect for email attachments and web uploads. Works entirely in your browser.

**2. Merge PDF**
Combine multiple PDF files into a single document in seconds. Drag, drop, and merge — no software needed.

**3. Split PDF**
Extract specific pages or split a large PDF into smaller files. Ideal for sharing only the relevant sections.

**4. PDF to Word**
Convert PDF files to editable Word documents with high accuracy. Preserves formatting and layout.

**5. OCR PDF**
Extract text from scanned PDF files using optical character recognition. Works with image-based PDFs.

## Why Browser-Based PDF Tools Are Better

Browser-based tools process files locally on your device — your documents never get uploaded to a server. This means:
- **Privacy**: Your files stay on your device
- **Speed**: No upload/download waiting
- **Security**: No risk of data breaches
- **Convenience**: Works on any device with a browser

## Conclusion

For 99% of PDF tasks, free online tools are more than sufficient. QuantixTools offers 15+ PDF tools completely free, with no signup required.
    `,
    related: [
      { title: "Compress PDF Without Losing Quality", slug: "compress-pdf-without-losing-quality" },
      { title: "Best AI Summarizer Tools", slug: "best-ai-summarizer-tools" },
    ],
  },
  "ai-tools-for-students": {
    title: "Best Free AI Tools for Students in 2025",
    description: "Discover the best free AI tools to help students write, summarize, and study more effectively. All free, no signup.",
    date: "January 20, 2025",
    readTime: "7 min read",
    category: "AI",
    emoji: "🎓",
    content: `
## How AI Tools Are Changing Education

AI tools are transforming how students learn, write, and research. From instant essay drafts to complex math explanations, the right AI tools can save hours every week.

## Essential Free AI Tools for Students

**1. AI Summarizer**
Paste any long article, research paper, or textbook chapter and get a concise summary in seconds. Perfect for studying and research.

**2. AI Writer**
Generate essay drafts, blog posts, and writing samples. Use it as a starting point, then add your own voice and research.

**3. AI Paraphraser**
Rewrite sentences and paragraphs to avoid accidental plagiarism and improve clarity.

**4. AI Translator**
Instantly translate text between 50+ languages. Great for foreign language courses and international research.

**5. Grammar Checker**
Automatically detect and fix grammar, spelling, and punctuation errors before submitting assignments.

**6. Citation Generator**
Generate properly formatted citations in APA, MLA, Chicago, and more — in seconds.

**7. Math Solver**
Get step-by-step solutions to math problems. Great for checking your work and understanding concepts.

## Tips for Using AI Ethically as a Student

- Always review and edit AI-generated content
- Use AI as a starting point, not a final submission
- Check your institution's AI policy
- Focus on learning, not just completing assignments

## Conclusion

The best AI tools for students are those that enhance learning rather than replace it. All the tools above are free on QuantixTools — no signup needed.
    `,
    related: [
      { title: "Best AI Summarizer Tools", slug: "best-ai-summarizer-tools" },
      { title: "Best Free PDF Editor Online", slug: "best-free-pdf-editor" },
    ],
  },
  "compress-pdf-without-losing-quality": {
    title: "How to Compress PDF Without Losing Quality",
    description: "Step-by-step guide to compressing PDF files while keeping them sharp. Free, online, no software required.",
    date: "December 10, 2024",
    readTime: "4 min read",
    category: "PDF",
    emoji: "📦",
    content: `
## Why Compress PDF Files?

Large PDF files are difficult to email, slow to upload, and consume storage space. Compressing PDFs reduces file size while maintaining readable quality.

## Step-by-Step: Compress PDF Free Online

**Step 1**: Open the Compress PDF tool on QuantixTools.

**Step 2**: Click "Choose File" or drag and drop your PDF onto the upload area.

**Step 3**: Select your compression level:
- **Light compression**: 20-30% size reduction, maximum quality
- **Standard compression**: 40-60% reduction, good quality
- **Maximum compression**: 70-80% reduction, acceptable quality

**Step 4**: Click "Compress PDF" and wait a few seconds.

**Step 5**: Download your compressed file.

## How Much Can You Compress a PDF?

Results vary depending on content:
- Text-heavy PDFs: 20-40% reduction
- Image-heavy PDFs: 50-80% reduction
- Scanned documents: 30-60% reduction

## Why Our PDF Compressor Works in Your Browser

QuantixTools compresses PDFs using browser-based technology — your file never leaves your device. No uploads, no privacy risks, no size limits.

## Conclusion

Compressing PDFs is simple with free online tools. Try QuantixTools Compress PDF — no signup, no watermark, instant results.
    `,
    related: [
      { title: "Best Free PDF Editor Online", slug: "best-free-pdf-editor" },
      { title: "Remove Background from Image Free", slug: "remove-background-online-free" },
    ],
  },
  "remove-background-online-free": {
    title: "Remove Background from Image Online — Free Methods",
    description: "The best free tools and methods to remove backgrounds from images in seconds. No Photoshop needed.",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Image",
    emoji: "🖼️",
    content: `
## Remove Background Without Photoshop

Removing an image background used to require Photoshop expertise. Today, AI-powered tools do it in seconds — completely free.

## Step-by-Step: Remove Background Free

**Step 1**: Open the Remove Background tool on QuantixTools.

**Step 2**: Upload your image (JPG, PNG, WEBP — up to 10MB).

**Step 3**: The AI automatically detects and removes the background.

**Step 4**: Preview the result with a transparent background.

**Step 5**: Download as PNG (with transparency) or choose a custom background color.

## Best Uses for Background Removal

- **Product photos**: White or transparent backgrounds for e-commerce
- **Profile photos**: Professional headshots for LinkedIn, resumes
- **Signatures**: Extract signatures for digital documents
- **Presentations**: Cut out subjects for slides
- **Social media**: Create clean, professional content

## Why AI Background Removal Works So Well

Modern AI models are trained on millions of images. They can accurately detect hair, fingers, complex edges, and transparent objects that manual selection tools struggle with.

## Conclusion

Free AI background removal tools have made professional image editing accessible to everyone. QuantixTools offers background removal free, with no signup required.
    `,
    related: [
      { title: "Best AI Summarizer Tools", slug: "best-ai-summarizer-tools" },
      { title: "Best Free PDF Editor Online", slug: "best-free-pdf-editor" },
    ],
  },
  "best-ai-summarizer-tools": {
    title: "Best AI Summarizer Tools in 2025 — Free Online",
    description: "A roundup of the best free AI text summarizer tools available in 2025. Compare features and find the best one for you.",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "AI",
    emoji: "✨",
    content: `
## What Is an AI Text Summarizer?

An AI text summarizer uses machine learning to extract the key points from long documents and present them in a shorter, digestible format — saving time and improving comprehension.

## Best Free AI Summarizer Tools in 2025

**1. QuantixTools AI Summarizer**
- Completely free, no signup
- Summarizes up to 10,000 words
- Multiple output lengths (short, medium, detailed)
- Works in browser, privacy first

**2. Use Cases for AI Summarizers**
- Research papers and academic articles
- News articles and blog posts
- Meeting transcripts
- Legal documents
- Product manuals

## How to Get the Best Summaries

**Tip 1**: Use well-formatted source text. Clean text produces better summaries.

**Tip 2**: Choose the right summary length. Short for quick overviews, detailed for thorough understanding.

**Tip 3**: Verify important facts. AI summarizers can occasionally miss nuance — always cross-check critical information.

**Tip 4**: Use alongside the AI PDF Summarizer for PDF documents.

## AI Summarizer vs Manual Summary

| Feature | AI Summarizer | Manual |
|---|---|---|
| Speed | Seconds | Hours |
| Consistency | High | Variable |
| Cost | Free | Time |
| Customization | Limited | Full |

## Conclusion

AI summarizer tools are among the most useful productivity tools available today. QuantixTools offers a free AI summarizer with no account required — start summarizing in seconds.
    `,
    related: [
      { title: "Best Free AI Tools for Students", slug: "ai-tools-for-students" },
      { title: "Best Free PDF Editor Online", slug: "best-free-pdf-editor" },
    ],
  },
};

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };

  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "QuantixTools",
      publishedTime: post.date,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const catColors: Record<string, { bg: string; color: string }> = {
    PDF: { bg: "#fff0f3", color: "#e8284a" },
    AI: { bg: "#f5f3ff", color: "#7c3aed" },
    Image: { bg: "#eff6ff", color: "#2563eb" },
  };
  const cat = catColors[post.category] || { bg: "#f1f5f9", color: "#475569" };

  // Parse markdown-like content to HTML
  const renderContent = (md: string) => {
    return md
      .trim()
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("## ")) return <h2 key={i} style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 20, fontWeight: 700, color: "#1a1a2e", margin: "28px 0 10px" }}>{line.slice(3)}</h2>;
        if (line.startsWith("**") && line.endsWith("**")) return <h3 key={i} style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e", margin: "16px 0 6px" }}>{line.slice(2, -2)}</h3>;
        if (line.startsWith("- ")) return <li key={i} style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, marginLeft: 20 }}>{line.slice(2)}</li>;
        if (line.startsWith("|")) return null; // skip table lines for simplicity
        if (line.trim() === "") return <div key={i} style={{ height: 8 }} />;
        return <p key={i} style={{ fontSize: 14, color: "#475569", lineHeight: 1.85, marginBottom: 6 }}>{line}</p>;
      });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Organization", "name": "QuantixTools", "url": BASE_URL },
    "publisher": { "@type": "Organization", "name": "QuantixTools", "logo": { "@type": "ImageObject", "url": `${BASE_URL}/favicon.svg` } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${BASE_URL}/blog/${slug}` },
    "image": `${BASE_URL}/og-image.png`,
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e8eaf0", padding: "40px 24px 32px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav style={{ display: "flex", gap: 6, fontSize: 12, color: "#94a3b8", marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/blog" style={{ color: "#94a3b8", textDecoration: "none" }}>Blog</Link>
              <span>/</span>
              <span style={{ color: "#475569", fontWeight: 600 }}>{post.title}</span>
            </nav>

            {/* Category + meta */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 10, fontWeight: 700, background: cat.bg, color: cat.color, padding: "3px 10px", borderRadius: 100 }}>{post.category}</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.date}</span>
              <span style={{ color: "#cbd5e1" }}>·</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.readTime}</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: 14 }}>
              {post.title}
            </h1>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7 }}>{post.description}</p>
          </div>
        </div>

        {/* Article body */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "36px 24px 80px" }}>
          <div style={{ background: "#fff", border: "1px solid #e8eaf0", borderRadius: 14, padding: "28px 32px", marginBottom: 24 }}>
            {renderContent(post.content)}
          </div>

          {/* Related posts */}
          {post.related.length > 0 && (
            <div>
              <h2 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: 17, fontWeight: 700, color: "#1a1a2e", marginBottom: 14 }}>Related Articles</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {post.related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: "block", background: "#fff", border: "1px solid #e8eaf0", borderRadius: 10, padding: "14px 18px", textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#1a1a2e", transition: "all .15s" }} className="related-blog-link">
                    → {r.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <style>{`.related-blog-link:hover { border-color: #e8284a !important; color: #e8284a !important; }`}</style>
    </div>
  );
}
