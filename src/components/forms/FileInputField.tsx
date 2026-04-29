"use client";

import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import { getButtonClassName } from "../Button";
import { FormField } from "./FormField";

type FileInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  label: string;
  required?: boolean;
  description?: string;
  labelClassName?: string;
  wrapperClassName?: string;
};

export function FileInputField({
  htmlFor,
  label,
  required,
  description,
  labelClassName,
  wrapperClassName,
  onChange,
  ...props
}: FileInputFieldProps) {
  const [fileName, setFileName] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFileName(event.target.files?.[0]?.name ?? "");
    onChange?.(event);
  }

  return (
    <FormField
      htmlFor={htmlFor}
      label={label}
      required={required}
      description={description}
      labelClassName={labelClassName}
      className={wrapperClassName}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          border: "1px solid rgba(17, 17, 17, 0.12)",
          borderRadius: 12,
          padding: "14px 16px",
          background: "#fff",
        }}
      >
        <div
          style={{
            flex: "1 1 0%",
            minWidth: 0,
            fontSize: 15,
            color: fileName ? "#111111" : "rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {fileName || "No file selected"}
        </div>
        <label
          htmlFor={htmlFor}
          className={getButtonClassName({ tone: "form", withTopMargin: false })}
          // Inline overrides win over the theme's `.blog-comment-form form label`
          // selector, which would otherwise force 14px / weight 400 / 5px bottom
          // padding on labels and break the button-like rendering of this one.
          style={{
            flex: "0 0 auto",
            margin: 0,
            cursor: "pointer",
            display: "inline-block",
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "-0.2px",
            paddingBottom: 0,
            textAlign: "center",
          }}
        >
          Choose file
        </label>
        <input
          id={htmlFor}
          {...props}
          type="file"
          onChange={handleChange}
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        />
      </div>
    </FormField>
  );
}
