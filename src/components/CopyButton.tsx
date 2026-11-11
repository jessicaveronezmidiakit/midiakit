"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
};

export function CopyButton({ text, label, copiedLabel, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" onClick={copy} className={className}>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
      <span aria-hidden>{copied ? "✓" : "⧉"}</span>
    </button>
  );
}
