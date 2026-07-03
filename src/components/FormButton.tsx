import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { Button } from "./Button";

/**
 * A form-context button locked to `tone="form"`.
 *
 * Intentionally omits `tone` and `withTopMargin` so callers cannot
 * accidentally switch to pill styling or reintroduce the top-margin spacing
 * meant for standalone buttons. `className`/`style` ARE allowed (unlike the
 * original version of this component) because some in-form buttons are
 * genuinely not plain submit/cancel actions — e.g. filter toggle pills or a
 * client-side export button — and still need their own visual treatment on
 * top of the locked `tone="form"` base. Every button inside a form should
 * still use this component (or `FormSubmitButton` for the submit action) —
 * never `Button` directly — so the no-restricted-syntax lint rule banning
 * raw <button> inside Form/BlogCommentForm/PanelForm can catch mistakes.
 */
type FormButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function FormButton({ children, ...props }: FormButtonProps) {
  return (
    <Button {...props} tone="form" withTopMargin={false}>
      {children}
    </Button>
  );
}
