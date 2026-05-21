"use client";
import { useState } from "react";
export default function ScientificCalcClient() {
  const [display,setDisplay]=useState("0");
  const [prev,setPrev]=useState("");
  const [op,setOp]=useState("");
  const [fresh,setFresh]=useState(true);
  const press=(v:string)=>{
    if(fresh&&!isNaN(+v)){setDisplay(v);setFresh(false);return;}
    if(v==="."&&display.includes("."))return;
    setDisplay(d=>d==="0"&&v!=="."?v:d+v);
  };
  const operate=(o:string)=>{setPrev(display);setOp(o);setFresh(true);};
  const equals=()=>{
    const a=parseFloat(prev||"0"),b=parseFloat(display);
    let r=0;
    if(op==="+")r=a+b;
    else if(op==="-")r=a-b;
    else if(op==="×")r=a*b;
    else if(op==="÷")r=b?a/b:NaN;
    else if(op==="%")r=a*(b/100);
    setDisplay(isNaN(r)?"Error":parseFloat(r.toPrecision(10)).toString());
    setOp("");setPrev("");setFresh(true);
  };
  const fn=(f:string)=>{
    const n=parseFloat(display);
    const fns:{[k:string]:number}={
      sin:Math.sin(n*Math.PI/180),
      cos:Math.cos(n*Math.PI/180),
      tan:Math.tan(n*Math.PI/180),
      log:Math.log10(n),
      ln:Math.log(n),
      "√":Math.sqrt(n),
      "x²":n**2,
      "1/x":1/n,
      "π":Math.PI,
      "e":Math.E,
    };
    if(f in fns)setDisplay(parseFloat(fns[f].toPrecision(10)).toString());
    setFresh(true);
  };
  const sciRows=[
    [{l:"sin",k:"sin"},{l:"cos",k:"cos"},{l:"tan",k:"tan"},{l:"√",k:"√"}],
    [{l:"log",k:"log"},{l:"ln",k:"ln"},{l:"x²",k:"x²"},{l:"1/x",k:"1/x"}],
    [{l:"π",k:"π"},{l:"e",k:"e"},{l:"C",k:"C"},{l:"⌫",k:"⌫"}],
  ];
  const numBtns=["7","8","9","÷","4","5","6","×","1","2","3","-","0",".","=","+"];
  return (
    <div className="max-w-xs mx-auto space-y-3">
      <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-right">
        <div className="text-white/30 text-xs h-4">{prev} {op}</div>
        <div className="text-3xl font-mono text-white mt-1 truncate">{display}</div>
      </div>
      <div className="space-y-2">
        {sciRows.map((row,i)=>(
          <div key={i} className="grid grid-cols-4 gap-2">
            {row.map(b=>(
              <button key={b.l} onClick={()=>{
                if(b.k==="C"){setDisplay("0");setFresh(true);}
                else if(b.k==="⌫"){setDisplay(d=>d.length>1?d.slice(0,-1):"0");}
                else fn(b.k);
              }} className="py-3 rounded-xl bg-purple-500/20 border border-purple-500/20 hover:bg-purple-500/30 text-sm font-medium text-purple-300 transition-colors">
                {b.l}
              </button>
            ))}
          </div>
        ))}
        <div className="grid grid-cols-4 gap-2">
          {numBtns.map(b=>(
            <button key={b} onClick={()=>{
              if(b==="=")equals();
              else if(["+","-","×","÷","%"].includes(b))operate(b);
              else press(b);
            }} className={`py-3 rounded-xl text-sm font-medium transition-colors ${
              b==="="?"bg-blue-600 hover:bg-blue-700":
              ["+","-","×","÷"].includes(b)?"bg-white/10 hover:bg-white/15 text-blue-400":
              "bg-white/5 hover:bg-white/10"
            }`}>
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
