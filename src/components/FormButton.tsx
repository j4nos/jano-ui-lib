import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";

/**
 * A form-context button locked to `tone="form"`.
 *
 * Intentionally omits `tone`, `withTopMargin`, `className`, and `style` so
 * callers cannot accidentally apply pill styling, Bootstrap overrides, or
 * inline colour hacks. Every button inside a form should use this component
 * (or `FormSubmitButton` for the submit action) — never `Button` directly.
 */
type FormButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
> & {
  children: ReactNode;
};

export function FormButton({ children, ...props }: FormButtonProps) {
  return (
    <Button {...props} tone="form" withTopMargin={false}>
      {children}
    </Button>
  );
}
