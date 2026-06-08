"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

type CheckboxFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  id: string;
  label: ReactNode;
  wrapperClassName?: string;
};

export function CheckboxField({
  id,
  label,
  wrapperClassName = "agreement-checkbox d-flex justify-content-between align-items-center",
  ...props
}: CheckboxFieldProps) {
  return (
    <div className={wrapperClassName}>
      <div>
        <input id={id} type="checkbox" {...props} />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}
