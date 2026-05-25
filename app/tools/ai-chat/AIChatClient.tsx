"use client";
import { useState } from "react";

const FAQ: {q:string;a:string}[] = [
  {q:"how do i compress a pdf",a:"Go to PDF Tools → Compress PDF. Upload your file, choose your compression level, and click Compress. Your file is processed entirely in your browser — nothing is uploaded to our servers."},
  {q:"how do i remove background from image",a:"Go to Image Tools → Remove Background. Upload your image and the tool will process it. For best results, use images with clear subjects against contrasting backgrounds."},
  {q:"is this website free",a:"Yes! QuantixTools is 100% free. No account required, no hidden fees, no limits. We are supported by non-intrusive ads."},
  {q:"are my files safe",a:"Absolutely. Most tools process your files directly in your browser using JavaScript and WebAssembly. Your files never leave your device or get uploaded to any server."},
  {q:"how do i convert pdf to word",a:"Go to PDF Tools → PDF to Word. Upload your PDF and we extract the text content. You can download it as a .txt file. Note: complex formatting may not be preserved."},
  {q:"how do i generate a qr code",a:"Go to Image Tools → QR Code Generator. Enter your URL, text, or other content. Choose your size and click generate. You can download the QR code as PNG."},
  {q:"how does the word counter work",a:"Go to Text Tools → Word Counter. Start typing or paste your text. The counter updates in real time, showing words, characters, sentences, paragraphs, and estimated reading time."},
  {q:"can i use these tools on mobile",a:"Yes! QuantixTools is fully mobile-responsive and works on any device — phones, tablets, and desktops. No app download needed."},
];

function findAnswer(query: string): string {
  const q = query.toLowerCase();
  const match = FAQ.find(f => f.q.split(" ").some(w => q.includes(w)));
  return match ? match.a : "I'm a basic help assistant. For that question, try browsing our tool categories or use the search bar on the homepage to find the right tool. You can also contact us at hello@quantixtools.com.";
}

interface Message { role: "user"|"bot"; text: string; }

export default function AIChatClient() {
  const [messages, setMessages] = useState<Message[]>([
    { role:"bot", text:"Hi! I'm the QuantixTools help assistant. Ask me about any of our tools or how to use the platform." }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role:"user", text: input.trim() };
    const botMsg: Message = { role:"bot", text: findAnswer(input) };
    setMessages(m=>[...m, userMsg, botMsg]);
    setInput("");
  };

  const suggestions = ["How do I compress a PDF?","Are my files safe?","Is this free?","How do I remove background?"];

  return (
    <div className="flex flex-col" style={{height:"460px"}}>
      <div className="flex-1 overflow-y-auto space-y-3 p-4 rounded-2xl bg-black/20 border border-gray-200 mb-4">
        {messages.map((m,i)=>(
          <div key={i} className={`flex gap-2 ${m.role==="user"?"flex-row-reverse":""}`}>
            <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${m.role==="user"?"bg-blue-600":"bg-purple-600"}`}>
              {m.role==="user"?"U":"🤖"}
            </div>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role==="user"?"bg-blue-600/20 border border-blue-500/20":"bg-gray-50 border border-gray-200"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      {messages.length === 1 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map(s=>(
            <button key={s} onClick={()=>setInput(s)}
              className="px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-xs text-gray-8000 transition-colors">{s}</button>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
          placeholder="Ask about our tools..."
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-purple-500/50"/>
        <button onClick={send} disabled={!input.trim()}
          className="px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-sm font-medium transition-colors">Send</button>
      </div>
      <p className="text-xs text-gray-300 mt-2 text-center">✓ Local help assistant — no API key required</p>
    </div>
  );
}
