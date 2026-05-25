"use client";
import { useState } from "react";

interface ResumeData {
  name: string; title: string; email: string; phone: string;
  location: string; summary: string; experience: string;
  skills: string; education: string;
}

const FIELDS: { key: keyof ResumeData; label: string; placeholder: string }[] = [
  { key: "name",     label: "Full Name",  placeholder: "e.g. John Smith" },
  { key: "title",    label: "Job Title",  placeholder: "e.g. Software Engineer" },
  { key: "email",    label: "Email",      placeholder: "e.g. john@example.com" },
  { key: "phone",    label: "Phone",      placeholder: "e.g. +1 234 567 8900" },
  { key: "location", label: "Location",   placeholder: "e.g. Dubai, UAE" },
];

export default function AIResumeBuilderClient() {
  const [data, setData] = useState<ResumeData>({
    name: "", title: "", email: "", phone: "",
    location: "", summary: "", experience: "", skills: "", education: "",
  });
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const upd = (k: keyof ResumeData, v: string) => setData(d => ({ ...d, [k]: v }));

  const generate = () => {
    const contact = [data.email, data.phone, data.location].filter(Boolean).join(" | ");
    const summary = data.summary ||
      `Dedicated ${data.title} with a proven track record of delivering results. Skilled in problem-solving, collaboration, and continuous improvement.`;
    const experience = data.experience ||
      `[Company Name] | ${data.title} | [Year] – Present\n• Led key initiatives that improved team productivity\n• Collaborated with cross-functional teams to deliver projects on time\n• Developed strategies that increased efficiency by 20%`;
    const skills = data.skills || "Communication | Problem Solving | Teamwork | Time Management | Leadership";
    const education = data.education || "[Degree] in [Field] | [University] | [Year]";
    const sep = "─".repeat(50);

    setResult(
      `${data.name.toUpperCase()}\n${data.title}\n${contact}\n\n${sep}\nPROFESSIONAL SUMMARY\n${sep}\n${summary}\n\n${sep}\nWORK EXPERIENCE\n${sep}\n${experience}\n\n${sep}\nSKILLS\n${sep}\n${skills}\n\n${sep}\nEDUCATION\n${sep}\n${education}`
    );
  };

  const download = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${data.name || "resume"}_resume.txt`;
    a.click();
  };

  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {FIELDS.map(({ key, label, placeholder }) => (
          <div key={key}>
            <label className="block text-xs text-gray-8000 mb-1">{label}</label>
            <input
              value={data[key]}
              onChange={e => upd(key, e.target.value)}
              placeholder={placeholder}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-400 placeholder-gray-300"
            />
          </div>
        ))}
      </div>

      {(["summary", "experience", "skills", "education"] as const).map(k => (
        <div key={k}>
          <label className="block text-xs text-gray-8000 mb-1 capitalize">
            {k} <span className="text-gray-300">(optional — auto-filled if blank)</span>
          </label>
          <textarea
            rows={k === "experience" ? 4 : 2}
            value={data[k]}
            onChange={e => upd(k, e.target.value)}
            placeholder={
              k === "skills" ? "e.g. JavaScript, React, Node.js, Leadership" :
              k === "experience" ? "[Company] | [Role] | [Year] – Present\n• Achievement 1\n• Achievement 2" :
              undefined
            }
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-400 resize-none placeholder-gray-300"
          />
        </div>
      ))}

      <button
        onClick={generate}
        disabled={!data.name || !data.title}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors"
      >
        📄 Build Resume
      </button>

      {result && (
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-5 text-gray-900 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-80 overflow-auto">
            {result}
          </div>
          <div className="flex gap-3">
            <button onClick={download} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium">
              ⬇️ Download .txt
            </button>
            <button onClick={copy} className={`px-4 py-2.5 rounded-xl text-sm transition-colors ${copied ? "bg-green-600 text-gray-800" : "bg-gray-50 hover:bg-gray-100"}`}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        </div>
      )}
      <p className="text-xs text-gray-300">✓ Free — no API key required</p>
    </div>
  );
}
