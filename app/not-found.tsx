import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-white/40 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors font-medium">
          Go Home
        </Link>
      </div>
    </main>
  );
}
