
"use client";
import { useState } from "react";
interface Task{id:number;text:string;done:boolean;priority:"low"|"medium"|"high"}
export default function TodoClient() {
  const [tasks,setTasks]=useState<Task[]>([]);
  const [input,setInput]=useState("");
  const [priority,setPriority]=useState<Task["priority"]>("medium");
  const add=()=>{
    if(!input.trim())return;
    setTasks(t=>[...t,{id:Date.now(),text:input.trim(),done:false,priority}]);
    setInput("");
  };
  const toggle=(id:number)=>setTasks(t=>t.map(x=>x.id===id?{...x,done:!x.done}:x));
  const remove=(id:number)=>setTasks(t=>t.filter(x=>x.id!==id));
  const colors={low:"green",medium:"yellow",high:"red"};
  const done=tasks.filter(t=>t.done).length;
  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add()}
          placeholder="Add a new task..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-blue-500/50"/>
        <select value={priority} onChange={e=>setPriority(e.target.value as Task["priority"])} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none">
          <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
        </select>
        <button onClick={add} disabled={!input.trim()} className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-sm font-medium transition-colors">Add</button>
      </div>
      {tasks.length>0&&<div className="flex justify-between text-xs text-white/40"><span>{tasks.length} tasks</span><span>{done} completed</span></div>}
      <div className="space-y-2">
        {tasks.map(t=>(
          <div key={t.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${t.done?"bg-white/2 border-white/5 opacity-50":"bg-white/5 border-white/10"}`}>
            <button onClick={()=>toggle(t.id)} className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${t.done?"bg-green-500 border-green-500":"border-white/30"}`}>
              {t.done&&<span className="text-white text-xs flex items-center justify-center w-full">✓</span>}
            </button>
            <span className={`flex-1 text-sm ${t.done?"line-through text-white/30":""}`}>{t.text}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full bg-${colors[t.priority]}-500/20 text-${colors[t.priority]}-400`}>{t.priority}</span>
            <button onClick={()=>remove(t.id)} className="text-white/20 hover:text-red-400 transition-colors text-xs">✕</button>
          </div>
        ))}
      </div>
      {tasks.length===0&&<div className="text-center py-12 text-white/30 text-sm">No tasks yet. Add your first task above!</div>}
    </div>
  );
}
