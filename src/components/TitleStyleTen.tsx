export type TitleStyleTenProps = {
  sectionLabel?: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  highlightShapeSrc: string;
};

export function TitleStyleTen({
  sectionLabel,
  title,
  highlightShapeSrc,
}: TitleStyleTenProps) {
  return (
    <div className="title-style-ten text-center text-lg-start">
      {sectionLabel ? <div className="sc-title">{sectionLabel}</div> : null}
      <h2 className="main-title font-recoleta fw-normal tx-dark">
        {title.prefix}{" "}
        <span className="position-relative">
          {title.highlight} <img src={highlightShapeSrc} alt="" />
        </span>{" "}
        {title.suffix}
      </h2>
    </div>
  );
}
