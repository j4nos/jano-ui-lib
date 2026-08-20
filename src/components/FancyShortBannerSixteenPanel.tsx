import type { ReactNode } from "react";
import { Row } from "./Row";
import { Column } from "./Column";
import { FancyShortBannerSixteenContent } from "./FancyShortBannerSixteenContent";
import { FancyShortBannerSixteenAction } from "./FancyShortBannerSixteenAction";

export type FancyShortBannerSixteenPanelProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  button?: ReactNode;
  /** Legacy/simple API. Ignored when `button` is provided. */
  buttonLabel?: string;
  href?: string;
  disabled?: boolean;
  onButtonClick?: () => void;
};

export function FancyShortBannerSixteenPanel({
  eyebrow,
  title,
  description,
  button,
  buttonLabel,
  href,
  disabled,
  onButtonClick,
}: FancyShortBannerSixteenPanelProps) {
  return (
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
  );
}
