"use client";
import { useState, useEffect } from "react";

export default function TextToSpeechClient() {
  const [text, setText] = useState("");
  const [voiceIdx, setVoiceIdx] = useState(0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const speak = () => {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    if (voices[voiceIdx]) utt.voice = voices[voiceIdx];
    utt.rate = rate; utt.pitch = pitch;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utt);
  };

  const stopSpeech = () => { window.speechSynthesis.cancel(); setSpeaking(false); };

  return (
    <div className="space-y-4">
      <textarea rows={6} value={text} onChange={e => setText(e.target.value)}
        placeholder="Enter text to convert to speech..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-blue-500/50 resize-none"/>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {voices.length > 0 && (
          <div>
            <label className="block text-xs text-white/50 mb-1">Voice</label>
            <select value={voiceIdx} onChange={e => setVoiceIdx(+e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white outline-none">
              {voices.slice(0,20).map((v,i) => <option key={i} value={i}>{v.name}</option>)}
            </select>
          </div>
        )}
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/50">Speed</label>
            <span className="text-xs text-blue-400">{rate}x</span>
          </div>
          <input type="range" min={0.5} max={2} step={0.1} value={rate}
            onChange={e => setRate(+e.target.value)} className="w-full accent-blue-500"/>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-xs text-white/50">Pitch</label>
            <span className="text-xs text-blue-400">{pitch}</span>
          </div>
          <input type="range" min={0.5} max={2} step={0.1} value={pitch}
            onChange={e => setPitch(+e.target.value)} className="w-full accent-blue-500"/>
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={speaking ? stopSpeech : speak} disabled={!text}
          className={`flex-1 py-3 rounded-xl font-semibold text-sm disabled:opacity-40 transition-colors ${speaking?"bg-red-600 hover:bg-red-700":"bg-blue-600 hover:bg-blue-700"}`}>
          {speaking ? "⏹ Stop" : "🔊 Speak"}
        </button>
        {speaking && (
          <div className="flex items-center gap-1 px-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-1 bg-blue-400 rounded-full animate-bounce"
                style={{ height:`${8+i*4}px`, animationDelay:`${i*0.1}s` }}/>
            ))}
          </div>
        )}
      </div>
      <p className="text-xs text-white/25">Uses your browser&apos;s built-in speech synthesis. Quality depends on your OS voices.</p>
    </div>
  );
}
