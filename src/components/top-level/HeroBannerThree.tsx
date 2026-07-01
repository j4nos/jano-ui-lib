import type { ReactElement } from "react";
import { Block } from "../Block";
import { Container } from "../Container";
import { Row } from "../Row";

export type HeroBannerThreeProps = {
  /** Bootstrap col class for the content (left) column. Default: "col-lg-4" */
  contentColumnClass?: string;
  /** Bootstrap col class for the media (right) column. Default: "col-lg-8" */
  mediaColumnClass?: string;
  /** Override for the first (left) screen image. Default: jano/images/media/img_13.png */
  image1Src?: string;
  /** Override for the second (right) screen image. Default: jano/images/media/img_14.png */
  image2Src?: string;
  /** Label for the primary CTA button. Default: "Download - It's free" */
  ctaLabel?: string;
  /** href for the primary CTA button. Default: "#" */
  ctaHref?: string;
};

export function HeroBannerThree({
  contentColumnClass = "col-lg-4",
  mediaColumnClass = "col-lg-8",
  image1Src = "jano/images/media/img_13.png",
  image2Src = "jano/images/media/img_14.png",
  ctaLabel = "Download - It's free",
  ctaHref = "#",
}: HeroBannerThreeProps): ReactElement {
  return (
    <Block className="hero-banner-three position-relative pt-200 md-pt-150">
      <Container>
        <Row>
          <Block className={`${contentColumnClass} wow fadeInLeft`}>
            <a href="#" className="slogan d-inline-block">
              <strong className="fw-500">Offer</strong> is going on till friday,
              $1.99/mo. <i className="fas fa-chevron-right" />
            </a>
            <h1 className="hero-heading fw-bold mt-45 mb-40 md-mt-20">
              Word&apos;s No. 1 app for Online training.
            </h1>
            <p className="text-lg mb-50 lg-mb-30 pe-xxl-4">
              Janu delivered blazing fast performance, striking word soludtion
            </p>
            <div className="d-sm-flex align-items-center">
              <a
                className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                data-fancybox=""
                href="https://www.youtube.com/embed/aXFSJTjVjw0"
              >
                <i className="bi bi-play" />
                <div className="ps-3">
                  <span className="d-block fs-15 text-uppercase">Watch</span>
                  <strong className="fs-18 fw-normal tx-dark d-block">
                    Intro Video
                  </strong>
                </div>
              </a>
              <div className="download-btn d-inline-block mb-25 me-4 order-sm-first">
                <a href={ctaHref} className="tran3s">
                  {ctaLabel}
                </a>
              </div>
            </div>
            <h2 className="fw-500 mt-40 mb-5">A+ Rating </h2>
            <p className="fs-18 opacity-75">
              Avg rating 4.8 makes us world most best apps.
            </p>
          </Block>
          <Block className={`${mediaColumnClass} wow fadeInRight`}>
            <Block className="mobile-screen">
              <Row className="gx-xxl-5 justify-content-center align-items-center">
                <Block className="col-6">
                  <img
                    src={image1Src}
                    alt=""
                    className="screen-one"
                  />
                </Block>
                <Block className="col-6">
                  <Block className="card-one d-flex align-items-center mb-50 xs-mb-20">
                    <Block className="icon rounded-circle d-none d-sm-flex align-items-center justify-content-center">
                      <i className="bi bi-check-lg" />
                    </Block>
                    <h6 className="fw-500 fs-20 ps-sm-4 m0">
                      Save up to 50% in Yearly plan.
                    </h6>
                  </Block>
                  <img
                    src={image2Src}
                    alt=""
                    className="screen-two"
                  />
                </Block>
              </Row>
            </Block>
          </Block>
        </Row>
      </Container>
    </Block>
  );
}
