"use client";

import type { InputHTMLAttributes } from "react";

type AuthInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  wrapperClassName?: string;
};

export function AuthInputField({
  label,
  id,
  wrapperClassName = "input-group-meta mb-25",
  ...props
}: AuthInputFieldProps) {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
