"use client";
import { useState } from "react";

const SYNONYMS: Record<string,string[]> = {
  "important":"crucial,essential,significant,vital,key".split(","),
  "help":"assist,support,aid,facilitate,enable".split(","),
  "use":"utilize,employ,apply,leverage,harness".split(","),
  "show":"demonstrate,illustrate,reveal,display,present".split(","),
  "get":"obtain,acquire,achieve,gain,receive".split(","),
  "make":"create,produce,develop,build,generate".split(","),
  "good":"excellent,outstanding,superior,remarkable,exceptional".split(","),
  "bad":"poor,inadequate,substandard,problematic,challenging".split(","),
  "big":"substantial,significant,considerable,extensive,major".split(","),
  "small":"minimal,limited,modest,minor,negligible".split(","),
  "very":"extremely,highly,particularly,notably,remarkably".split(","),
  "also":"additionally,furthermore,moreover,likewise,similarly".split(","),
  "but":"however,nevertheless,yet,although,nonetheless".split(","),
  "so":"therefore,consequently,thus,accordingly,hence".split(","),
  "need":"require,necessitate,demand,call for,depend on".split(","),
  "think":"believe,consider,perceive,understand,recognize".split(","),
  "many":"numerous,multiple,various,several,countless".split(","),
  "change":"modify,transform,alter,revise,update".split(","),
  "start":"begin,initiate,commence,launch,establish".split(","),
  "end":"conclude,complete,finish,terminate,finalize".split(","),
};

function paraphrase(text: string, style: string): string {
  let result = text;
  // Replace common words with synonyms
  Object.entries(SYNONYMS).forEach(([word, syns]) => {
    const re = new RegExp(`\b${word}\b`, "gi");
    result = result.replace(re, () => {
      const syn = syns[Math.floor(Math.random() * syns.length)];
      return syn.charAt(0) === word.charAt(0).toUpperCase() ? syn.charAt(0).toUpperCase() + syn.slice(1) : syn;
    });
  });
  if (style === "Formal") {
    result = result.replace(/I'm/g,"I am").replace(/don't/g,"do not")
      .replace(/can't/g,"cannot").replace(/won't/g,"will not")
      .replace(/it's/g,"it is").replace(/there's/g,"there is");
  }
  if (style === "Simplified") {
    result = result.replace(/utilize/gi,"use").replace(/facilitate/gi,"help")
      .replace(/commence/gi,"start").replace(/terminate/gi,"end");
  }
  return result;
}

export default function AIParaphraserClient() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("Standard");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const styles = ["Standard","Formal","Casual","Simplified","Academic"];
  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000); };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {styles.map(s => (
          <button key={s} onClick={() => setStyle(s)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${style===s?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>{s}</button>
        ))}
      </div>
      <textarea rows={6} value={text} onChange={e=>setText(e.target.value)}
        placeholder="Paste the text you want to paraphrase..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <button onClick={() => setResult(paraphrase(text, style))} disabled={!text.trim()}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        🔄 Paraphrase
      </button>
      {result && (
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-white/40">Paraphrased Text</label>
            <button onClick={copy} className={`text-xs ${copied?"text-green-400":"text-blue-400"}`}>{copied?"✓ Copied":"Copy"}</button>
          </div>
          <div className="bg-white/5 border border-white/8 rounded-2xl p-5 text-sm text-white/80 leading-relaxed whitespace-pre-wrap">{result}</div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ 100% browser-based — no API required</p>
    </div>
  );
}
