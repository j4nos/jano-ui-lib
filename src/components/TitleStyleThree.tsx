export type TitleStyleThreeProps = {
  sectionLabel?: string;
  titlePrefix: string;
  highlightedText?: string;
  titleSuffix?: string;
  markBgColor?: string;
  className?: string;
};

export function TitleStyleThree({
  sectionLabel = "Success Story",
  titlePrefix,
  highlightedText,
  titleSuffix = "",
  markBgColor = "#C6FFFF",
  className = "",
}: TitleStyleThreeProps) {
  return (
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div
          className={`title-style-three text-center mb-70 lg-mb-40 wow fadeInUp ${className}`.trim()}
        >
          <div className="sc-title text-uppercase">{sectionLabel}</div>
          <h2 className="main-title fw-normal">
            {titlePrefix}{" "}
            {highlightedText ? (
              <span className="d-inline-block position-relative">
                {highlightedText}{" "}
                <span
                  className="mark-bg"
                  style={{
                    backgroundColor: markBgColor,
                  }}
                />
              </span>
            ) : null}{" "}
            {titleSuffix}
          </h2>
        </div>{" "}
        {/* /.title-style-three */}
      </div>
    </div>
  );
}
