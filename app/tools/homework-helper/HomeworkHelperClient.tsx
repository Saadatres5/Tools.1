
"use client";
import { useState } from "react";

const SUBJECT_TIPS: Record<string,string[]> = {
  "Math": ["Break the problem into smaller steps","Identify what type of problem it is (algebra, geometry, etc.)","Write down the formula needed","Substitute known values","Solve step by step, checking each step","Verify your answer by plugging it back in"],
  "Science": ["Start with the scientific method: observe, hypothesize, experiment","Identify variables: independent, dependent, controlled","Draw a diagram if it helps visualize the concept","Relate new concepts to real-world examples","Review relevant formulas and constants","Check your units throughout calculations"],
  "History": ["Identify the Who, What, Where, When, Why, and How","Look for cause and effect relationships","Place the event in its historical context","Consider multiple perspectives","Connect events to broader themes","Use a timeline to organize information"],
  "English": ["Read the text multiple times for different purposes","Identify the main idea and supporting details","Analyze author's purpose, tone, and style","Look for literary devices (metaphor, simile, etc.)","Create an outline before writing","Use evidence from the text to support your arguments"],
  "Geography": ["Use maps and diagrams to visualize","Learn key terms and definitions","Understand physical vs human geography","Connect geography to history and culture","Study patterns and relationships","Practice with blank maps"],
  "Computer Science": ["Break the problem into smaller sub-problems","Write pseudocode before actual code","Test with simple inputs first","Debug systematically — one change at a time","Comment your code for clarity","Look for patterns and reuse solutions"],
};

const QUICK_TIPS = ["Take a 5-minute break if you're stuck","Explain the problem out loud to yourself","Look for similar examples in your textbook","Ask a classmate to review your work","Write down everything you know about the topic","Start with the easiest part first"];

export default function HomeworkHelperClient() {
  const [subject, setSubject] = useState("Math");
  const [question, setQuestion] = useState("");
  const subjects = Object.keys(SUBJECT_TIPS);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {subjects.map(s=>(
          <button key={s} onClick={()=>setSubject(s)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${subject===s?"bg-cyan-600":"bg-white/5 hover:bg-white/10"}`}>{s}</button>
        ))}
      </div>
      <textarea rows={3} value={question} onChange={e=>setQuestion(e.target.value)}
        placeholder="Describe your homework question or topic..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-cyan-500/50 resize-none"/>
      <div className="space-y-3">
        <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
          <h3 className="font-semibold text-sm text-cyan-300 mb-3">📚 {subject} — How to Approach It</h3>
          <ol className="space-y-2">
            {SUBJECT_TIPS[subject].map((tip,i)=>(
              <li key={i} className="flex gap-2 text-sm text-white/70">
                <span className="text-cyan-400 font-bold flex-shrink-0">{i+1}.</span>{tip}
              </li>
            ))}
          </ol>
        </div>
        <div className="p-4 rounded-xl bg-white/3 border border-white/8">
          <h3 className="font-semibold text-xs text-white/50 mb-2">💡 General Study Tips</h3>
          <ul className="space-y-1">
            {QUICK_TIPS.map((t,i)=>(
              <li key={i} className="text-xs text-white/50 flex gap-2"><span>•</span>{t}</li>
            ))}
          </ul>
        </div>
        {question.trim() && (
          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <h3 className="font-semibold text-xs text-yellow-400 mb-2">Your Question</h3>
            <p className="text-sm text-white/70">{question}</p>
            <p className="text-xs text-white/40 mt-2">Apply the {subject} steps above to work through this systematically. For complex problems, consider asking your teacher or using Khan Academy (khanacademy.org) for guided explanations.</p>
          </div>
        )}
      </div>
      <p className="text-xs text-white/20">✓ Free — no API key required</p>
    </div>
  );
}
