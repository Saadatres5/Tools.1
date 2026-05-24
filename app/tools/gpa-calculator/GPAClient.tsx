"use client";
import { useState } from "react";
const GRADE_POINTS: {[k:string]:number}={"A+":4.0,"A":4.0,"A-":3.7,"B+":3.3,"B":3.0,"B-":2.7,"C+":2.3,"C":2.0,"C-":1.7,"D+":1.3,"D":1.0,"F":0};
export default function GPAClient() {
  const [courses,setCourses]=useState([{name:"",grade:"A",credits:"3"},{name:"",grade:"B",credits:"3"}]);
  const add=()=>setCourses(c=>[...c,{name:"",grade:"A",credits:"3"}]);
  const remove=(i:number)=>setCourses(c=>c.filter((_,idx)=>idx!==i));
  const update=(i:number,k:string,v:string)=>setCourses(c=>c.map((x,idx)=>idx===i?{...x,[k]:v}:x));
  const gpa=()=>{
    const valid=courses.filter(c=>c.credits&&!isNaN(+c.credits));
    const total=valid.reduce((s,c)=>s+(GRADE_POINTS[c.grade]||0)*+c.credits,0);
    const credits=valid.reduce((s,c)=>s+ +c.credits,0);
    return credits?Math.round(total/credits*100)/100:0;
  };
  const g=gpa();
  const cat=g>=3.7?"Summa Cum Laude":g>=3.5?"Magna Cum Laude":g>=3.0?"Cum Laude":g>=2.0?"Satisfactory":"Needs Improvement";
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {courses.map((c,i)=>(
          <div key={i} className="grid grid-cols-12 gap-2 items-center">
            <input value={c.name} onChange={e=>update(i,"name",e.target.value)} placeholder={`Course ${i+1}`}
              className="col-span-5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"/>
            <select value={c.grade} onChange={e=>update(i,"grade",e.target.value)} className="col-span-3 bg-white/5 border border-white/10 rounded-xl px-2 py-2 text-sm text-white outline-none">
              {Object.keys(GRADE_POINTS).map(g=><option key={g} value={g}>{g}</option>)}
            </select>
            <input type="number" value={c.credits} onChange={e=>update(i,"credits",e.target.value)} min="1" max="6"
              className="col-span-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none"/>
            <button onClick={()=>remove(i)} className="col-span-1 text-white/30 hover:text-red-400 text-center">✕</button>
          </div>
        ))}
      </div>
      <button onClick={add} className="w-full py-2 rounded-xl border border-dashed border-white/20 text-white/40 hover:text-white/60 text-sm transition-colors">+ Add Course</button>
      <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-center">
        <div className="text-5xl font-bold text-blue-400">{g.toFixed(2)}</div>
        <div className="text-white/60 mt-1">{cat}</div>
        <div className="text-white/30 text-xs mt-1">out of 4.0</div>
      </div>
    </div>
  );
}
