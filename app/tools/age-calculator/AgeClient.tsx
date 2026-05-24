"use client";
import { useState } from "react";
export default function AgeClient() {
  const [dob,setDob]=useState("");
  const [result,setResult]=useState<{y:number;m:number;d:number;days:number;next:number}|null>(null);
  const calc=()=>{
    if(!dob)return;
    const birth=new Date(dob),now=new Date();
    let y=now.getFullYear()-birth.getFullYear();
    let m=now.getMonth()-birth.getMonth();
    let d=now.getDate()-birth.getDate();
    if(d<0){m--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate();}
    if(m<0){y--;m+=12;}
    const days=Math.floor((now.getTime()-birth.getTime())/86400000);
    const next=new Date(birth);next.setFullYear(now.getFullYear());
    if(next<=now)next.setFullYear(now.getFullYear()+1);
    const nextDays=Math.ceil((next.getTime()-now.getTime())/86400000);
    setResult({y,m,d,days,next:nextDays});
  };
  return (
    <div className="space-y-5 max-w-md mx-auto">
      <div>
        <label className="block text-sm text-white/60 mb-2">Date of Birth</label>
        <input type="date" value={dob} onChange={e=>setDob(e.target.value)} max={new Date().toISOString().split("T")[0]}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500/50"/>
      </div>
      <button onClick={calc} disabled={!dob} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        🎂 Calculate Age
      </button>
      {result&&(
        <div className="grid grid-cols-2 gap-3">
          {[["Years",result.y,"blue"],["Months",result.m,"purple"],["Days",result.d,"pink"],["Total Days",result.days.toLocaleString(),"green"],["Next Birthday","in "+result.next+" days","yellow"]].map(([l,v,c])=>(
            <div key={l as string} className={`p-4 rounded-2xl bg-${c}-500/10 border border-${c}-500/20 text-center`}>
              <div className={`text-2xl font-bold text-${c}-400`}>{v}</div>
              <div className="text-white/40 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
