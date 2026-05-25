"use client";
import { useState } from "react";
const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");
function makeWord() { return LOREM[Math.floor(Math.random()*LOREM.length)].replace(/[.,]/g,""); }
function makeSentence() { const l=Math.floor(Math.random()*12)+5; return Array.from({length:l},makeWord).join(" ").replace(/^./,c=>c.toUpperCase())+"."; }
function makeParagraph() { const l=Math.floor(Math.random()*4)+3; return Array.from({length:l},makeSentence).join(" "); }
export default function LoremIpsumClient() {
  const [type, setType] = useState<"paragraphs"|"sentences"|"words">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const generate = () => {
    if (type==="paragraphs") setOutput(Array.from({length:count},makeParagraph).join("\n\n"));
    else if (type==="sentences") setOutput(Array.from({length:count},makeSentence).join(" "));
    else setOutput(Array.from({length:count},makeWord).join(" "));
  };
  const copy = () => navigator.clipboard.writeText(output);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 items-center p-4 rounded-xl bg-gray-50 border border-gray-200">
        <select value={type} onChange={e=>setType(e.target.value as typeof type)} className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 outline-none">
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>
        <input type="number" min={1} max={20} value={count} onChange={e=>setCount(+e.target.value)}
          className="w-20 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 outline-none" />
        <button onClick={generate} className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
          📝 Generate
        </button>
      </div>
      {output && (
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-xs text-gray-400">{output.split(" ").length} words</span>
            <button onClick={copy} className="text-xs text-blue-600 hover:text-blue-300">Copy</button>
          </div>
          <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-600 leading-relaxed whitespace-pre-wrap max-h-64 overflow-auto">{output}</div>
        </div>
      )}
    </div>
  );
}
