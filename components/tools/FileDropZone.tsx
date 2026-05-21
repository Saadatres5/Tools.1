
"use client";
import { useRef, useState, useCallback } from "react";

interface Props {
  accept: string;
  multiple?: boolean;
  maxSizeMB?: number;
  label?: string;
  hint?: string;
  emoji?: string;
  onFiles: (files: File[]) => void;
}

export default function FileDropZone({
  accept, multiple = false, maxSizeMB = 50,
  label = "Drop your file here", hint, emoji = "📁", onFiles,
}: Props) {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = useCallback((files: FileList | File[]): File[] => {
    const arr = Array.from(files);
    const oversized = arr.filter(f => f.size > maxSizeMB * 1024 * 1024);
    if (oversized.length) {
      setError(`File too large. Max size: ${maxSizeMB}MB`);
      return [];
    }
    setError("");
    return arr;
  }, [maxSizeMB]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const valid = validate(e.dataTransfer.files);
    if (valid.length) onFiles(valid);
  }, [validate, onFiles]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const valid = validate(e.target.files);
    if (valid.length) onFiles(valid);
    e.target.value = "";
  };

  return (
    <div
      onDragOver={e => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 p-10 text-center select-none
        ${dragging
          ? "border-blue-400 bg-blue-500/10 scale-[1.01]"
          : "border-white/20 bg-white/3 hover:border-white/40 hover:bg-white/5"
        }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={handleChange}
      />
      <div className="text-5xl mb-4 pointer-events-none">{emoji}</div>
      <p className="font-semibold text-white mb-1 pointer-events-none">{label}</p>
      <p className="text-white/40 text-sm mb-4 pointer-events-none">
        {hint || `or click to browse • Max ${maxSizeMB}MB`}
      </p>
      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-medium pointer-events-none transition-colors">
        Choose File{multiple ? "s" : ""}
      </span>
      {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
    </div>
  );
}
