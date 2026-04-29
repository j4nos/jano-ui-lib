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
  // Match the Jano `blog-comment-form` template — every input wrapper carries
  // a `mb-35` bottom margin between rows so the form has breathing room.
  className = "input-wrapper mb-35",
  description,
  labelClassName,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
        {required ? "*" : null}
      </label>
      {children}
      {description ? <p>{description}</p> : null}
    </div>
  );
}
