import type { ReactNode } from "react";

type ListProps = {
  children: ReactNode;
  className?: string;
  /** Render an ordered list (`ol`) instead of an unordered one (`ul`). */
  ordered?: boolean;
};

/**
 * Generic list wrapper that renders a `ul` (or `ol` when `ordered`).
 * Use instead of a native `<ul>` / `<ol>`.
 */
export function List({ children, className = "", ordered = false }: ListProps) {
  const cls = className || undefined;
  return ordered ? (
    <ol className={cls}>{children}</ol>
  ) : (
    <ul className={cls}>{children}</ul>
  );
}
