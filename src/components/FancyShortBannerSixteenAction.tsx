import type { ReactNode } from "react";
import { Button } from "./Button";

export type FancyShortBannerSixteenActionProps = {
  button?: ReactNode;
  /** Legacy/simple API. Ignored when `button` is provided. */
  buttonLabel?: string;
  href?: string;
  disabled?: boolean;
  onButtonClick?: () => void;
};

export function FancyShortBannerSixteenAction({
  button: buttonProp,
  buttonLabel,
  href,
  disabled,
  onButtonClick,
}: FancyShortBannerSixteenActionProps) {
  if (buttonProp) return <>{buttonProp}</>;
  if (!buttonLabel) return null;

  if (disabled) {
    return (
      <span
        className="btn-twentyOne fw-500"
        aria-disabled="true"
        style={{ opacity: 0.6, cursor: "default", pointerEvents: "none" }}
      >
        {buttonLabel}
      </span>
    );
  }

  if (href) {
    return (
      <Button href={href} tone="pill">
        {buttonLabel}
      </Button>
    );
  }

  return (
    <Button
      type="button"
      tone="pill"
      onClick={() => {
        onButtonClick?.();
      }}
    >
      {buttonLabel}
    </Button>
  );
}
