
"use client";
import { useState, useRef } from "react";

export default function QRScannerClient() {
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream|null>(null);

  const start = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      streamRef.current = s;
      if (videoRef.current) { videoRef.current.srcObject = s; await videoRef.current.play(); }
      setScanning(true); setError("");
    } catch { setError("Cannot access camera. Please allow camera permission."); }
  };

  const stop = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    setScanning(false);
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {error && <p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">{error}</p>}
      {!scanning ? (
        <div className="text-center py-10 space-y-4">
          <div className="text-6xl">📷</div>
          <p className="text-white/40 text-sm">Point your camera at a QR code</p>
          <button onClick={start} className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition-colors">📷 Start Scanner</button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="relative rounded-xl overflow-hidden bg-black">
            <video ref={videoRef} muted playsInline className="w-full"/>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 border-2 border-blue-400 rounded-xl opacity-60"/>
            </div>
          </div>
          <button onClick={stop} className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm">Stop Scanner</button>
          <p className="text-xs text-white/30 text-center">For full QR decoding, integrate the @zxing/browser library.</p>
        </div>
      )}
    </div>
  );
}
