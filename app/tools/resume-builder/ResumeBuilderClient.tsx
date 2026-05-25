"use client";
import { useState } from "react";

export default function ResumeBuilderClient() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");

  const inp = { width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 7, fontSize: 13, color: "#1a1a2e", background: "#fff", outline: "none", boxSizing: "border-box" } as React.CSSProperties;
  const label = (text: string) => <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>{text}</label>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#1d4ed8" }}>
        💡 Fill in your details, then click Print to save your resume as a PDF.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>{label("Full Name")}<input value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" style={inp} /></div>
        <div>{label("Job Title")}<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Software Engineer" style={inp} /></div>
        <div>{label("Email")}<input value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" style={inp} /></div>
        <div>{label("Phone")}<input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 555 000 0000" style={inp} /></div>
        <div>{label("Location")}<input value={location} onChange={e => setLocation(e.target.value)} placeholder="New York, USA" style={inp} /></div>
        <div>{label("LinkedIn (optional)")}<input value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="linkedin.com/in/yourname" style={inp} /></div>
      </div>

      <div>{label("Professional Summary")}<textarea value={summary} onChange={e => setSummary(e.target.value)} rows={3} placeholder="A brief summary of your professional background, skills, and goals..." style={{ ...inp, resize: "vertical" }} /></div>
      <div>{label("Work Experience")}<textarea value={experience} onChange={e => setExperience(e.target.value)} rows={5} placeholder={"Company Name | Job Title | 2020–Present\n• Key responsibility or achievement\n• Another achievement\n\nPrevious Company | Role | 2018–2020\n• Achievement"} style={{ ...inp, resize: "vertical", fontFamily: "monospace" }} /></div>
      <div>{label("Education")}<textarea value={education} onChange={e => setEducation(e.target.value)} rows={3} placeholder={"University Name — BSc Computer Science — 2018\nOnline Course — Certification Name — 2020"} style={{ ...inp, resize: "vertical" }} /></div>
      <div>{label("Skills (comma separated)")}<input value={skills} onChange={e => setSkills(e.target.value)} placeholder="JavaScript, React, Python, SQL, Communication, Leadership" style={inp} /></div>

      <button onClick={() => window.print()} style={{ width: "100%", padding: 13, background: "#e8284a", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        🖨️ Print / Save as PDF
      </button>
    </div>
  );
}
