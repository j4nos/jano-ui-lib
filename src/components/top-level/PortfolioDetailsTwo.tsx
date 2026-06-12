import type { ReactNode } from "react";
import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";
import {
  PortfolioGalleryCarousel,
  type PortfolioGalleryImage,
} from "../PortfolioGalleryCarousel";
import {
  PortfolioDetailsSidebar,
  type PortfolioDetailsSidebarMeta,
} from "../PortfolioDetailsSidebar";
import {
  ProjectPaginationOne,
  type ProjectPaginationOneLink,
} from "./ProjectPaginationOne";

export type PortfolioDetailsTwoImage = PortfolioGalleryImage;
export type PortfolioDetailsTwoMeta = PortfolioDetailsSidebarMeta;

/** @deprecated Use `ProjectPaginationOneLink` from `./ProjectPaginationOne`. */
export type PortfolioDetailsTwoNavLink = ProjectPaginationOneLink;

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
        <Container>
          <Row>
            <Column className="col-lg-8 wow fadeInLeft">
              <PortfolioGalleryCarousel images={images} carouselId={carouselId} />
            </Column>
            <Column className="col-lg-4 wow fadeInRight">
              <PortfolioDetailsSidebar
                aboutTitle={aboutTitle}
                about={about}
                meta={meta}
                showDots={showDots}
                dotCount={dotCount}
              />
            </Column>
          </Row>
          {showPagination && (
            <ProjectPaginationOne previous={previous} next={next} />
          )}
        </Container>
      </div>
    </div>
  );
}
