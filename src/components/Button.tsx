import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonTone = "pill" | "form";

type CommonProps = {
  children: ReactNode;
  tone?: ButtonTone;
  withTopMargin?: boolean;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function getButtonClassName({
  tone = "form",
  withTopMargin = false,
  className = "",
}: {
  tone?: ButtonTone;
  withTopMargin?: boolean;
  className?: string;
}) {
  return [
    tone === "pill" ? "btn-twentyOne" : "btn-twentyTwo",
    "fw-500",
    "tran3s",
    withTopMargin ? "mt-30" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const {
    children,
    tone = "form",
    withTopMargin = false,
    className = "",
  } = props;

  const classes = getButtonClassName({ tone, withTopMargin, className });

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children: _children,
      tone: _tone,
      withTopMargin: _withTopMargin,
      className: _className,
      ...linkProps
    } = props as ButtonAsLinkProps;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  const {
    children: _children,
    tone: _tone,
    withTopMargin: _withTopMargin,
    className: _className,
    ...rest
  } = buttonProps;

  return (
    <button
      {...rest}
      className={classes}
      style={{ display: "inline-block", ...(rest.style ?? {}) }}
    >
      {children}
    </button>
  );
}
