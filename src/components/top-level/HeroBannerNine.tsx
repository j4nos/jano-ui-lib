export type HeroBannerNineProps = {
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
  partners?: string[];
  partnerLead?: string;
  partnerHighlight?: string;
  /** Optional asset overrides; default to the Jano theme paths. */
  highlightShapeSrc?: string;
  ctaIconSrc?: string;
  galleryImageOneSrc?: string;
  galleryImageTwoSrc?: string;
  galleryImageThreeSrc?: string;
  partnerShapeSrc?: string;
};

export default function HeroBannerNine({
  title,
  description,
  ctaLabel,
  ctaHref,
  signInPrefix,
  signInLinkLabel,
  signInHref,
  ratingTitle,
  ratingText,
  partners,
  partnerLead,
  partnerHighlight,
  highlightShapeSrc = "/jano/images/shape/shape_114.svg",
  ctaIconSrc = "/jano/images/icon/icon_91.svg",
  galleryImageOneSrc = "/images/media/img_41.jpg",
  galleryImageTwoSrc = "/images/media/img_42.jpg",
  galleryImageThreeSrc = "/images/media/img_43.jpg",
  partnerShapeSrc = "/jano/images/shape/shape_119.svg",
}: HeroBannerNineProps) {
  return (
    <div className="hero-banner-nine position-relative zn2 pt-225 md-pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
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
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="image-gallery">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="img-box position-relative mt-35 img-box-one">
              <img src={galleryImageOneSrc} alt="" className="main-img" />
              <img
                src="/images/shape/shape_115.svg"
                alt=""
                className="shapes shape-one"
              />
            </div>
            <div className="img-box position-relative mt-35 img-box-two">
              <img src={galleryImageTwoSrc} alt="" className="main-img" />
              <img
                src="/images/shape/shape_118.svg"
                alt=""
                className="shapes shape-four"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="img-box position-relative mt-35 img-box-three">
              <img src={galleryImageThreeSrc} alt="" className="main-img" />
              <img
                src="/images/shape/shape_116.svg"
                alt=""
                className="shapes shape-two"
              />
              <img
                src="/images/shape/shape_117.svg"
                alt=""
                className="shapes shape-three"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* /.image-gallery */}
      {partners && partners.length > 0 ? (
        <div className="partner-section-five position-relative mt-130 lg-mt-100">
          <div className="wrapper m-auto">
            <div className="d-xl-flex align-items-center">
              <h3 className="title tx-dark d-flex justify-content-center align-items-center m0 lg-pb-30">
                {partnerLead ? (
                  <span className="fw-bold">{partnerLead}</span>
                ) : null}{" "}
                {partnerHighlight ? (
                  <span className="font-recoleta">{partnerHighlight}</span>
                ) : null}{" "}
                <span className="ms-4 d-none d-sm-inline-block">
                  <img src={partnerShapeSrc} alt="" />
                </span>
              </h3>
              <div className="logo-wrapper fw-500 tx-dark d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between">
                {partners.map((partner) => (
                  <div className="br-name" key={partner}>
                    {partner}
                  </div>
                ))}
              </div>{" "}
              {/* /.logo-wrapper */}
            </div>
          </div>{" "}
          {/* /.wrapper */}
        </div>
      ) : null}
    </div>
  );
}
