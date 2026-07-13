"use client";

import type { ReactNode } from "react";

type FormFieldProps = {
  htmlFor: string;
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  description?: string;
  labelClassName?: string;
};

export function FormField({
  htmlFor,
  label,
  required = false,
  children,
  className = "input-wrapper",
  description,
  labelClassName,
}: FormFieldProps) {
  return (
    <div className={className}>
      {label ? (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
          {required ? "*" : null}
        </label>
      ) : null}
      {children}
      {description ? <p>{description}</p> : null}
    </div>
  );
}
