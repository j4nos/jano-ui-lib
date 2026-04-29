"use client";

import type { TextareaHTMLAttributes } from "react";
import { FormField } from "./FormField";

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

export function TextAreaField({
  htmlFor,
  label,
  required,
  description,
  labelClassName,
  wrapperClassName,
  ...props
}: TextAreaFieldProps) {
  return (
    <FormField
      htmlFor={htmlFor}
      label={label}
      required={required}
      description={description}
      labelClassName={labelClassName}
      className={wrapperClassName}
    >
      <textarea id={htmlFor} {...props} />
    </FormField>
  );
}
