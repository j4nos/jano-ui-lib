import FancyFeatureFortyOneAccordion, {
  type FancyFeatureFortyOneAccordionItem,
} from "../FancyFeatureFortyOneAccordion";

type GoalCard = {
  tier: string;
  title: string;
  level: string;
  classes: string;
  badge: string;
  href?: string;
};

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
              <div className="row">
                <div className="col-sm-6 d-flex flex-column space-fix">
                  <a
                    href={cards[0].href ?? "#"}
                    className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
                  >
                    <span className="tag fw-500 text-white text-uppercase">
                      {cards[0].tier}
                    </span>
                    <h4 className="mb-0 mt-25">{cards[0].title}</h4>
                    <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
                      <li>{cards[0].level}</li>
                      <li>{cards[0].classes}</li>
                    </ul>
                    <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
                      {cards[0].badge}
                    </span>
                  </a>{" "}
                  <a
                    href={cards[1].href ?? "#"}
                    className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
                  >
                    <span className="tag fw-500 text-white text-uppercase">
                      {cards[1].tier}
                    </span>
                    <h4 className="mb-0 mt-25">
                      {cards[1].title.includes(" & ") ? (
                        <>
                          {cards[1].title.split(" & ")[0]} &amp; <br />{" "}
                          {cards[1].title.split(" & ")[1]}
                        </>
                      ) : (
                        cards[1].title
                      )}
                    </h4>
                    <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
                      <li>{cards[1].level}</li>
                      <li>{cards[1].classes}</li>
                    </ul>
                    <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
                      {cards[1].badge}
                    </span>
                  </a>{" "}
                </div>
                <div className="col-sm-6 d-flex flex-column">
                  <a
                    href={cards[2].href ?? "#"}
                    className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
                  >
                    <span className="tag fw-500 text-white text-uppercase">
                      {cards[2].tier}
                    </span>
                    <h4 className="mb-0 mt-25">{cards[2].title}</h4>
                    <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
                      <li>{cards[2].level}</li>
                      <li>{cards[2].classes}</li>
                    </ul>
                    <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
                      {cards[2].badge}
                    </span>
                  </a>{" "}
                  <a
                    href={cards[3].href ?? "#"}
                    className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
                  >
                    <span className="tag fw-500 text-white text-uppercase">
                      {cards[3].tier}
                    </span>
                    <h4 className="mb-0 mt-25">{cards[3].title}</h4>
                    <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
                      <li>{cards[3].level}</li>
                      <li>{cards[3].classes}</li>
                    </ul>
                    <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
                      {cards[3].badge}
                    </span>
                  </a>{" "}
                </div>
              </div>
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
