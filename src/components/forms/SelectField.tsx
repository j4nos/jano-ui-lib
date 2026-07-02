"use client";

import type { SelectHTMLAttributes } from "react";
import { FormField } from "./FormField";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

export function SelectField({
  htmlFor,
  label,
  required,
  description,
  labelClassName,
  wrapperClassName,
  children,
  style,
  ...props
}: SelectFieldProps) {
  return (
    <FormField
      htmlFor={htmlFor}
      label={label}
      required={required}
      description={description}
      labelClassName={labelClassName}
      className={wrapperClassName}
    >
      <div style={{ position: "relative" }}>
        <select
          id={htmlFor}
          required={required}
          style={{
            display: "block",
            fontSize: "17px",
            width: "100%",
            height: "60px",
            border: "none",
            borderRadius: "8px",
            padding: "0 56px 0 25px",
            background: "rgba(0, 0, 0, 0.03)",
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            ...style,
          }}
          {...props}
        >
          {children}
        </select>
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "26px",
            top: "50%",
            width: "10px",
            height: "10px",
            borderRight: "2px solid #000",
            borderBottom: "2px solid #000",
            pointerEvents: "none",
            transform: "translateY(-70%) rotate(45deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
    </FormField>
  );
}
