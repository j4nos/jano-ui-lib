import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";

/**
 * A form-context button locked to `tone="form"`.
 *
 * Intentionally omits `tone`, `withTopMargin`, `className`, and `style` so
 * callers cannot accidentally apply pill styling, Bootstrap overrides, or
 * inline colour hacks. Every button inside a form should use this component
 * (or `FormSubmitButton` for the submit action) — never `Button` directly.
 *
 * Accepts the same as-a-link escape hatch as `Button` itself (pass `href`):
 * a form can legitimately need a same-styled link action alongside its real
 * buttons (e.g. "view the API schema this form posts to") without breaking
 * out of the form-locked styling.
 */
// A single merged prop type (button attrs + anchor attrs, href optional)
// instead of Button's own strict ButtonAsButtonProps | ButtonAsLinkProps
// discriminated union — TypeScript's JSX attribute checker doesn't reliably
// pick the right union member here (it kept checking `href` against the
// button-only branch even when target/rel were also passed), so this stays
// permissive at the type level and defers to the same runtime `"href" in
// props` check Button.tsx itself uses to decide which element to render.
type FormButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  "style" | "className"
> & {
  children: ReactNode;
};

export function FormButton({ children, href, ...props }: FormButtonProps) {
  if (typeof href === "string") {
    // Cast: `props` here is the merged button+anchor attribute bag (minus
    // href), not the narrower ButtonAsLinkProps Button.tsx itself declares —
    // safe, since the only fields that actually reach the DOM are real
    // anchor attributes, exactly as if this were called directly with href.
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Button href={href} tone="form" withTopMargin={false} {...(props as any)}>
        {children}
      </Button>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Button {...(props as any)} tone="form" withTopMargin={false}>
      {children}
    </Button>
  );
}
