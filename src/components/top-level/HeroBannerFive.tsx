import type { ReactElement } from "react";

export type HeroBannerFiveProps = {
  title?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  titleImageSrc?: string;
  titleImageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroBannerFive({
  title = "Jegyed",
  titleHighlight = "kézben.",
  titleSuffix = "Minden rendezvény egy helyen.",
  titleImageSrc = "/jano/images/shape/shape_71.svg",
  titleImageAlt = "",
  ctaLabel = "Böngéssz rendezvények között",
  ctaHref = "#events",
}: HeroBannerFiveProps): ReactElement {
  return (
    <div className="hero-banner-five text-center position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 m-auto wow fadeInUp" data-wow-delay="0.2s">
            <h1 className="hero-heading text-white mb-50 md-mb-30">
              {title}{" "}
              <span className="position-relative">
                {titleHighlight}{" "}
                {titleImageSrc && <img src={titleImageSrc} alt={titleImageAlt} />}
              </span>
              {titleSuffix && (
                <span>
                  {" "}
                  <br /> {titleSuffix}
                </span>
              )}
            </h1>
          </div>
        </div>
        <a
          href={ctaHref}
          className="donate-btn fw-500 tran3s wow fadeInUp"
          data-wow-delay="0.4s"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
