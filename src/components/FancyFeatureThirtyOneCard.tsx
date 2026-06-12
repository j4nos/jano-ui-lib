export type FancyFeatureThirtyOneCardProps = {
  iconSrc: string;
  label: string;
  description?: string;
  wowDelay?: string;
};

export function FancyFeatureThirtyOneCard({
  iconSrc,
  label,
  description,
  wowDelay,
}: FancyFeatureThirtyOneCardProps) {
  return (
    <>
      <div className="card-style-fourteen text-center mt-30" data-wow-delay={wowDelay}>
        <div className="icon">
          <img src={iconSrc} alt="" className="m-auto" />
        </div>
        <p className="text-uppercase fs-18 mt-60 lg-mt-30">{label}</p>
        {description ? <p className="mt-15 mb-0">{description}</p> : null}
      </div>{" "}
      {/* /.card-style-fourteen */}
    </>
  );
}
