"use client";
import { useState } from "react";

export default function RobotsTxtClient() {
  const [sitemap, setSitemap] = useState("");
  const txt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/` + (sitemap ? `

Sitemap: ${sitemap}` : "");
  const copy = () => navigator.clipboard.writeText(txt);
  const download = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt],{type:"text/plain"}));
    a.download = "robots.txt"; a.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-white/50 mb-1">Sitemap URL (optional)</label>
        <input value={sitemap} onChange={e=>setSitemap(e.target.value)}
          placeholder="https://example.com/sitemap.xml"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-blue-500/50"/>
      </div>
      <div className="p-4 rounded-xl bg-white/3 border border-white/8">
        <p className="text-xs text-white/40 mb-2">Default rules included:</p>
        <div className="grid grid-cols-2 gap-1 text-xs text-white/60">
          <span>✅ Allow: /</span><span>❌ Disallow: /admin/</span>
          <span></span><span>❌ Disallow: /api/</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-xs text-white/40">Generated robots.txt</label>
          <div className="flex gap-3">
            <button onClick={copy} className="text-xs text-blue-400 hover:text-blue-300">Copy</button>
            <button onClick={download} className="text-xs text-green-400 hover:text-green-300">Download</button>
          </div>
        </div>
        <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-green-400 font-mono whitespace-pre">{txt}</pre>
      </div>
    </div>
  );
}
