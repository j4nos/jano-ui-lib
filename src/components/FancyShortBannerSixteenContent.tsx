import type { ReactNode } from "react";

export type FancyShortBannerSixteenContentProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function FancyShortBannerSixteenContent({
  eyebrow,
  title,
  description,
}: FancyShortBannerSixteenContentProps) {
  return (
    <div className="text-wrapper text-center text-lg-start md-pb-30">
      <div className="sc-title fs-18 pb-10">{eyebrow}</div>
      <h2 className="main-title fw-500 text-white m0">{title}</h2>
      {description ? (
        <div className="mt-20 text-white">{description}</div>
      ) : null}
    </div>
  );
}
