import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";
import { CategoryCard, MoreCategoryCard } from "../CategoryCard";

type CategoryItem = {
  title: string;
  subtitle: string;
  href?: string;
  /**
   * Icon image `src` for this card. When omitted, falls back to the original
   * per-index default (`jano/images/icon/icon_127.svg` ... `icon_133.svg`).
   */
  icon?: string;
};

type MoreCategory = {
  value: string;
  label: string;
  href?: string;
};

type Props = {
  sectionLabel?: string;
  title?: string;
  categories?: [
    CategoryItem,
    CategoryItem,
    CategoryItem,
    CategoryItem,
    CategoryItem,
    CategoryItem,
    CategoryItem,
  ];
  moreCategory?: MoreCategory;
};

/** Per-index icon defaults preserving the original hardcoded markup. */
const DEFAULT_ICONS = [
  "jano/images/icon/icon_127.svg",
  "jano/images/icon/icon_128.svg",
  "jano/images/icon/icon_129.svg",
  "jano/images/icon/icon_130.svg",
  "jano/images/icon/icon_131.svg",
  "jano/images/icon/icon_132.svg",
  "jano/images/icon/icon_133.svg",
];

export default function FancyFeatureForty({
  sectionLabel = "OUR CORUSES",
  title = "Explore 4000+ Free Online Courses",
  categories = [
    { title: "IT", subtitle: "120+ Courses", href: "#" },
    { title: "Graphic Design", subtitle: "318+ Courses", href: "#" },
    { title: "Art", subtitle: "73+ Courses", href: "#" },
    { title: "Business", subtitle: "430+ Courses", href: "#" },
    { title: "Digital Marketing", subtitle: "230+ Courses", href: "#" },
    { title: "Language", subtitle: "310+ Courses", href: "#" },
    { title: "Development", subtitle: "73+ Courses", href: "#" },
  ],
  moreCategory = { value: "20", label: "More Category", href: "#" },
}: Props) {
  return (
    <div className="fancy-feature-forty mt-140 lg-mt-100">
      <div className="container">
        <div
          className="title-style-one text-center wow fadeInUp mb-85 lg-mb-30"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="sc-title text-uppercase">{sectionLabel}</div>
          <h2 className="main-title fw-500 tx-dark m0">{title}</h2>
        </div>
      </div>
      <div className="bg-wrapper m-auto">
        <Container>
          <Row>
            {[
              ...categories.map((category, index) => (
                <Column
                  key={`${category.title}-${index}`}
                  className="col-lg-3 col-md-4 col-sm-6 d-flex"
                >
                  <CategoryCard
                    title={category.title}
                    subtitle={category.subtitle}
                    href={category.href ?? "#"}
                    icon={category.icon ?? DEFAULT_ICONS[index]}
                  />
                </Column>
              )),
              <Column
                key="more-category"
                className="col-lg-3 col-md-4 col-sm-6 d-flex"
              >
                <MoreCategoryCard
                  value={moreCategory.value}
                  label={moreCategory.label}
                  href={moreCategory.href ?? "#"}
                />
              </Column>,
            ]}
          </Row>
        </Container>
      </div>
    </div>
  );
}
