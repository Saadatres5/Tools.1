
"use client";
import { useState } from "react";

const EMAIL_TEMPLATES: Record<string,(ctx:string)=>string> = {
  "Professional follow-up": (ctx) => `Subject: Following Up — ${ctx}

Hi [Name],

I wanted to follow up on my previous message regarding ${ctx}. I understand you may be busy, but I'd love to connect at your earliest convenience.

Please let me know if you need any additional information or if there's a better time to discuss this.

Best regards,
[Your Name]`,
  "Cold outreach": (ctx) => `Subject: Quick Question About ${ctx}

Hi [Name],

I came across your work and was really impressed. I'm reaching out because I believe there could be a great opportunity for us to collaborate on ${ctx}.

Would you be open to a 15-minute call this week? I'd love to share some ideas that I think you'll find valuable.

Looking forward to hearing from you.

Best,
[Your Name]`,
  "Thank you email": (ctx) => `Subject: Thank You — ${ctx}

Hi [Name],

I just wanted to take a moment to thank you for ${ctx}. It truly meant a lot and made a real difference.

Your time and effort are greatly appreciated. I look forward to staying in touch and hope to return the favor in the future.

With gratitude,
[Your Name]`,
  "Apology email": (ctx) => `Subject: My Sincere Apologies — ${ctx}

Hi [Name],

I am writing to sincerely apologize for ${ctx}. I take full responsibility for what happened and understand the inconvenience this may have caused.

I am committed to making this right. Please let me know how I can best address the situation, and I will do everything I can to resolve it promptly.

Sincerely,
[Your Name]`,
  "Meeting request": (ctx) => `Subject: Meeting Request — ${ctx}

Hi [Name],

I hope this message finds you well. I'd like to schedule a meeting to discuss ${ctx} at your convenience.

Would any of the following times work for you?
• Monday at 10:00 AM
• Wednesday at 2:00 PM
• Friday at 11:00 AM

Please feel free to suggest an alternative if none of these work. I look forward to speaking with you.

Best regards,
[Your Name]`,
  "Job application": (ctx) => `Subject: Application for ${ctx} Position

Dear Hiring Manager,

I am writing to express my strong interest in the ${ctx} position. With my background and passion for delivering results, I am confident I would be a valuable addition to your team.

I have attached my resume for your review and would welcome the opportunity to discuss how my skills align with your needs.

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
};

export default function AIEmailWriterClient() {
  const [context, setContext] = useState("");
  const [type, setType] = useState(Object.keys(EMAIL_TEMPLATES)[0]);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => { if (context.trim()) setResult(EMAIL_TEMPLATES[type](context)); };
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-white/50 mb-2">Email Type</label>
        <select value={type} onChange={e=>setType(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500/50">
          {Object.keys(EMAIL_TEMPLATES).map(t=><option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs text-white/50 mb-1">Context or purpose</label>
        <input value={context} onChange={e=>setContext(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()}
          placeholder="e.g. job interview follow-up, project proposal, Q3 report"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50"/>
      </div>
      <button onClick={generate} disabled={!context.trim()}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📧 Write Email
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-white/40">Generated Email</label>
            <button onClick={copy} className={`text-xs ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed whitespace-pre-wrap font-mono">{result}</div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
