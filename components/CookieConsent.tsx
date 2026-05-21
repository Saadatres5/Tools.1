"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold mb-1">We use cookies 🍪</p>
          <p className="text-white/50 text-xs leading-relaxed">
            We use cookies to serve ads via Google AdSense and to analyse traffic. By clicking &ldquo;Accept&rdquo; you consent to our use of cookies.{" "}
            <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={decline}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm transition-colors text-white/70">
            Decline
          </button>
          <button onClick={accept}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
