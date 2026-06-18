import type { CSSProperties, ReactNode } from "react";

type FlexAlign = "start" | "center" | "end" | "baseline" | "stretch";
type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
type FlexDirection = "row" | "column";
/** Bootstrap spacing scale (0–5). */
type FlexGap = 0 | 1 | 2 | 3 | 4 | 5;

type FlexProps = {
  children: ReactNode;
  /** `align-items-*` */
  align?: FlexAlign;
  /** `justify-content-*` */
  justify?: FlexJustify;
  /** `gap-*` on the Bootstrap spacing scale. */
  gap?: FlexGap;
  /** Adds `flex-wrap`. */
  wrap?: boolean;
  /** `flex-row` (default) or `flex-column`. */
  direction?: FlexDirection;
  /** Use `d-inline-flex` instead of `d-flex`. */
  inline?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Flexbox container built on Bootstrap utility classes.
 * Use instead of a native `<div className="d-flex …">`.
 */
export function Flex({
  children,
  align,
  justify,
  gap,
  wrap = false,
  direction,
  inline = false,
  className = "",
  style,
}: FlexProps) {
  const classes = [
    inline ? "d-inline-flex" : "d-flex",
    align ? `align-items-${align}` : null,
    justify ? `justify-content-${justify}` : null,
    typeof gap === "number" ? `gap-${gap}` : null,
    wrap ? "flex-wrap" : null,
    direction ? `flex-${direction}` : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
