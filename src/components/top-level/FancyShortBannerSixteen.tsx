"use client";

import type { ReactNode } from "react";
import { Button } from "../Button";

type FancyShortBannerSixteenProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  button?: ReactNode;
  /** Legacy/simple API. Ignored when `button` is provided. */
  buttonLabel?: string;
  href?: string;
  disabled?: boolean;
  onButtonClick?: () => void;
  className?: string;
};

export function FancyShortBannerSixteen({
  eyebrow,
  title,
  description,
  button: buttonProp,
  buttonLabel,
  href,
  disabled,
  onButtonClick,
  className = "mt-150",
}: FancyShortBannerSixteenProps) {
  let button: ReactNode = buttonProp ?? null;

  if (!button && buttonLabel) {
    if (disabled) {
      button = (
        <span
          className="btn-twentyOne fw-500"
          aria-disabled="true"
          style={{ opacity: 0.6, cursor: "default", pointerEvents: "none" }}
        >
          {buttonLabel}
        </span>
      );
    } else if (href) {
      button = (
        <Button href={href} tone="pill">
          {buttonLabel}
        </Button>
      );
    } else {
      button = (
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
  }

  return (
    <div
      className={`fancy-short-banner-sixteen ${className} aos-init aos-animate`}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
          <div className="row">
            <div className="col-xl-10 col-md-11 m-auto">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-wrapper text-center text-lg-start md-pb-30">
                    <div className="sc-title fs-18 pb-10">{eyebrow}</div>
                    <h2 className="main-title fw-500 text-white m0">{title}</h2>
                    {description ? (
                      <div className="mt-20 text-white">{description}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-5 ms-auto text-center text-lg-end">
                  {button}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
