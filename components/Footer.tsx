import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">T</div>
            <span className="font-bold">ToolsAI</span>
          </div>
          <p className="text-white/40 text-sm mb-4">100% Free AI & File Tools. No signup required. Privacy first.</p>
          <div className="flex flex-wrap gap-2">
            {["Free", "No Signup", "Private"].map(b => (
              <span key={b} className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">{b}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white/80">PDF Tools</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link href="/tools/compress-pdf" className="hover:text-white/70 transition-colors">Compress PDF</Link></li>
            <li><Link href="/tools/merge-pdf" className="hover:text-white/70 transition-colors">Merge PDF</Link></li>
            <li><Link href="/tools/pdf-to-word" className="hover:text-white/70 transition-colors">PDF to Word</Link></li>
            <li><Link href="/tools/ocr" className="hover:text-white/70 transition-colors">OCR PDF</Link></li>
            <li><Link href="/tools/pdf" className="hover:text-white/70 transition-colors">All PDF Tools →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white/80">AI Tools</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link href="/tools/ai-writer" className="hover:text-white/70 transition-colors">AI Writer</Link></li>
            <li><Link href="/tools/ai-summarizer" className="hover:text-white/70 transition-colors">AI Summarizer</Link></li>
            <li><Link href="/tools/remove-background" className="hover:text-white/70 transition-colors">Remove Background</Link></li>
            <li><Link href="/tools/speech-to-text" className="hover:text-white/70 transition-colors">Speech to Text</Link></li>
            <li><Link href="/tools/ai" className="hover:text-white/70 transition-colors">All AI Tools →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white/80">More Tools</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link href="/tools/image" className="hover:text-white/70 transition-colors">Image Tools</Link></li>
            <li><Link href="/tools/video" className="hover:text-white/70 transition-colors">Video Tools</Link></li>
            <li><Link href="/tools/developer" className="hover:text-white/70 transition-colors">Developer Tools</Link></li>
            <li><Link href="/tools/calculators" className="hover:text-white/70 transition-colors">Calculators</Link></li>
            <li><Link href="/tools" className="hover:text-white/70 transition-colors">All Tools →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white/80">Company</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white/70 transition-colors">About</Link></li>
            <li><Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white/70 transition-colors">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} ToolsAI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <Link href="/privacy" className="hover:text-white/40">Privacy</Link>
            <Link href="/terms" className="hover:text-white/40">Terms</Link>
            <span>Made with ❤️ for the web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
