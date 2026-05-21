"use client";
import { useEffect } from "react";

declare global {
  interface Window { adsbygoogle: unknown[] }
}

export default function AdSidebar({ slot }: { slot: string }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="w-full my-6 rounded-2xl overflow-hidden bg-white/2 border border-white/5">
      <p className="text-center text-white/20 text-xs py-1">Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-1017873487030471"
        data-ad-slot={slot}
      />
    </div>
  );
}
