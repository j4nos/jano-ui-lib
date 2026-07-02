"use client";

import type { InputHTMLAttributes } from "react";
import { FormField } from "./FormField";

type TimeFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

// See DateField — same native shadow-DOM vertical-centering quirk applies
// to <input type="time">, fixed the same way with inline layout styles.
//
// Note: the value passed in/out is always "HH:mm" (browsers only ever
// produce that from a plain type="time" input with no `step`). If you're
// storing an AWSTime-style "HH:mm:ss", convert at the call site.
export function TimeField({
  htmlFor,
  label,
  required,
  description,
  labelClassName,
  wrapperClassName,
  style,
  ...props
}: TimeFieldProps) {
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
        type="time"
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
