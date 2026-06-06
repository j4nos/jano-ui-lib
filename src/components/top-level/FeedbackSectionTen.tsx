export type FeedbackSectionTenItem = {
  company: string;
  role?: string;
  quote: string;
  metric?: string;
  bgColor?: string;
  href?: string;
};

export type FeedbackSectionTenProps = {
  id?: string;
  sectionLabel?: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  items: FeedbackSectionTenItem[];
  /** Optional asset overrides; default to the Jano theme paths. */
  iconSrc?: string;
  highlightShapeSrc?: string;
  shapeOneSrc?: string;
  shapeTwoSrc?: string;
};

const DEFAULT_TONES = ["#FFED4E", "#00FCFC", "#F27AFF", "#52C1FF"];

export default function FeedbackSectionTen({
  id,
  sectionLabel,
  title,
  items,
  iconSrc = "/jano/images/icon/icon_98.svg",
  highlightShapeSrc = "/images/shape/shape_129.svg",
  shapeOneSrc = "/images/shape/shape_130.svg",
  shapeTwoSrc = "/images/shape/shape_131.svg",
}: FeedbackSectionTenProps) {
  return (
    <div
      id={id}
      className="feedback-section-ten position-relative pt-200 lg-pt-150"
    >
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-5">
              <div className="title-style-ten text-center text-lg-start">
                {sectionLabel ? (
                  <div className="sc-title">{sectionLabel}</div>
                ) : null}
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  {title.prefix}{" "}
                  <span className="position-relative">
                    {title.highlight} <img src={highlightShapeSrc} alt="" />
                  </span>{" "}
                  {title.suffix}
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
            </div>
          </div>
          <div className="slider-wrapper pt-70 lg-pt-40">
            <div className="feedback_slider_ten">
              {items.map((item, index) => {
                const background =
                  item.bgColor ?? DEFAULT_TONES[index % DEFAULT_TONES.length];
                const card = (
                  <div className="feedback-block-ten" style={{ background }}>
                    <div className="cmp-name fw-500 tx-dark">{item.company}</div>
                    {item.role ? (
                      <div className="fs-18 tx-dark">{item.role}</div>
                    ) : null}
                    <p className="tx-dark mt-40 mb-70 lg-mt-30 lg-mb-50">
                      {item.quote}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      {item.metric ? (
                        <div className="fw-500 tx-dark fs-18">{item.metric}</div>
                      ) : (
                        <span />
                      )}
                      <img src={iconSrc} alt="" />
                    </div>
                  </div>
                );

                return (
                  <div className="item" key={`${item.company}-${index}`}>
                    {item.href ? (
                      <a href={item.href} className="d-block">
                        {card}
                      </a>
                    ) : (
                      card
                    )}
                  </div>
                );
              })}
            </div>{" "}
            {/* /.feedback_slider_ten */}
          </div>{" "}
          {/* /.slider-wrapper */}
          <ul className="slider-arrows slick-arrow-five d-flex justify-content-center style-none">
            <li className="prev_f5 slick-arrow text-center tran3s">
              <i className="bi bi-arrow-left" />
            </li>
            <li className="next_f5 slick-arrow text-center tran3s">
              <i className="bi bi-arrow-right" />
            </li>
          </ul>
        </div>
      </div>
      <img src={shapeOneSrc} alt="" className="shapes shape-one" />
      <img src={shapeTwoSrc} alt="" className="shapes shape-two" />
    </div>
  );
}
