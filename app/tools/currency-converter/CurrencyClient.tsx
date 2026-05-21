"use client";
import { useState } from "react";

const CURRENCIES = ["USD","EUR","GBP","AED","SAR","JPY","CNY","INR","CAD","AUD","CHF","SGD","HKD","MYR","PKR","BDT","NGN","BRL","MXN","KRW"];

export default function CurrencyClient() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("AED");
  const [result, setResult] = useState<number|null>(null);
  const [rate, setRate] = useState<number|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  const convert = async () => {
    if (!amount || isNaN(+amount)) return;
    setLoading(true); setError("");
    try {
      // Free public API — no key needed
      const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
      const data = await res.json();
      if (data.result !== "success") throw new Error("Rate fetch failed");
      const r = data.rates[to];
      setRate(r);
      setResult(Math.round(+amount * r * 10000) / 10000);
      setLastUpdated(new Date(data.time_last_update_utc).toLocaleDateString());
    } catch {
      setError("Could not fetch rates. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const swap = () => { setFrom(to); setTo(from); setResult(null); setRate(null); };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-xs text-white/50 mb-1">Amount</label>
        <input type="number" value={amount} onChange={e=>{setAmount(e.target.value);setResult(null);}}
          placeholder="Enter amount"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-lg font-semibold outline-none focus:border-blue-500/50"/>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <label className="block text-xs text-white/50 mb-1">From</label>
          <select value={from} onChange={e=>{setFrom(e.target.value);setResult(null);}}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none">
            {CURRENCIES.map(c=><option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <button onClick={swap} className="mt-5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-lg">⇄</button>
        <div className="flex-1">
          <label className="block text-xs text-white/50 mb-1">To</label>
          <select value={to} onChange={e=>{setTo(e.target.value);setResult(null);}}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none">
            {CURRENCIES.map(c=><option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <button onClick={convert} disabled={!amount||loading}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 font-semibold text-sm transition-colors">
        {loading ? "Fetching rates..." : "💱 Convert"}
      </button>
      {error && <p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl">{error}</p>}
      {result !== null && rate !== null && (
        <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-2 text-center">
          <p className="text-white/50 text-sm">{amount} {from} =</p>
          <p className="text-4xl font-bold text-blue-400">{result.toLocaleString()}</p>
          <p className="text-xl font-semibold text-white">{to}</p>
          <p className="text-white/30 text-xs">1 {from} = {rate} {to} · Updated {lastUpdated}</p>
        </div>
      )}
    </div>
  );
}
