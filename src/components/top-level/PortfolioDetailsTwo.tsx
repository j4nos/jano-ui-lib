import type { ReactNode } from "react";

export type PortfolioDetailsTwoImage = {
  src: string;
  alt?: string;
};

export type PortfolioDetailsTwoMeta = {
  label: ReactNode;
  value: ReactNode;
};

export type PortfolioDetailsTwoNavLink = {
  /** Direction label, e.g. "Previous" / "Next". */
  direction?: ReactNode;
  /** Project name shown under the direction label. */
  name?: ReactNode;
  href?: string;
};

type PortfolioDetailsTwoProps = {
  /** Gallery slides. The first one is rendered as the active slide. */
  images?: PortfolioDetailsTwoImage[];
  /** Id wiring the carousel to its prev/next controls. */
  carouselId?: string;
  aboutTitle?: ReactNode;
  about?: ReactNode;
  /** Key/value rows in the right-hand sidebar (Date, Client Name, ...). */
  meta?: PortfolioDetailsTwoMeta[];
  /** Decorative circle dots under the sidebar. */
  showDots?: boolean;
  dotCount?: number;
  /** Bottom prev/next pagination. Pass `null` to hide a side. */
  previous?: PortfolioDetailsTwoNavLink | null;
  next?: PortfolioDetailsTwoNavLink | null;
  showPagination?: boolean;
  className?: string;
};

const DEFAULT_IMAGES: PortfolioDetailsTwoImage[] = [
  { src: "jano/images/media/img_94.jpg", alt: "..." },
  { src: "jano/images/media/img_94.jpg", alt: "..." },
  { src: "jano/images/media/img_94.jpg", alt: "..." },
];

const DEFAULT_META: PortfolioDetailsTwoMeta[] = [
  { label: "Date", value: "23 July, 2020" },
  { label: "Client Name", value: "Mariona Adisson, USA" },
  { label: "Project Type", value: "UI/UX, Web Design" },
];

const DEFAULT_PREVIOUS: PortfolioDetailsTwoNavLink = {
  direction: "Previous",
  name: "Uber App Redesign",
  href: "#",
};

const DEFAULT_NEXT: PortfolioDetailsTwoNavLink = {
  direction: "Next",
  name: "Rentloop Branding",
  href: "#",
};

export function PortfolioDetailsTwo({
  images = DEFAULT_IMAGES,
  carouselId = "gallery-carousel",
  aboutTitle = "About",
  about = "The Internet advertising famous today behaved lately.",
  meta = DEFAULT_META,
  showDots = true,
  dotCount = 3,
  previous = DEFAULT_PREVIOUS,
  next = DEFAULT_NEXT,
  showPagination = true,
  className,
}: PortfolioDetailsTwoProps) {
  const rootClassName = [
    "portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className="project-desctiption">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 wow fadeInLeft">
              <div
                id={carouselId}
                className="carousel slide me-xxl-5 md-mb-40"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item${index === 0 ? " active" : ""}`}
                    >
                      <img
                        src={image.src}
                        className="d-block w-100"
                        alt={image.alt ?? "..."}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <i className="bi bi-chevron-left" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <i className="bi bi-chevron-right" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInRight">
              <div className="sidebar ms-xl-5">
                {aboutTitle != null && <h3 className="mb-20">{aboutTitle}</h3>}
                {about != null && (
                  <p className="border-bottom pb-40 mb-35 lg-pb-20">{about}</p>
                )}
                <div className="row">
                  {meta.map((item, index) => (
                    <div key={index} className="col-12 mb-35">
                      <div className="pt-title fw-bold tx-dark text-uppercase">
                        {item.label}
                      </div>
                      <div className="pt-text">{item.value}</div>
                    </div>
                  ))}
                </div>
                {showDots && dotCount > 0 && (
                  <ul className="style-none circle-shape d-flex pt-10">
                    {Array.from({ length: dotCount }).map((_, index) => (
                      <li key={index} className="rounded-circle" />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          {showPagination && (previous || next) && (
            <div className="pr-pagination-one mt-110 lg-mt-80">
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
          )}
        </div>
      </div>
    </div>
  );
}
