import Link from "next/link";
import type { ReactNode } from "react";
import { Button, getButtonClassName } from "./Button";

type CtaButtonVariant = "primary" | "status" | "ghost";

export type CtaButtonProps = {
  label: string;
  subLabel?: ReactNode;
  variant?: CtaButtonVariant;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  paymentMethodsImageSrc?: string;
  paymentMethodsImageAlt?: string;
};

const VARIANT_CLASS: Record<CtaButtonVariant, string> = {
  primary: getButtonClassName({ tone: "pill" }),
  status: getButtonClassName({ tone: "pill" }),
  ghost: getButtonClassName({ tone: "pill" }),
};

const DISABLED_STYLE = {
  opacity: 0.6,
  cursor: "default" as const,
  pointerEvents: "none" as const,
};

function Wrapper({
  children,
  align,
}: {
  children: ReactNode;
  align: "right" | "center";
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: align === "right" ? "flex-end" : "center",
        gap: 8,
      }}
    >
      {children}
    </span>
  );
}

function SubText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        fontSize: 13,
        color: "rgba(255,255,255,0.75)",
        fontWeight: 400,
        letterSpacing: 0,
      }}
    >
      {children}
    </span>
  );
}

export function CtaButton({
  label,
  subLabel,
  variant = "primary",
  disabled,
  className = "",
  ariaLabel,
  href,
  onClick,
  type = "button",
  paymentMethodsImageSrc,
  paymentMethodsImageAlt = "Accepted payment methods",
}: CtaButtonProps) {
  const classes = `${VARIANT_CLASS[variant]} ${className}`.trim();
  const style = disabled ? DISABLED_STYLE : undefined;

  let pill: ReactNode;

  if (href !== undefined) {
    if (disabled) {
      pill = (
        <span
          aria-disabled="true"
          aria-label={ariaLabel ?? label}
          className={classes}
          style={style}
        >
          {label}
        </span>
      );
    } else {
      pill = (
        <Button
          href={href}
          aria-label={ariaLabel ?? label}
          tone="pill"
          className={className}
        >
          {label}
        </Button>
      );
    }
  } else {
    pill = (
      <Button
        type={type}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        aria-label={ariaLabel ?? label}
        tone="pill"
        className={className}
        style={{ border: "none", ...(style ?? {}) }}
      >
        {label}
      </Button>
    );
  }

  if (!subLabel) return pill;

  return (
    <Wrapper align="right">
      {pill}
      <SubText>{subLabel}</SubText>
      {paymentMethodsImageSrc ? (
        <img
          src={paymentMethodsImageSrc}
          alt={paymentMethodsImageAlt}
          style={{ maxWidth: 360, width: "100%", height: "auto" }}
        />
      ) : null}
    </Wrapper>
  );
}
