import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

type BlockProps = HTMLAttributes<HTMLDivElement>;

/**
 * Generic block-level wrapper that renders a `div`, forwarding every native
 * div attribute (className, style, role, aria-*, event handlers, …) and a `ref`.
 * Use instead of a native `<div>` for styled wrappers or ref-able anchors.
 */
export const Block = forwardRef<HTMLDivElement, BlockProps>(function Block(
  { className, children, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={className || undefined} {...rest}>
      {children}
    </div>
  );
});
