import type { ReactNode } from "react";

export type ProjectPaginationOneLink = {
  /** Direction label, e.g. "Previous" / "Next". */
  direction?: ReactNode;
  /** Project name shown under the direction label. */
  name?: ReactNode;
  href?: string;
};

type ProjectPaginationOneProps = {
  previous?: ProjectPaginationOneLink | null;
  next?: ProjectPaginationOneLink | null;
  className?: string;
};

export function ProjectPaginationOne({
  previous,
  next,
  className,
}: ProjectPaginationOneProps) {
  if (!previous && !next) return null;

  const rootClassName = ["pr-pagination-one mt-110 lg-mt-80", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <ul className="style-none d-flex justify-content-between">
        {previous && (
          <li>
            <a href={previous.href ?? "#"} className="wow fadeInLeft">
              <span className="d-flex align-items-center align-items-md-end">
                <i className="bi bi-arrow-left" />
                <span className="ms-3">
                  <span className="pr-dir text-uppercase d-block">
                    {previous.direction ?? "Previous"}
                  </span>
                  <span className="pr-name d-none d-md-block tran3s fw-500 tx-dark">
                    {previous.name}
                  </span>
                </span>
              </span>
            </a>
          </li>
        )}
        {next && (
          <li>
            <a href={next.href ?? "#"} className="wow fadeInRight">
              <span className="d-flex align-items-center align-items-md-end">
                <span className="me-3">
                  <span className="pr-dir text-uppercase d-block">
                    {next.direction ?? "Next"}
                  </span>
                  <span className="pr-name d-none d-md-block tran3s fw-500 tx-dark">
                    {next.name}
                  </span>
                </span>
                <i className="bi bi-arrow-right" />
              </span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
