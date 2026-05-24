"use client";
import { useState } from "react";
const FONTS=[
  {name:"Bold",fn:(t:string)=>t.split("").map(c=>{const a=c.charCodeAt(0);if(a>=65&&a<=90)return String.fromCodePoint(a+120211);if(a>=97&&a<=122)return String.fromCodePoint(a+120205);return c;}).join("")},
  {name:"Italic",fn:(t:string)=>t.split("").map(c=>{const a=c.charCodeAt(0);if(a>=65&&a<=90)return String.fromCodePoint(a+120263);if(a>=97&&a<=122)return String.fromCodePoint(a+120257);return c;}).join("")},
  {name:"Double Struck",fn:(t:string)=>t.split("").map(c=>{const a=c.charCodeAt(0);if(a>=65&&a<=90)return String.fromCodePoint(a+120055);if(a>=97&&a<=122)return String.fromCodePoint(a+120049);return c;}).join("")},
  {name:"Monospace",fn:(t:string)=>t.split("").map(c=>{const a=c.charCodeAt(0);if(a>=65&&a<=90)return String.fromCodePoint(a+120367);if(a>=97&&a<=122)return String.fromCodePoint(a+120361);return c;}).join("")},
  {name:"Circled",fn:(t:string)=>t.split("").map(c=>{const a=c.charCodeAt(0);if(a>=65&&a<=90)return String.fromCodePoint(a+9333);if(a>=48&&a<=57)return String.fromCodePoint(a===48?9450:a+9311);return c;}).join("")},
  {name:"Bubble",fn:(t:string)=>t.replace(/[a-zA-Z]/g,c=>{const a=c.charCodeAt(0);return a>=97?String.fromCodePoint(a+9327):String.fromCodePoint(a+9333);})},
];
export default function FancyFontClient() {
  const [text,setText]=useState("Hello World");
  const [copied,setCopied]=useState("");
  const copy=(t:string)=>{navigator.clipboard.writeText(t);setCopied(t);setTimeout(()=>setCopied(""),2000);};
  return (
    <div className="space-y-4">
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type your text here..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 text-sm"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {FONTS.map(f=>{const out=f.fn(text||"Hello World");return(
          <div key={f.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div><p className="text-xs text-white/30 mb-1">{f.name}</p><p className="text-xl">{out}</p></div>
            <button onClick={()=>copy(out)} className={`text-xs px-3 py-1.5 rounded-lg flex-shrink-0 ml-3 transition-colors ${copied===out?"bg-green-600 text-white":"bg-white/10 hover:bg-white/20 text-white/50"}`}>
              {copied===out?"✓":"Copy"}
            </button>
          </div>
        );})}
      </div>
    </div>
  );
}
