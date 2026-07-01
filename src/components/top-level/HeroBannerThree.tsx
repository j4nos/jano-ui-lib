import type { ReactElement, ReactNode } from "react";
import { Block } from "../Block";
import { Container } from "../Container";
import { Row } from "../Row";

export type HeroBannerThreeProps = {
  /** Heading text/node for the content column. */
  heading?: ReactNode;
  /** Subtitle text/node for the content column. */
  subtitle?: ReactNode;
  /** Label for the primary CTA button. Default: "Browse Jobs" */
  ctaLabel?: string;
  /** href for the primary CTA button. Default: "#" */
  ctaHref?: string;
  /** Override the entire CTA slot with a custom node (e.g. a Button). */
  cta?: ReactNode;
  /** Bootstrap col class for the content (left) column. Default: "col-lg-4" */
  contentColumnClass?: string;
  /** Bootstrap col class for the media (right) column. Default: "col-lg-8" */
  mediaColumnClass?: string;
  /** First screen image src. */
  image1Src?: string;
  /** Second screen image src. */
  image2Src?: string;
};

export function HeroBannerThree({
  heading,
  subtitle,
  ctaLabel = "Browse Jobs",
  ctaHref = "#",
  cta,
  contentColumnClass = "col-lg-4",
  mediaColumnClass = "col-lg-8",
  image1Src,
  image2Src,
}: HeroBannerThreeProps): ReactElement {
  return (
    <Block className="hero-banner-three position-relative pt-200 md-pt-150">
      <Container>
        <Row>
          <Block className={`${contentColumnClass} wow fadeInLeft`}>
            {heading && (
              <h1 className="hero-heading fw-bold mt-45 mb-40 md-mt-20">{heading}</h1>
            )}
            {subtitle && (
              <p className="text-lg mb-50 lg-mb-30 pe-xxl-4">{subtitle}</p>
            )}
            <div className="download-btn d-inline-block mb-25">
              {cta ?? <a href={ctaHref} className="tran3s">{ctaLabel}</a>}
            </div>
          </Block>
          <Block className={`${mediaColumnClass} wow fadeInRight`}>
            <Block className="mobile-screen">
              <Row className="gx-xxl-5 justify-content-center align-items-center">
                {!!image1Src && (
                  <Block className="col-6">
                    <img src={image1Src} alt="" className="screen-one" />
                  </Block>
                )}
                {!!image2Src && (
                  <Block className="col-6">
                    <img src={image2Src} alt="" className="screen-two" />
                  </Block>
                )}
              </Row>
            </Block>
          </Block>
        </Row>
      </Container>
    </Block>
  );
}
