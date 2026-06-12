import type { ReactNode } from "react";

export type FeatureCardProps = {
  /** Icon image shown inside the rounded circle. */
  icon?: string;
  iconAlt?: string;
  title?: ReactNode;
  description?: ReactNode;
};

export function FeatureCard({
  icon,
  iconAlt = "",
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="card-style-seventeen d-flex align-items-center mb-40">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt={iconAlt} className="lazy-img" style={{}} />
      </div>
      <div className="ps-4 text-wrapper">
        <h4 className="text-white m0">{title}</h4>
        <p className="m0">{description}</p>
      </div>
    </div>
  );
}
