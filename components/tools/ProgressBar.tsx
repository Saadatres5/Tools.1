"use client";
interface Props { progress: number; label?: string; }
export default function ProgressBar({ progress, label }: Props) {
  return (
    <div className="w-full">
      {label && <p className="text-sm text-white/60 mb-2 text-center">{label}</p>}
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
      <p className="text-xs text-white/30 text-center mt-1">{Math.round(progress)}%</p>
    </div>
  );
}
