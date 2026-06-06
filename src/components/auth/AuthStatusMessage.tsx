"use client";

import { StatusMessage } from "../StatusMessage";

type AuthStatusMessageProps = {
  tone: "error" | "info";
  children: string;
};

/**
 * @deprecated Thin wrapper kept for backwards compatibility with the auth
 * pages. Prefer the generic `StatusMessage` (variant="inline") directly.
 */
export function AuthStatusMessage({ tone, children }: AuthStatusMessageProps) {
  return (
    <StatusMessage tone={tone} variant="inline">
      {children}
    </StatusMessage>
  );
}
