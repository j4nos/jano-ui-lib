export type PricingPlanCardProps = {
  iconSrc: string;
  iconAlt?: string;
  columnClassName?: string;
  planClassName?: string;
  planName: string;
  bodyClassName?: string;
  features: string[];
  price: string;
  trialText: string;
  ctaLabel: string;
  ctaHref?: string;
  /** Key prefix for the feature list (kept stable across tabs). */
  featureKeyPrefix?: string;
};

export function PricingPlanCard({
  iconSrc,
  iconAlt = "",
  columnClassName,
  planClassName,
  planName,
  bodyClassName,
  features,
  price,
  trialText,
  ctaLabel,
  ctaHref = "#",
  featureKeyPrefix = planName,
}: PricingPlanCardProps) {
  return (
    <div className={`pr-column${columnClassName ? ` ${columnClassName}` : ""}`}>
      <img src={iconSrc} alt={iconAlt} className="icon" />
      <div className={`plan tx-dark${planClassName ? ` ${planClassName}` : ""}`}>
        {planName}
      </div>
      <div className={`pr-body${bodyClassName ? ` ${bodyClassName}` : ""}`}>
        <ul className="style-none text-start">
          {features.map((feature, index) => (
            <li key={`${featureKeyPrefix}-${index}`}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="pr-footer pt-45 lg-pt-30">
        <div className="price tx-dark">{price}</div>
        <div className="trial-text fs-17 opacity-75 mb-30">{trialText}</div>
        <a href={ctaHref} className="btn-twelve fw-500 tran3s">
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
