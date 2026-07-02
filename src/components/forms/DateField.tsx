"use client";

import type { InputHTMLAttributes } from "react";
import { FormField } from "./FormField";

type DateFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

// Native <input type="date"> renders its segmented value via an internal
// shadow-DOM editor that doesn't vertically center the same way plain text
// does under the shared `.blog-comment-form form input` reset (fixed
// height, no line-height). We set layout inline instead — like SelectField
// does for its own native-control quirks — so it wins regardless of load
// order and doesn't depend on the consuming app's stylesheet.
export function DateField({
  htmlFor,
  label,
  required,
  description,
  labelClassName,
  wrapperClassName,
  style,
  ...props
}: DateFieldProps) {
  return (
    <FormField
      htmlFor={htmlFor}
      label={label}
      required={required}
      description={description}
      labelClassName={labelClassName}
      className={wrapperClassName}
    >
      <input
        id={htmlFor}
        type="date"
        required={required}
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "17px",
          width: "100%",
          height: "60px",
          border: "none",
          borderRadius: "8px",
          padding: "0 25px",
          background: "rgba(0, 0, 0, 0.03)",
          ...style,
        }}
        {...props}
      />
    </FormField>
  );
}
