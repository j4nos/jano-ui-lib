export type HeroBannerNineContentProps = {
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  ctaLabel: string;
  ctaHref: string;
  signInPrefix: string;
  signInLinkLabel: string;
  signInHref: string;
  ratingTitle: string;
  ratingText: string;
  highlightShapeSrc?: string;
  ctaIconSrc?: string;
};

export function HeroBannerNineContent({
  title,
  description,
  ctaLabel,
  ctaHref,
  signInPrefix,
  signInLinkLabel,
  signInHref,
  ratingTitle,
  ratingText,
  highlightShapeSrc = "/jano/images/shape/shape_114.svg",
  ctaIconSrc = "/jano/images/icon/icon_91.svg",
}: HeroBannerNineContentProps) {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta">
        {title.prefix}{" "}
        <span className="position-relative">
          {title.highlight}
          <img src={highlightShapeSrc} alt="" />
        </span>{" "}
        {title.suffix}
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30">{description}</p>
      <div className="d-lg-flex align-items-center">
        <a
          href={ctaHref}
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
        >
          <span>{ctaLabel}</span>{" "}
          <img src={ctaIconSrc} alt="" className="ms-3" />
        </a>
        <div className="mb-25 text-white signIn-btn">
          {signInPrefix} <a href={signInHref}>{signInLinkLabel}</a>
        </div>
      </div>
      <h2 className="fw-normal text-white mt-60 mb-5 lg-mt-40">
        {ratingTitle}{" "}
      </h2>
      <p className="fs-18 opacity-50 text-white">{ratingText}</p>
    </>
  );
}
