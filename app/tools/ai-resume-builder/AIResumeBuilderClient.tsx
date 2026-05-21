
"use client";
import { useState } from "react";

interface ResumeData { name:string; title:string; email:string; phone:string; location:string; summary:string; experience:string; skills:string; education:string; }

export default function AIResumeBuilderClient() {
  const [data, setData] = useState<ResumeData>({ name:"", title:"", email:"", phone:"", location:"", summary:"", experience:"", skills:"", education:"" });
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const upd = (k: keyof ResumeData, v: string) => setData(d=>({...d,[k]:v}));

  const generate = () => {
    const r = `${data.name.toUpperCase()}
${data.title}
${[data.email,data.phone,data.location].filter(Boolean).join(" | ")}

${"─".repeat(60)}
PROFESSIONAL SUMMARY
${"─".repeat(60)}
${data.summary || `Dedicated ${data.title} with a proven track record of delivering results. Skilled in problem-solving, collaboration, and continuous improvement. Passionate about making a meaningful impact.`}

${"─".repeat(60)}
WORK EXPERIENCE
${"─".repeat(60)}
${data.experience || `[Company Name] | ${data.title} | [Year] – Present
• Led key initiatives that improved team productivity and outcomes
• Collaborated with cross-functional teams to deliver projects on time
• Developed and implemented strategies that increased efficiency`}

${"─".repeat(60)}
SKILLS
${"─".repeat(60)}
${data.skills || "Communication | Problem Solving | Teamwork | Time Management | Attention to Detail | Leadership"}

${"─".repeat(60)}
EDUCATION
${"─".repeat(60)}
${data.education || "[Degree] in [Field] | [University] | [Year]"}
`;
    setResult(r);
  };

  const download = () => {
    const blob = new Blob([result], {type:"text/plain"});
    const a = document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`${data.name||"resume"}_resume.txt`; a.click();
  };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  const fields: [keyof ResumeData, string, string][] = [
    ["name","Full Name","e.g. John Smith"],["title","Job Title","e.g. Software Engineer"],
    ["email","Email","e.g. john@example.com"],["phone","Phone","e.g. +1 234 567 8900"],
    ["location","Location","e.g. Dubai, UAE"],
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fields.map(([k,l,p])=>(
          <div key={k}>
            <label className="block text-xs text-white/50 mb-1">{l}</label>
            <input value={data[k]} onChange={e=>upd(k,e.target.value)} placeholder={p}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50 placeholder-white/20"/>
          </div>
        ))}
      </div>
      {(["summary","experience","skills","education"] as const).map(k=>(
        <div key={k}>
          <label className="block text-xs text-white/50 mb-1 capitalize">{k} <span className="text-white/20">(optional — auto-filled if blank)</span></label>
          <textarea rows={k==="experience"?4:2} value={data[k]} onChange={e=>upd(k,e.target.value)}
            placeholder={k==="skills"?"e.g. JavaScript, React, Node.js, Communication, Leadership":k==="experience"?"[Company] | [Role] | [Year] – Present
• Achievement 1
• Achievement 2":undefined}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50 resize-none placeholder-white/20"/>
        </div>
      ))}
      <button onClick={generate} disabled={!data.name||!data.title}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📄 Build Resume
      </button>
      {result && (
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-5 text-gray-900 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-80 overflow-auto">{result}</div>
          <div className="flex gap-3">
            <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">⬇️ Download .txt</button>
            <button onClick={copy} className={`px-4 py-2.5 rounded-xl text-sm transition-colors ${copied?"bg-green-600 text-white":"bg-white/5 hover:bg-white/10"}`}>{copied?"✓":"Copy"}</button>
          </div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
