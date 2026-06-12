export type FancyFeatureThirtyOneTitleProps = {
  prefix: string;
  highlight: string;
  suffix: string;
  highlightShapeSrc: string;
  description?: string;
};

export function FancyFeatureThirtyOneTitle({
  prefix,
  highlight,
  suffix,
  highlightShapeSrc,
  description,
}: FancyFeatureThirtyOneTitleProps) {
  return (
    <div className="title-style-ten text-center pb-40 lg-pb-20">
      <h2 className="main-title font-recoleta fw-normal tx-dark">
        {prefix}{" "}
        <span className="position-relative">
          {highlight}
          <img src={highlightShapeSrc} alt="" />
        </span>{" "}
        {suffix}
      </h2>
      {description ? <p className="fs-20 mt-20">{description}</p> : null}
    </div>
  );
}
