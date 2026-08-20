"use client";

import type { ReactNode } from "react";
import { Row } from "../Row";
import { Column } from "../Column";
import { FancyShortBannerSixteenContent } from "../FancyShortBannerSixteenContent";
import { FancyShortBannerSixteenAction } from "../FancyShortBannerSixteenAction";

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
  button,
  buttonLabel,
  href,
  disabled,
  onButtonClick,
  className = "mt-150",
}: FancyShortBannerSixteenProps) {
  return (
    <div
      className={`fancy-short-banner-sixteen ${className} aos-init aos-animate`}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
          <Row>
            <Column className="col-xl-10 col-md-11 m-auto">
              <Row className="align-items-center">
                <Column className="col-lg-6">
                  <FancyShortBannerSixteenContent
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                  />
                </Column>
                <Column className="col-lg-5 ms-auto text-center text-lg-end">
                  <FancyShortBannerSixteenAction
                    button={button}
                    buttonLabel={buttonLabel}
                    href={href}
                    disabled={disabled}
                    onButtonClick={onButtonClick}
                  />
                </Column>
              </Row>
            </Column>
          </Row>
        </div>
      </div>
    </div>
  );
}
