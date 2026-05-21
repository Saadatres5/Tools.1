
"use client";
import { useState } from "react";

function tryEval(expr: string): string {
  try {
    // Safe arithmetic evaluator — no eval()
    const clean = expr
      .replace(/\^/g,"**")
      .replace(/x/gi,"*")
      .replace(/÷/g,"/")
      .replace(/×/g,"*")
      .replace(/π/g, String(Math.PI))
      .replace(/e(?![0-9])/g, String(Math.E));

    // Only allow safe characters
    if (!/^[0-9+\-*/().%\s*]+$/.test(clean)) throw new Error("Use numbers and operators only");
    // eslint-disable-next-line no-new-func
    const result = Function(`"use strict"; return (${clean})`)();
    if (typeof result !== "number" || !isFinite(result)) throw new Error("Invalid result");
    return String(Math.round(result * 1e10) / 1e10);
  } catch (e: unknown) {
    throw new Error(e instanceof Error ? e.message : "Could not solve");
  }
}

const EXAMPLES = [
  "2 + 2", "(5 * 8) / 4", "15% of 200", "√144", "2^10", "3.14 * 5^2",
];

export default function MathSolverClient() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState<{expr:string;result:string}[]>([]);

  const solve = () => {
    if (!expr.trim()) return;
    setError("");
    // Handle "X% of Y" pattern
    const pctMatch = expr.match(/(\d+(?:\.\d+)?)%\s*of\s*(\d+(?:\.\d+)?)/i);
    if (pctMatch) {
      const r = String((parseFloat(pctMatch[1])/100) * parseFloat(pctMatch[2]));
      setResult(r);
      setHistory(h=>[{expr,result:r},...h].slice(0,10));
      return;
    }
    // Handle √ (sqrt)
    const sqrtMatch = expr.match(/^√(\d+(?:\.\d+)?)$/);
    if (sqrtMatch) {
      const r = String(Math.sqrt(parseFloat(sqrtMatch[1])));
      setResult(r);
      setHistory(h=>[{expr,result:r},...h].slice(0,10));
      return;
    }
    try {
      const r = tryEval(expr);
      setResult(r);
      setHistory(h=>[{expr,result:r},...h].slice(0,10));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Could not solve");
      setResult("");
    }
  };

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <div className="flex flex-wrap gap-2">
        {EXAMPLES.map(e=>(
          <button key={e} onClick={()=>setExpr(e)}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/50 transition-colors">{e}</button>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={expr} onChange={e=>setExpr(e.target.value)} onKeyDown={e=>e.key==="Enter"&&solve()}
          placeholder="Enter expression e.g. 25% of 400, √144, (5+3)*2"
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 font-mono"/>
        <button onClick={solve} className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium text-sm transition-colors">=</button>
      </div>
      {error && <p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">❌ {error}</p>}
      {result && (
        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-center">
          <p className="text-white/40 text-sm mb-1 font-mono">{expr}</p>
          <p className="text-4xl font-bold text-blue-400 font-mono">= {result}</p>
        </div>
      )}
      {history.length > 1 && (
        <div>
          <p className="text-xs text-white/30 mb-2">History</p>
          <div className="space-y-1 max-h-32 overflow-auto">
            {history.slice(1).map((h,i)=>(
              <button key={i} onClick={()=>setExpr(h.expr)}
                className="w-full flex justify-between px-3 py-1.5 rounded-lg bg-white/3 hover:bg-white/5 text-xs text-white/50 font-mono">
                <span>{h.expr}</span><span className="text-blue-400">= {h.result}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <p className="text-xs text-white/20">✓ Browser-based — supports arithmetic, percentages, powers, square roots</p>
    </div>
  );
}
