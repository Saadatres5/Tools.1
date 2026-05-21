
"use client";
import { useState } from "react";
export default function LoanClient() {
  const [amount,setAmount]=useState("");
  const [rate,setRate]=useState("");
  const [years,setYears]=useState("");
  const [result,setResult]=useState<{monthly:number;total:number;interest:number}|null>(null);
  const calc=()=>{
    const p=parseFloat(amount),r=parseFloat(rate)/100/12,n=parseFloat(years)*12;
    if(!p||!r||!n)return;
    const m=p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
    setResult({monthly:m,total:m*n,interest:m*n-p});
  };
  const fmt=(n:number)=>n.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2});
  return (
    <div className="space-y-4 max-w-md mx-auto">
      {[["Loan Amount ($)","e.g. 100000",amount,setAmount],["Annual Interest Rate (%)","e.g. 5.5",rate,setRate],["Loan Term (Years)","e.g. 30",years,setYears]].map(([l,p,v,s])=>(
        <div key={l as string}><label className="block text-xs text-white/50 mb-1">{l as string}</label>
          <input type="number" value={v as string} onChange={e=>(s as (v:string)=>void)(e.target.value)} placeholder={p as string}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50 text-sm"/></div>
      ))}
      <button onClick={calc} disabled={!amount||!rate||!years} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm">💰 Calculate</button>
      {result&&(
        <div className="grid grid-cols-3 gap-3">
          {[["Monthly Payment",fmt(result.monthly),"blue"],["Total Payment",fmt(result.total),"purple"],["Total Interest",fmt(result.interest),"orange"]].map(([l,v,c])=>(
            <div key={l as string} className={`p-4 rounded-2xl bg-${c}-500/10 border border-${c}-500/20 text-center`}>
              <div className={`text-lg font-bold text-${c}-400`}>{v}</div>
              <div className="text-white/40 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
