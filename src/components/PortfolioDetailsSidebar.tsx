import type { ReactNode } from "react";
import { Row } from "./Row";
import { Column } from "./Column";
import { PortfolioMetaItem } from "./PortfolioMetaItem";

export type PortfolioDetailsSidebarMeta = {
  label: ReactNode;
  value: ReactNode;
};

type PortfolioDetailsSidebarProps = {
  aboutTitle?: ReactNode;
  about?: ReactNode;
  /** Key/value rows (Date, Client Name, Project Type, ...). */
  meta?: PortfolioDetailsSidebarMeta[];
  /** Decorative circle dots under the meta list. */
  showDots?: boolean;
  dotCount?: number;
  className?: string;
};

export function PortfolioDetailsSidebar({
  aboutTitle,
  about,
  meta = [],
  showDots = true,
  dotCount = 3,
  className = "sidebar ms-xl-5",
}: PortfolioDetailsSidebarProps) {
  return (
    <div className={className}>
      {aboutTitle != null && <h3 className="mb-20">{aboutTitle}</h3>}
      {about != null && (
        <p className="border-bottom pb-40 mb-35 lg-pb-20">{about}</p>
      )}
      <Row>
        {meta.map((item, index) => (
          <Column key={index} className="col-12 mb-35">
            <PortfolioMetaItem label={item.label} value={item.value} />
          </Column>
        ))}
      </Row>
      {showDots && dotCount > 0 && (
        <ul className="style-none circle-shape d-flex pt-10">
          {Array.from({ length: dotCount }).map((_, index) => (
            <li key={index} className="rounded-circle" />
          ))}
        </ul>
      )}
    </div>
  );
}
