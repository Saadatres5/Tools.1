
"use client";
import { useState } from "react";
const DEFAULT=`# Hello World

This is **bold** and *italic* text.

## Features
- Item one
- Item two
- Item three

> A blockquote example

\`\`\`js
const hello = "world";
console.log(hello);
\`\`\`

[Visit QuantixTools](https://quantixtools.com)
`;
function renderMd(md:string){
  return md
    .replace(/^### (.+)$/gm,"<h3 class=\"text-lg font-bold mt-4 mb-2\">$1</h3>")
    .replace(/^## (.+)$/gm,"<h2 class=\"text-xl font-bold mt-5 mb-2\">$1</h2>")
    .replace(/^# (.+)$/gm,"<h1 class=\"text-2xl font-bold mt-5 mb-3\">$1</h1>")
    .replace(/```[\w]*\n([\s\S]*?)```/gm,"<pre class=\"bg-black/40 rounded-xl p-4 my-3 text-sm overflow-auto\"><code>$1</code></pre>")
    .replace(/`([^`]+)`/g,"<code class=\"bg-white/10 px-1.5 py-0.5 rounded text-sm text-green-400\">$1</code>")
    .replace(/^> (.+)$/gm,"<blockquote class=\"border-l-4 border-blue-500 pl-4 text-white/60 my-2\">$1</blockquote>")
    .replace(/^- (.+)$/gm,"<li class=\"ml-4 list-disc\">$1</li>")
    .replace(/\*\*(.+?)\*\*/g,"<strong class=\"font-bold\">$1</strong>")
    .replace(/\*(.+?)\*/g,"<em class=\"italic\">$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g,"<a href=\"$2\" class=\"text-blue-400 hover:underline\" target=\"_blank\">$1</a>")
    .replace(/\n/g,"<br/>");
}
export default function MarkdownClient() {
  const [md,setMd]=useState(DEFAULT);
  const [view,setView]=useState<"split"|"preview">("split");
  return (
    <div className="space-y-3">
      <div className="flex gap-2 justify-end">
        {(["split","preview"] as const).map(v=>(
          <button key={v} onClick={()=>setView(v)} className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${view===v?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>
            {v==="split"?"Split View":"Preview Only"}
          </button>
        ))}
      </div>
      <div className={`grid gap-4 ${view==="split"?"grid-cols-2":"grid-cols-1"}`}>
        {view==="split"&&(
          <div><label className="block text-xs text-white/40 mb-1">Markdown Editor</label>
            <textarea value={md} onChange={e=>setMd(e.target.value)} rows={16}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-400 outline-none focus:border-blue-500/50 resize-none font-mono"/></div>
        )}
        <div><label className="block text-xs text-white/40 mb-1">Preview</label>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 min-h-64 text-sm text-white/80 leading-relaxed prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{__html:renderMd(md)}}/></div>
      </div>
    </div>
  );
}
