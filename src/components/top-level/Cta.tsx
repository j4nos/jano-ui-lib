"use client";

import type { ReactNode } from "react";
import { Container } from "../Container";
import { FancyShortBannerSixteenPanel } from "../FancyShortBannerSixteenPanel";

type CtaProps = {
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

export function Cta({
  eyebrow,
  title,
  description,
  button,
  buttonLabel,
  href,
  disabled,
  onButtonClick,
  className = "mt-150",
}: CtaProps) {
  return (
    <div
      className={`fancy-short-banner-sixteen ${className} aos-init aos-animate`}
      data-aos="fade-up"
    >
      <Container>
        <FancyShortBannerSixteenPanel
          eyebrow={eyebrow}
          title={title}
          description={description}
          button={button}
          buttonLabel={buttonLabel}
          href={href}
          disabled={disabled}
          onButtonClick={onButtonClick}
        />
      </Container>
    </div>
  );
}
