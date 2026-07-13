export type HeroBannerTwelveContentProps = {
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function HeroBannerTwelveContent({
  title = "Start learning from our top experts.",
  description = "Unlock your potential with unlimited short courses & earn certificates to boost your CV.",
  primaryCtaLabel = "Explore all Courses",
  primaryCtaHref = "#",
  secondaryCtaLabel = "Join for Free Now!",
  secondaryCtaHref = "#",
}: HeroBannerTwelveContentProps) {
  return (
    <div
      className="text-wrapper wow fadeInLeft"
      style={{ visibility: "visible", animationName: "fadeInLeft" }}
    >
      <h1 className="hero-heading fw-500 tx-dark">{title}</h1>
      <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
        {description}
      </p>
      <div className="d-lg-flex align-items-center">
        <a
          href={primaryCtaHref}
          className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
        >
          <span>{primaryCtaLabel}</span>
          <img
            src="/jano/images/icon/icon_123.svg"
            alt=""
            className="ms-3"
          />
        </a>
        <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
          <a href={secondaryCtaHref} className="fw-500 tran3s">
            {secondaryCtaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
