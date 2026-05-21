
"use client";
import { useState, useEffect } from "react";

const MODES = { work: 25, short: 5, long: 15 } as const;
type ModeKey = keyof typeof MODES;

export default function PomodoroClient() {
  const [mode, setMode] = useState<ModeKey>("work");
  const [secs, setSecs] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    setSecs(MODES[mode] * 60);
    setRunning(false);
  }, [mode]);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSecs(s => {
      if (s <= 1) {
        setRunning(false);
        if (mode === "work") setSessions(n => n + 1);
        return 0;
      }
      return s - 1;
    }), 1000);
    return () => clearInterval(t);
  }, [running, mode]);

  const fmt = (s: number) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  const pct = (1 - secs / (MODES[mode] * 60)) * 100;
  const colors: Record<ModeKey, string> = { work: "blue", short: "green", long: "purple" };
  const labels: Record<ModeKey, string> = { work: "Focus", short: "Short Break", long: "Long Break" };
  const r = 45;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="max-w-sm mx-auto text-center space-y-6">
      <div className="flex gap-2 justify-center">
        {(Object.keys(MODES) as ModeKey[]).map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${mode===m?`bg-${colors[m]}-600`:"bg-white/5 hover:bg-white/10"}`}>
            {labels[m]}
          </button>
        ))}
      </div>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8"/>
          <circle cx="50" cy="50" r={r} fill="none"
            stroke={mode==="work"?"#3b82f6":mode==="short"?"#22c55e":"#a855f7"}
            strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct/100)}
            className="transition-all duration-1000"/>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-mono font-bold">{fmt(secs)}</span>
          <span className="text-white/40 text-xs mt-1">{labels[mode]}</span>
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <button onClick={() => setRunning(r => !r)}
          className={`px-8 py-3 rounded-xl font-semibold transition-colors ${running?"bg-red-600 hover:bg-red-700":`bg-${colors[mode]}-600 hover:bg-${colors[mode]}-700`}`}>
          {running ? "⏸ Pause" : "▶ Start"}
        </button>
        <button onClick={() => { setSecs(MODES[mode]*60); setRunning(false); }}
          className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">↺</button>
      </div>
      <p className="text-white/40 text-sm">Sessions today: <span className="text-white font-semibold">{sessions}</span></p>
    </div>
  );
}
