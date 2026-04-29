"use client";

import type { InputHTMLAttributes } from "react";
import { useId, useState } from "react";

type AuthPasswordFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  wrapperClassName?: string;
};

export function AuthPasswordField({
  label,
  id,
  name,
  placeholder = "Enter Password",
  wrapperClassName = "input-group-meta mb-25",
  ...props
}: AuthPasswordFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const [visible, setVisible] = useState(false);

  return (
    <div className={wrapperClassName}>
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className="pass_log_id"
        {...props}
      />
      <span className="placeholder_icon">
        <span
          className={`passVicon ${visible ? "eye-slash" : ""}`.trim()}
          onClick={() => setVisible((current) => !current)}
          role="button"
          aria-label={visible ? "Hide password" : "Show password"}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setVisible((current) => !current);
            }
          }}
        >
          <img src="/jano/images/icon/icon_151.svg" alt="" />
        </span>
      </span>
    </div>
  );
}
