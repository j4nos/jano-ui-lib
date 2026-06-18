import type { ReactElement, ReactNode } from "react";

export type BlogSectionFiveProps = {
  /** Main column content. */
  left: ReactNode;
  /** Sidebar column — a single element. */
  right: ReactElement;
  leftClassName?: string;
  rightClassName?: string;
  contentClassName?: string;
};

export function BlogSectionFive({
  left,
  right,
  leftClassName = "col-lg-8",
  rightClassName = "col-lg-4 col-md-8",
  contentClassName,
}: BlogSectionFiveProps): ReactElement {
  return (
    <div className="blog-section-five mt-150">
      <div className="container">
        <div className={contentClassName}>
          <div className="row gx-xl-5">
            <div className={leftClassName}>{left}</div>
            <div className={rightClassName}>
              <div className="blog-sidebar md-mt-70">{right}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
