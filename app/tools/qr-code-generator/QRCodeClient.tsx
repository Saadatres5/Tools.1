"use client";
import { useState, useEffect } from "react";

export default function QRCodeClient() {
  const [text, setText] = useState("https://quantixtools.com");
  const [size, setSize] = useState(256);
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    if (!text) return;
    const encoded = encodeURIComponent(text);
    setQrUrl(`https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encoded}&choe=UTF-8`);
  }, [text, size]);

  const download = async () => {
    const res = await fetch(qrUrl);
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "qrcode.png";
    a.click();
  };

  const types = [
    ["URL","https://quantixtools.com"],
    ["Email","mailto:hello@example.com"],
    ["Phone","tel:+1234567890"],
    ["WiFi","WIFI:T:WPA;S:NetworkName;P:Password;;"],
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {types.map(([l,v]) => (
          <button key={l} onClick={() => setText(v)}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/60 transition-colors">{l}</button>
        ))}
      </div>
      <textarea rows={3} value={text} onChange={e => setText(e.target.value)}
        placeholder="Enter text, URL, email, or any content..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-blue-500/50 resize-none"/>
      <div className="flex items-center gap-3 text-sm text-white/60">
        <label>Size:</label>
        <select value={size} onChange={e => setSize(+e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-sm text-white outline-none">
          {[128,256,512].map(s => <option key={s} value={s}>{s}px</option>)}
        </select>
      </div>
      {qrUrl && text && (
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-2xl bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrUrl} alt="QR Code" width={size/2} height={size/2} className="block"/>
          </div>
          <button onClick={download}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
            ⬇️ Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}
