"use client";
import { useState } from "react";
interface Habit{id:number;name:string;emoji:string;streak:number;done:boolean[]}
const EMOJIS=["💪","📚","🧘","🏃","💧","🥗","😴","✍️","🎯","🔥"];
export default function HabitTrackerClient() {
  const [habits,setHabits]=useState<Habit[]>([
    {id:1,name:"Drink water",emoji:"💧",streak:0,done:Array(7).fill(false)},
    {id:2,name:"Exercise",emoji:"💪",streak:0,done:Array(7).fill(false)},
  ]);
  const [newName,setNewName]=useState("");
  const [newEmoji,setNewEmoji]=useState("🎯");
  const days=["M","T","W","T","F","S","S"];
  const today=new Date().getDay();
  const toggle=(hid:number,day:number)=>{
    setHabits(h=>h.map(x=>{
      if(x.id!==hid)return x;
      const done=[...x.done];done[day]=!done[day];
      const streak=done.filter(Boolean).length;
      return{...x,done,streak};
    }));
  };
  const add=()=>{
    if(!newName.trim())return;
    setHabits(h=>[...h,{id:Date.now(),name:newName,emoji:newEmoji,streak:0,done:Array(7).fill(false)}]);
    setNewName("");
  };
  const remove=(id:number)=>setHabits(h=>h.filter(x=>x.id!==id));
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <select value={newEmoji} onChange={e=>setNewEmoji(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none">
          {EMOJIS.map(e=><option key={e}>{e}</option>)}
        </select>
        <input value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add()}
          placeholder="New habit name..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-blue-500/50"/>
        <button onClick={add} disabled={!newName} className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-sm font-medium">Add</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/30 px-[88px]">
        {days.map((d,i)=><div key={i} className={`${i===today-1||i===(today===0?6:today-1)?"text-blue-400 font-bold":""}`}>{d}</div>)}
      </div>
      <div className="space-y-2">
        {habits.map(h=>(
          <div key={h.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
            <span className="text-xl">{h.emoji}</span>
            <span className="text-sm flex-1">{h.name}</span>
            <span className="text-xs text-orange-400">🔥{h.streak}</span>
            <div className="flex gap-1">
              {h.done.map((d,i)=>(
                <button key={i} onClick={()=>toggle(h.id,i)} className={`w-7 h-7 rounded-lg transition-colors text-xs ${d?"bg-green-500 text-white":"bg-white/5 hover:bg-white/10 text-white/20"}`}>
                  {d?"✓":""}
                </button>
              ))}
            </div>
            <button onClick={()=>remove(h.id)} className="text-white/20 hover:text-red-400 text-xs ml-1">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}
