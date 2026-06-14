"use client";

import type { CSSProperties, ReactNode } from "react";

export type StatusTone =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "pending";

export type StatusVariant = "inline" | "pill";

export type StatusMessageProps = {
  /** Semantic tone — drives the colour. */
  tone: StatusTone;
  /**
   * Visual shape.
   * - `inline` (default): light, rounded box for in-form / page messages.
   * - `pill`: solid, white-on-colour pill used as the toast surface.
   */
  variant?: StatusVariant;
  /** Optional trailing slot, e.g. a copy or dismiss button (mainly for `pill`). */
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** ARIA role. Defaults: `pill` → "status", `inline` → "alert". */
  role?: string;
  /** aria-live politeness. Defaults: `pill` → "polite". */
  ariaLive?: "off" | "polite" | "assertive";
};

const INLINE_BACKGROUND: Record<StatusTone, string> = {
  info: "#EEF4FF",
  success: "#E8F7F0",
  warning: "#FFF6E5",
  error: "#FFE8E8",
  pending: "#EEF1F5",
};

const PILL_BACKGROUND: Record<StatusTone, string> = {
  info: "#1d4ed8",
  success: "#0f766e",
  warning: "#a16207",
  error: "#b91c1c",
  // Kept in the amber family so the existing "transaction in progress"
  // toast keeps its current look after the extraction.
  pending: "#a16207",
};

export function StatusMessage({
  tone,
  variant = "inline",
  action,
  children,
  className,
  style,
  role,
  ariaLive,
}: StatusMessageProps) {
  const resolvedRole = role ?? (variant === "pill" ? "status" : "alert");
  const resolvedAriaLive =
    ariaLive ?? (variant === "pill" ? "polite" : undefined);

  if (variant === "pill") {
    return (
      <span
        className={className}
        role={resolvedRole}
        aria-live={resolvedAriaLive}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.6rem",
          minWidth: 96,
          maxWidth: "100%",
          padding: "0.5rem 0.85rem",
          borderRadius: 999,
          background: PILL_BACKGROUND[tone],
          color: "#fff",
          fontSize: "0.9rem",
          fontWeight: 700,
          lineHeight: 1.25,
          textAlign: "center",
          whiteSpace: "normal",
          boxShadow: "0 10px 32px rgba(0, 0, 0, 0.18)",
          ...style,
        }}
      >
        <span style={{ overflowWrap: "anywhere" }}>{children}</span>
        {action}
      </span>
    );
  }

  return (
    <div
      className={className}
      role={resolvedRole}
      aria-live={resolvedAriaLive}
      style={{
        marginTop: 20,
        marginBottom: 6,
        borderRadius: 10,
        padding: "14px 16px",
        background: INLINE_BACKGROUND[tone],
        color: "#000",
        fontSize: 15,
        lineHeight: "24px",
        // Break long unbroken tokens (e.g. tx hashes / calldata) onto new lines
        // instead of overflowing the box.
        overflowWrap: "anywhere",
        wordBreak: "break-word",
        ...style,
      }}
    >
      {action ? (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.6rem",
          }}
        >
          <span>{children}</span>
          {action}
        </span>
      ) : (
        children
      )}
    </div>
  );
}
