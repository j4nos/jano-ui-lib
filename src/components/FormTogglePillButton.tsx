import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * A form-safe toggle/filter pill button — e.g. "Remote / Hybrid / On-site"
 * style filters where exactly the active option needs to look different.
 *
 * Deliberately NOT a `className`/`style` escape hatch like `Button`: the only
 * visual choice exposed is `active`, which switches between the two locked
 * pill looks (filled vs. faint outline). This keeps `FormButton` itself
 * minimal and untouched for plain in-form actions, while still giving
 * toggle-style filters a dedicated, lint-legal component to use instead of a
 * raw `<button>` inside FormContent/Form/PanelForm.
 */
type FormTogglePillButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
> & {
  children: ReactNode;
  active: boolean;
};

export function FormTogglePillButton({
  children,
  active,
  type = "button",
  ...props
}: FormTogglePillButtonProps) {
  const classes = active
    ? "badge rounded-pill bg-primary text-white border border-primary px-3 py-2"
    : "badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2";

  return (
    <button
      type={type}
      {...props}
      className={classes}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
}
