"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button, getButtonClassName } from "./Button";

type FormSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pendingLabel?: ReactNode;
  variant?: "default" | "bare";
  withTopMargin?: boolean;
};

export function FormSubmitButton({
  children,
  pendingLabel,
  variant = "default",
  withTopMargin = false,
  className = "",
  type = "submit",
  disabled,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  const classes =
    variant === "default"
      ? getButtonClassName({
          tone: "form",
          withTopMargin,
          className,
        })
      : ["fw-500", "tran3s", withTopMargin ? "mt-30" : null, className]
          .filter(Boolean)
          .join(" ");
  const resolvedPendingLabel =
    pendingLabel ??
    (typeof children === "string" ? `${children}...` : "Working...");

  if (variant === "default") {
    return (
      <Button
        type={type}
        className={className}
        tone="form"
        withTopMargin={withTopMargin}
        disabled={disabled || pending}
        {...props}
      >
        {pending ? resolvedPendingLabel : children}
      </Button>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || pending}
      {...props}
    >
      {pending ? resolvedPendingLabel : children}
    </button>
  );
}
