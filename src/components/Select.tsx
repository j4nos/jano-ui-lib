import type { ReactNode, SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  /** `option` elements. */
  children?: ReactNode;
};

/**
 * Thin wrapper over a native `select`, defaulting to the Jano `form-select`
 * styling. Pass `option` elements as children. All native select props
 * (value, onChange, id, disabled, …) are forwarded.
 */
export function Select({
  className = "form-select",
  children,
  ...props
}: SelectProps) {
  return (
    <select className={className} {...props}>
      {children}
    </select>
  );
}
