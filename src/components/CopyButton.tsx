"use client";

import { useState } from "react";
import { Button } from "./Button";

type CopyButtonProps = {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
};

export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      tone="form"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch (error) {
          console.warn("Clipboard write failed", error);
        }
      }}
    >
      {copied ? copiedLabel : label}
    </Button>
  );
}
