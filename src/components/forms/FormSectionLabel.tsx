"use client";

type FormSectionLabelProps = {
  children: string;
  className?: string;
};

export function FormSectionLabel({ children, className }: FormSectionLabelProps) {
  const rootClassName = ["form-label fw-600", className].filter(Boolean).join(" ");
  return <div className={rootClassName}>{children}</div>;
}
