import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f8fc" }}>
      <Navbar />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", textAlign: "center", padding: "40px 24px" }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>🔍</div>
        <h1 style={{ fontFamily: "var(--font-syne,sans-serif)", fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-1px", marginBottom: 12 }}>
          404 — Page Not Found
        </h1>
        <p style={{ fontSize: 16, color: "#64748b", marginBottom: 32, maxWidth: 400 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" style={{ background: "#e8284a", color: "#fff", padding: "12px 28px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            ← Go Home
          </Link>
          <Link href="/tools" style={{ background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0", padding: "12px 28px", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            Browse Tools
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
