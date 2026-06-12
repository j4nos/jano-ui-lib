import FancyFeatureFortyOneAccordion, {
  type FancyFeatureFortyOneAccordionItem,
} from "../FancyFeatureFortyOneAccordion";
import { GoalCard, type GoalCardProps } from "../GoalCard";
import { Container } from "../Container";
import { Row } from "../Row";
import { Column } from "../Column";

type GoalCard = GoalCardProps;

type Props = {
  sectionLabel?: string;
  title?: string;
  items?: readonly FancyFeatureFortyOneAccordionItem[];
  ctaLabel?: string;
  ctaHref?: string;
  cards?: [GoalCard, GoalCard, GoalCard, GoalCard];
};

export default function FancyFeatureFortyOne({
  sectionLabel = "CHoose your path",
  title = "What’s your goal?",
  items = [
    {
      title: "Lowest Price.",
      description:
        "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
    },
    {
      title: "Boost-up Skills",
      description:
        "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
    },
    {
      title: "Learn Language",
      description:
        "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
    },
  ],
  ctaLabel = "Explorer All",
  ctaHref = "service-v1.html",
  cards = [
    {
      tier: "FREE",
      title: "Marketing.",
      level: "Begainner",
      classes: "18 Classes",
      badge: "FEATURED",
      href: "#",
    },
    {
      tier: "PRO",
      title: "Designing & Art.",
      level: "Mid",
      classes: "32 Classes",
      badge: "POPULER",
      href: "#",
    },
    {
      tier: "PRO",
      title: "Programming & Coding",
      level: "Pro",
      classes: "20 Classes",
      badge: "TRENDING",
      href: "#",
    },
    {
      tier: "FREE",
      title: "IT & Tecnology",
      level: "Mid",
      classes: "13 Classes",
      badge: "FEATURED",
      href: "#",
    },
  ],
}: Props) {
  return (
    <div className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 wow fadeInLeft"
            style={{ visibility: "visible", animationName: "fadeInLeft" }}
          >
            <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
              <div className="sc-title text-uppercase">{sectionLabel}</div>
              <h2 className="main-title fw-500 tx-dark m0">{title}</h2>
            </div>
            <FancyFeatureFortyOneAccordion
              accordionId="accordionOne"
              items={items}
            />{" "}
            <a href={ctaHref} className="btn-one fw-500 mt-50 md-mt-40">
              {ctaLabel}
            </a>
          </div>
          <div
            className="col-xxl-6 col-xl-7 col-lg-6 ms-auto wow fadeInRight"
            style={{ visibility: "visible", animationName: "fadeInRight" }}
          >
            <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
              <Container>
                <Row>
                  {cards.map((card, index) => (
                    <Column
                      key={`${card.title}-${index}`}
                      className={
                        index % 2 === 0
                          ? "col-sm-6 d-flex flex-column space-fix"
                          : "col-sm-6 d-flex flex-column"
                      }
                    >
                      <GoalCard
                        tier={card.tier}
                        title={card.title}
                        level={card.level}
                        classes={card.classes}
                        badge={card.badge}
                        href={card.href}
                      />
                    </Column>
                  ))}
                </Row>
              </Container>
              <img
                src="jano/images/shape/shape_152.svg"
                alt=""
                className="lazy-img shapes shape-one"
                style={{}}
              />
              <img
                src="jano/images/shape/shape_153.svg"
                alt=""
                className="lazy-img shapes shape-two"
                style={{}}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
