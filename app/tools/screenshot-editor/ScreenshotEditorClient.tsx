
"use client";
import { useState, useRef } from "react";
import FileDropZone from "@/components/tools/FileDropZone";
export default function ScreenshotEditorClient() {
  const [imgSrc,setImgSrc]=useState("");
  const [tool,setTool]=useState<"arrow"|"rect"|"text"|"blur">("arrow");
  const [color,setColor]=useState("#ef4444");
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const [drawing,setDrawing]=useState(false);
  const [start,setStart]=useState({x:0,y:0});
  const [snapshot,setSnapshot]=useState<ImageData|null>(null);
  const handleFile=(files:File[])=>{
    const url=URL.createObjectURL(files[0]);setImgSrc(url);
    setTimeout(()=>{
      const c=canvasRef.current;if(!c)return;
      const img=new Image();img.onload=()=>{c.width=img.width;c.height=img.height;c.getContext("2d")!.drawImage(img,0,0);};img.src=url;
    },100);
  };
  const getPos=(e:React.MouseEvent<HTMLCanvasElement>)=>{
    const r=canvasRef.current!.getBoundingClientRect();
    const scale=canvasRef.current!.width/r.width;
    return{x:(e.clientX-r.left)*scale,y:(e.clientY-r.top)*scale};
  };
  const mouseDown=(e:React.MouseEvent<HTMLCanvasElement>)=>{
    const p=getPos(e);setStart(p);setDrawing(true);
    setSnapshot(canvasRef.current!.getContext("2d")!.getImageData(0,0,canvasRef.current!.width,canvasRef.current!.height));
  };
  const mouseMove=(e:React.MouseEvent<HTMLCanvasElement>)=>{
    if(!drawing||!snapshot)return;
    const ctx=canvasRef.current!.getContext("2d")!;
    ctx.putImageData(snapshot,0,0);
    const p=getPos(e);
    ctx.strokeStyle=color;ctx.lineWidth=3;ctx.fillStyle=color;
    if(tool==="rect"){ctx.beginPath();ctx.strokeRect(start.x,start.y,p.x-start.x,p.y-start.y);}
    else if(tool==="arrow"){ctx.beginPath();ctx.moveTo(start.x,start.y);ctx.lineTo(p.x,p.y);ctx.stroke();const a=Math.atan2(p.y-start.y,p.x-start.x);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-15*Math.cos(a-0.4),p.y-15*Math.sin(a-0.4));ctx.lineTo(p.x-15*Math.cos(a+0.4),p.y-15*Math.sin(a+0.4));ctx.fill();}
  };
  const mouseUp=()=>setDrawing(false);
  const download=()=>{const a=document.createElement("a");a.href=canvasRef.current!.toDataURL("image/png");a.download="edited_screenshot.png";a.click();};
  const COLORS=["#ef4444","#3b82f6","#22c55e","#f59e0b","#a855f7","#000000","#ffffff"];
  return (
    <div className="space-y-3">
      {!imgSrc?<FileDropZone accept="image/*" emoji="📸" label="Drop your screenshot here" onFiles={handleFile}/>:(
        <>
          <div className="flex flex-wrap gap-2 items-center">
            {[["arrow","↗ Arrow"],["rect","▭ Rectangle"]].map(([v,l])=>(
              <button key={v} onClick={()=>setTool(v as typeof tool)} className={`px-3 py-1.5 rounded-xl text-xs transition-colors ${tool===v?"bg-blue-600":"bg-white/5 hover:bg-white/10"}`}>{l}</button>
            ))}
            <div className="flex gap-1 ml-2">
              {COLORS.map(c=><button key={c} onClick={()=>setColor(c)} className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${color===c?"border-white scale-110":"border-white/20"}`} style={{background:c}}/>)}
            </div>
            <button onClick={download} className="ml-auto px-3 py-1.5 rounded-xl bg-green-600 hover:bg-green-700 text-xs font-medium transition-colors">⬇️ Download</button>
          </div>
          <canvas ref={canvasRef} onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp}
            className="w-full rounded-xl cursor-crosshair border border-white/10" style={{maxHeight:"400px",objectFit:"contain"}}/>
        </>
      )}
    </div>
  );
}
