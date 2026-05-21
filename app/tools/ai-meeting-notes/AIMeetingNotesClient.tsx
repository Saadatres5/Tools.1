
"use client";
import { useState } from "react";

function extractMeetingNotes(text: string) {
  const lines = text.split(/[.
]+/).map(l=>l.trim()).filter(l=>l.length>10);
  const actionKeywords = ["will","should","need to","must","action","todo","follow up","by","deadline","assigned","responsible","complete","send","schedule","review","update","contact","prepare","create","submit"];
  const decisionKeywords = ["decided","agreed","confirmed","approved","rejected","selected","chosen","resolved","concluded"];
  const actions = lines.filter(l=>actionKeywords.some(k=>l.toLowerCase().includes(k)));
  const decisions = lines.filter(l=>decisionKeywords.some(k=>l.toLowerCase().includes(k)));
  const keyPoints = lines.filter(l=>!actions.includes(l)&&!decisions.includes(l)).slice(0,5);
  return { keyPoints, actions: actions.slice(0,6), decisions: decisions.slice(0,4) };
}

export default function AIMeetingNotesClient() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{keyPoints:string[];actions:string[];decisions:string[]}|null>(null);
  const [copied, setCopied] = useState(false);

  const process = () => { if (text.trim()) setResult(extractMeetingNotes(text)); };
  const format = () => {
    if (!result) return "";
    let out = "MEETING SUMMARY
" + "=".repeat(40) + "

";
    if (result.keyPoints.length) { out += "KEY DISCUSSION POINTS:
"; result.keyPoints.forEach((p,i)=>out+=`${i+1}. ${p}
`); out+="
"; }
    if (result.decisions.length) { out += "DECISIONS MADE:
"; result.decisions.forEach((d,i)=>out+=`${i+1}. ${d}
`); out+="
"; }
    if (result.actions.length) { out += "ACTION ITEMS:
"; result.actions.forEach((a,i)=>out+=`${i+1}. ${a}
`); }
    return out;
  };
  const copy = () => { navigator.clipboard.writeText(format()); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <textarea rows={8} value={text} onChange={e=>setText(e.target.value)}
        placeholder="Paste your meeting transcript or raw notes here..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-violet-500/50 resize-none"/>
      <button onClick={process} disabled={!text.trim()}
        className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        📋 Extract Meeting Notes
      </button>
      {result && (
        <div className="space-y-3">
          <div className="flex justify-end">
            <button onClick={copy} className={`text-xs ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓ Copied All":"Copy All"}</button>
          </div>
          {[["💬 Key Discussion Points","blue",result.keyPoints],["✅ Decisions Made","green",result.decisions],["📌 Action Items","orange",result.actions]].map(([label,color,items])=>(
            (items as string[]).length > 0 && (
              <div key={label as string} className={`p-4 rounded-xl bg-${color}-500/10 border border-${color}-500/20`}>
                <h3 className={`text-xs font-semibold text-${color}-400 mb-2`}>{label as string}</h3>
                <ol className="space-y-1">
                  {(items as string[]).map((item,i)=>(
                    <li key={i} className="text-sm text-white/70 flex gap-2"><span className={`text-${color}-400 flex-shrink-0`}>{i+1}.</span>{item}</li>
                  ))}
                </ol>
              </div>
            )
          ))}
        </div>
      )}
      <p className="text-xs text-white/20">✓ Browser-based extractive analysis — no API key required</p>
    </div>
  );
}
