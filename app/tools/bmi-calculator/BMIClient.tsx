
"use client";
import { useState } from "react";
export default function BMIClient() {
  const [unit,setUnit]=useState<"metric"|"imperial">("metric");
  const [weight,setWeight]=useState("");
  const [height,setHeight]=useState("");
  const [result,setResult]=useState<{bmi:number;cat:string;color:string}|null>(null);
  const calc=()=>{
    const w=parseFloat(weight),h=parseFloat(height);
    if(!w||!h)return;
    let bmi=unit==="metric"?w/((h/100)**2):703*w/(h**2);
    bmi=Math.round(bmi*10)/10;
    const cat=bmi<18.5?"Underweight":bmi<25?"Normal weight":bmi<30?"Overweight":"Obese";
    const color=bmi<18.5?"blue":bmi<25?"green":bmi<30?"yellow":"red";
    setResult({bmi,cat,color});
  };
  return (
    <div className="space-y-5 max-w-md mx-auto">
      <div className="flex gap-2">
        {(["metric","imperial"] as const).map(u=>(
          <button key={u} onClick={()=>{setUnit(u);setResult(null);}} className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${unit===u?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>
            {u==="metric"?"Metric (kg/cm)":"Imperial (lbs/in)"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-white/50 mb-1">Weight ({unit==="metric"?"kg":"lbs"})</label>
          <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==="metric"?"70":"155"}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 text-sm"/>
        </div>
        <div>
          <label className="block text-xs text-white/50 mb-1">Height ({unit==="metric"?"cm":"inches"})</label>
          <input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder={unit==="metric"?"175":"69"}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 text-sm"/>
        </div>
      </div>
      <button onClick={calc} disabled={!weight||!height} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        Calculate BMI
      </button>
      {result&&(
        <div className={`p-6 rounded-2xl bg-${result.color}-500/10 border border-${result.color}-500/20 text-center space-y-2`}>
          <div className={`text-5xl font-bold text-${result.color}-400`}>{result.bmi}</div>
          <div className={`text-lg font-semibold text-${result.color}-300`}>{result.cat}</div>
          <div className="text-xs text-white/40 mt-3 grid grid-cols-4 gap-2">
            {[["<18.5","Underweight","blue"],["18.5-24.9","Normal","green"],["25-29.9","Overweight","yellow"],["≥30","Obese","red"]].map(([r,l,c])=>(
              <div key={l} className={`p-2 rounded-lg bg-${c}-500/10 border border-${c}-500/20`}>
                <div className={`text-${c}-400 font-medium`}>{l}</div>
                <div className="text-white/30">{r}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
