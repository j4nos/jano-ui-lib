export type FancyFeatureThirtyOneItem = {
  iconSrc: string;
  label: string;
  description?: string;
};

export type FancyFeatureThirtyOneProps = {
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description?: string;
  items: FancyFeatureThirtyOneItem[];
  /** Optional asset overrides; default to the Jano theme paths. */
  highlightShapeSrc?: string;
  shapeOneSrc?: string;
  shapeTwoSrc?: string;
};

export default function FancyFeatureThirtyOne({
  title,
  description,
  items,
  highlightShapeSrc = "/jano/images/shape/shape_122.svg",
  shapeOneSrc = "/images/shape/shape_124.svg",
  shapeTwoSrc = "/images/shape/shape_125.svg",
}: FancyFeatureThirtyOneProps) {
  return (
    <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-9 m-auto">
            <div className="title-style-ten text-center pb-40 lg-pb-20">
              <h2 className="main-title font-recoleta fw-normal tx-dark">
                {title.prefix}{" "}
                <span className="position-relative">
                  {title.highlight}
                  <img src={highlightShapeSrc} alt="" />
                </span>{" "}
                {title.suffix}
              </h2>
              {description ? <p className="fs-20 mt-20">{description}</p> : null}
            </div>{" "}
            {/* /.title-style-ten */}
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4" key={item.label}>
              <div
                className="card-style-fourteen text-center mt-30"
                data-wow-delay={
                  index === 0 ? undefined : `${index * 0.1 + 0.1}s`
                }
              >
                <div className="icon">
                  <img src={item.iconSrc} alt="" className="m-auto" />
                </div>
                <p className="text-uppercase fs-18 mt-60 lg-mt-30">
                  {item.label}
                </p>
                {item.description ? (
                  <p className="mt-15 mb-0">{item.description}</p>
                ) : null}
              </div>{" "}
              {/* /.card-style-fourteen */}
            </div>
          ))}
        </div>
      </div>{" "}
      {/* /.container */}
      <img src={shapeOneSrc} alt="" className="shapes shape-one" />
      <img src={shapeTwoSrc} alt="" className="shapes shape-two" />
    </div>
  );
}
