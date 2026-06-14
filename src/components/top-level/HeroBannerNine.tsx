import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";
import { HeroBannerNineContent } from "../HeroBannerNineContent";
import { HeroBannerNineGalleryLeft } from "../HeroBannerNineGalleryLeft";
import { HeroBannerNineGalleryRight } from "../HeroBannerNineGalleryRight";

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
  galleryImageOneSrc = "/jano/images/media/img_41.jpg",
  galleryImageTwoSrc = "/jano/images/media/img_42.jpg",
  galleryImageThreeSrc = "/jano/images/media/img_43.jpg",
  partnerShapeSrc = "/jano/images/shape/shape_119.svg",
}: HeroBannerNineProps) {
  return (
    <div className="hero-banner-nine position-relative zn2 pt-225 md-pt-150">
      <Container>
        <Row>
          <Column className="col-lg-6 col-md-6">
            <HeroBannerNineContent
              title={title}
              description={description}
              ctaLabel={ctaLabel}
              ctaHref={ctaHref}
              signInPrefix={signInPrefix}
              signInLinkLabel={signInLinkLabel}
              signInHref={signInHref}
              ratingTitle={ratingTitle}
              ratingText={ratingText}
              highlightShapeSrc={highlightShapeSrc}
              ctaIconSrc={ctaIconSrc}
            />
          </Column>
        </Row>
      </Container>{" "}
      {/* /.container */}
      <div className="image-gallery">
        <Row className="align-items-center">
          <Column className="col-6">
            <HeroBannerNineGalleryLeft
              galleryImageOneSrc={galleryImageOneSrc}
              galleryImageTwoSrc={galleryImageTwoSrc}
            />
          </Column>
          <Column className="col-6">
            <HeroBannerNineGalleryRight
              galleryImageThreeSrc={galleryImageThreeSrc}
            />
          </Column>
        </Row>
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
