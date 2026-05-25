"use client";
import { useState } from "react";

function extractMeetingNotes(text: string) {
  const lines = text.split(/[\n.!?]+/).map(l => l.trim()).filter(l => l.length > 10);
  const actionKeywords = ["will","should","need to","must","action","todo","follow up","by","deadline","assigned","responsible","complete","send","schedule","review","update","contact","prepare","create","submit"];
  const decisionKeywords = ["decided","agreed","confirmed","approved","rejected","selected","chosen","resolved","concluded"];
  const actions = lines.filter(l => actionKeywords.some(k => l.toLowerCase().includes(k)));
  const decisions = lines.filter(l => decisionKeywords.some(k => l.toLowerCase().includes(k)));
  const keyPoints = lines.filter(l => !actions.includes(l) && !decisions.includes(l)).slice(0, 5);
  return { keyPoints, actions: actions.slice(0, 6), decisions: decisions.slice(0, 4) };
}

export default function AIMeetingNotesClient() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ keyPoints: string[]; actions: string[]; decisions: string[] } | null>(null);
  const [copied, setCopied] = useState(false);

  const process = () => { if (text.trim()) setResult(extractMeetingNotes(text)); };

  const format = () => {
    if (!result) return "";
    let out = "MEETING SUMMARY\n" + "=".repeat(40) + "\n\n";
    if (result.keyPoints.length) {
      out += "KEY DISCUSSION POINTS:\n";
      result.keyPoints.forEach((p, i) => { out += `${i + 1}. ${p}\n`; });
      out += "\n";
    }
    if (result.decisions.length) {
      out += "DECISIONS MADE:\n";
      result.decisions.forEach((d, i) => { out += `${i + 1}. ${d}\n`; });
      out += "\n";
    }
    if (result.actions.length) {
      out += "ACTION ITEMS:\n";
      result.actions.forEach((a, i) => { out += `${i + 1}. ${a}\n`; });
    }
    return out;
  };

  const copy = () => {
    navigator.clipboard.writeText(format());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = result ? [
    { label: "💬 Key Discussion Points", color: "blue", items: result.keyPoints },
    { label: "✅ Decisions Made", color: "green", items: result.decisions },
    { label: "📌 Action Items", color: "orange", items: result.actions },
  ] : [];

  return (
    <div className="space-y-4">
      <textarea
        rows={8}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste your meeting transcript or raw notes here..."
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-violet-500/50 resize-none"
      />
      <button
        onClick={process}
        disabled={!text.trim()}
        className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-40 font-semibold text-sm transition-colors"
      >
        📋 Extract Meeting Notes
      </button>
      {result && (
        <div className="space-y-3">
          <div className="flex justify-end">
            <button onClick={copy} className={`text-xs ${copied ? "text-emerald-700" : "text-blue-600"}`}>
              {copied ? "✓ Copied All" : "Copy All"}
            </button>
          </div>
          {sections.map(({ label, color, items }) =>
            items.length > 0 ? (
              <div key={label} className={`p-4 rounded-xl bg-${color}-500/10 border border-${color}-500/20`}>
                <h3 className={`text-xs font-semibold text-${color}-400 mb-2`}>{label}</h3>
                <ol className="space-y-1">
                  {items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className={`text-${color}-400 flex-shrink-0`}>{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null
          )}
        </div>
      )}
      <p className="text-xs text-gray-300">✓ Browser-based — no API key required</p>
    </div>
  );
}
