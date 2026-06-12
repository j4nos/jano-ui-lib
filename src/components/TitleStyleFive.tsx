import type { ReactNode } from "react";

export type TitleStyleFiveProps = {
  subtitle?: ReactNode;
  title?: ReactNode;
  className?: string;
};

export function TitleStyleFive({
  subtitle,
  title,
  className,
}: TitleStyleFiveProps) {
  const rootClassName = ["title-style-five mb-65 lg-mb-40", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      {subtitle != null && (
        <div className="sc-title-two fst-italic position-relative">
          {subtitle}
        </div>
      )}
      {title != null && <h2 className="main-title fw-500 tx-dark">{title}</h2>}
    </div>
  );
}
