"use client";

import type { InputHTMLAttributes } from "react";
import { FormField } from "./FormField";

type TextInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

export function TextInputField({
  htmlFor,
  label,
  required,
  description,
  labelClassName,
  wrapperClassName,
  ...props
}: TextInputFieldProps) {
  return (
    <FormField
      htmlFor={htmlFor}
      label={label}
      required={required}
      description={description}
      labelClassName={labelClassName}
      className={wrapperClassName}
    >
      <input id={htmlFor} required={required} {...props} />
    </FormField>
  );
}
