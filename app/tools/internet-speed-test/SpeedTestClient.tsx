
"use client";
import { useState } from "react";
export default function SpeedTestClient() {
  const [status,setStatus]=useState<"idle"|"testing"|"done">("idle");
  const [download,setDownload]=useState<number|null>(null);
  const [latency,setLatency]=useState<number|null>(null);
  const [progress,setProgress]=useState(0);
  const test=async()=>{
    setStatus("testing");setDownload(null);setLatency(null);setProgress(0);
    try{
      // Latency test
      const t1=performance.now();
      await fetch("https://www.cloudflare.com/cdn-cgi/trace",{cache:"no-store"}).catch(()=>{});
      const lat=Math.round(performance.now()-t1);
      setLatency(lat);setProgress(30);
      // Download speed test using a small known resource
      const sizes=[100000,500000,1000000];
      let totalSpeed=0;let tests=0;
      for(const size of sizes){
        const start=performance.now();
        try{
          await fetch(`https://speed.cloudflare.com/__down?bytes=${size}`,{cache:"no-store"});
          const elapsed=(performance.now()-start)/1000;
          const speedMbps=(size*8)/(elapsed*1000000);
          totalSpeed+=speedMbps;tests++;
        }catch{}
        setProgress(30+((tests/sizes.length)*60));
      }
      setDownload(Math.round((totalSpeed/Math.max(tests,1))*10)/10);
      setProgress(100);setStatus("done");
    }catch{setStatus("done");}
  };
  const getColor=(mbps:number|null)=>!mbps?"white/40":mbps>50?"green":mbps>10?"yellow":"red";
  const getRating=(mbps:number|null)=>!mbps?"—":mbps>100?"Excellent":mbps>50?"Great":mbps>10?"Good":mbps>5?"Fair":"Slow";
  return (
    <div className="max-w-md mx-auto text-center space-y-6 py-4">
      <div className="grid grid-cols-2 gap-4">
        {[["Download",download?(download+" Mbps"):"—","⬇️",getColor(download)],["Latency",latency?(latency+" ms"):"—","📡",latency&&latency<50?"green":latency&&latency<100?"yellow":"white/40"]].map(([l,v,e,c])=>(
          <div key={l as string} className={`p-6 rounded-2xl bg-${c}-500/10 border border-${c}-500/20`}>
            <div className="text-3xl mb-2">{e}</div>
            <div className={`text-2xl font-bold text-${c}-400`}>{v}</div>
            <div className="text-white/40 text-xs mt-1">{l}</div>
          </div>
        ))}
      </div>
      {download&&<div className={`text-lg font-semibold text-${getColor(download)}-400`}>Rating: {getRating(download)}</div>}
      {status==="testing"&&(
        <div className="space-y-2">
          <div className="w-full bg-white/10 rounded-full h-2"><div className="h-2 bg-blue-500 rounded-full transition-all duration-500" style={{width:`${progress}%`}}/></div>
          <p className="text-white/40 text-sm animate-pulse">Testing your connection...</p>
        </div>
      )}
      <button onClick={test} disabled={status==="testing"} className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 font-semibold transition-colors">
        {status==="testing"?"Testing...":status==="done"?"Test Again":"⚡ Start Speed Test"}
      </button>
    </div>
  );
}
