"use client";
import { useState } from "react";

interface LineItem { desc: string; qty: number; rate: number; }

export default function InvoiceClient() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("INV-001");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState<LineItem[]>([{ desc: "", qty: 1, rate: 0 }]);
  const [notes, setNotes] = useState("");
  const [tax, setTax] = useState(0);

  const subtotal = items.reduce((s, i) => s + i.qty * i.rate, 0);
  const taxAmt = subtotal * (tax / 100);
  const total = subtotal + taxAmt;

  const addItem = () => setItems(p => [...p, { desc: "", qty: 1, rate: 0 }]);
  const removeItem = (i: number) => setItems(p => p.filter((_, idx) => idx !== i));
  const updateItem = (i: number, k: keyof LineItem, v: string | number) =>
    setItems(p => p.map((item, idx) => idx === i ? { ...item, [k]: v } : item));

  const print = () => window.print();

  const inp = { padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 7, fontSize: 13, color: "#1a1a2e", background: "#fff", outline: "none", width: "100%", boxSizing: "border-box" } as React.CSSProperties;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>Invoice Number</label>
          <input value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} style={inp} />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>Invoice Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inp} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>From (Your Name / Business)</label>
          <textarea value={from} onChange={e => setFrom(e.target.value)} rows={3} placeholder={"Your Company\n123 Main St\ncity@email.com"} style={{ ...inp, resize: "none" }} />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>Bill To (Client)</label>
          <textarea value={to} onChange={e => setTo(e.target.value)} rows={3} placeholder={"Client Name\nClient Address\nclient@email.com"} style={{ ...inp, resize: "none" }} />
        </div>
      </div>

      {/* Line items */}
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 8 }}>Line Items</label>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1.5fr auto", gap: 6, alignItems: "center" }}>
              <input value={item.desc} onChange={e => updateItem(i, "desc", e.target.value)} placeholder="Description" style={inp} />
              <input type="number" value={item.qty} min={1} onChange={e => updateItem(i, "qty", +e.target.value)} placeholder="Qty" style={inp} />
              <input type="number" value={item.rate} min={0} step={0.01} onChange={e => updateItem(i, "rate", +e.target.value)} placeholder="Rate ($)" style={inp} />
              <button onClick={() => removeItem(i)} style={{ padding: "8px 10px", background: "#fff0f3", color: "#e8284a", border: "1px solid #fecdd3", borderRadius: 7, cursor: "pointer", fontSize: 14 }}>✕</button>
            </div>
          ))}
          <button onClick={addItem} style={{ padding: "8px", background: "#f1f5f9", color: "#475569", border: "1px dashed #cbd5e1", borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
            + Add Line Item
          </button>
        </div>
      </div>

      {/* Totals */}
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#475569" }}>Subtotal</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>${subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, color: "#475569" }}>Tax</span>
            <input type="number" value={tax} min={0} max={100} onChange={e => setTax(+e.target.value)} style={{ width: 60, padding: "3px 8px", border: "1px solid #e2e8f0", borderRadius: 6, fontSize: 12 }} />
            <span style={{ fontSize: 12, color: "#94a3b8" }}>%</span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>${taxAmt.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 8, borderTop: "1px solid #e2e8f0" }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: "#1a1a2e" }}>Total</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#e8284a" }}>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 4 }}>Notes / Payment Terms (optional)</label>
        <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} placeholder="Payment due within 30 days. Thank you for your business!" style={{ ...inp, resize: "none" }} />
      </div>

      {/* Print button */}
      <button onClick={print} style={{ width: "100%", padding: 13, background: "#e8284a", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
        🖨️ Print / Save as PDF
      </button>
      <div style={{ padding: "10px 14px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, fontSize: 12, color: "#1d4ed8" }}>
        💡 Click Print and choose "Save as PDF" in the print dialog to download your invoice.
      </div>
    </div>
  );
}
