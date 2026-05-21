import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — AI & File Tools Tips — QuantixTools",
  description: "Learn about AI tools, PDF tips, image editing, and productivity hacks.",
};

const posts = [
  { title: "Best Free PDF Editor Online in 2024", slug: "best-free-pdf-editor", desc: "Compare the top free PDF editors available online with no software to install.", date: "Dec 2024", readTime: "5 min" },
  { title: "AI Tools for Students — Complete Guide", slug: "ai-tools-for-students", desc: "Discover the best free AI tools to help students write, summarize, and study more effectively.", date: "Dec 2024", readTime: "7 min" },
  { title: "How to Compress PDF Without Losing Quality", slug: "compress-pdf-without-losing-quality", desc: "Step-by-step guide to compressing PDF files while keeping them looking sharp.", date: "Nov 2024", readTime: "4 min" },
  { title: "Remove Background from Image — Free Methods", slug: "remove-background-online-free", desc: "The best free tools and methods to remove backgrounds from images in seconds.", date: "Nov 2024", readTime: "5 min" },
  { title: "Best AI Summarizer Tools in 2024", slug: "best-ai-summarizer-tools", desc: "A roundup of the best free AI summarizer tools available right now.", date: "Oct 2024", readTime: "6 min" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-3">Blog</h1>
        <p className="text-white/40 mb-12">Tips, guides, and insights on AI tools and productivity.</p>
        <div className="space-y-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="block p-6 rounded-2xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-white/15 transition-all group">
              <div className="flex items-center gap-3 text-xs text-white/30 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
              <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h2>
              <p className="text-white/50 text-sm">{post.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
