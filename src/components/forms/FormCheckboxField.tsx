"use client";

import { useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

type FormCheckboxFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked"
> & {
  id: string;
  label: ReactNode;
  checked: boolean;
  wrapperClassName?: string;
};

// The library's one checkbox control - use this everywhere a checkbox is
// needed, including login/signup.
//
// Same visual spec as the template's old ".agreement-checkbox" look (see
// style.css: 13x13 box, 2px radius, translucent border, solid-black checked
// state with a bootstrap-icons checkmark glyph), but fully self-contained
// via inline styles computed from the `checked` prop and local focus state,
// instead of CSS ::before/:checked selectors scoped to a
// ".user-data-section" ancestor. No CSS file is touched and no <style> tag
// is added - this works identically on any page, regardless of ancestry.
export function FormCheckboxField({
  id,
  label,
  checked,
  wrapperClassName = "d-flex align-items-center gap-2",
  onFocus,
  onBlur,
  ...props
}: FormCheckboxFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={id}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 15,
          cursor: "pointer",
          margin: 0,
        }}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          style={{
            position: "absolute",
            opacity: 0,
            width: 13,
            height: 13,
            margin: 0,
            cursor: "pointer",
          }}
          {...props}
        />
        <span
          aria-hidden="true"
          style={{
            width: 13,
            height: 13,
            lineHeight: "11px",
            borderRadius: 2,
            border: `2px solid ${checked ? "#000" : "rgba(0, 0, 0, 0.3)"}`,
            background: checked ? "#000" : "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            color: "#fff",
            fontFamily: "bootstrap-icons",
            outline: focused ? "2px solid rgba(0, 0, 0, 0.5)" : "none",
            outlineOffset: 2,
            flexShrink: 0,
            transition: "all 0.1s ease-in-out",
          }}
        >
          {checked ? "" : ""}
        </span>
        {label}
      </label>
    </div>
  );
}
