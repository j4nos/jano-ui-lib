import { Row } from "../Row";
import { Column } from "../Column";
import { PricingPlanCard, type PricingPlanCardProps } from "../PricingPlanCard";

type PriceSectionThreePlan = Pick<
  PricingPlanCardProps,
  | "iconSrc"
  | "iconAlt"
  | "columnClassName"
  | "planClassName"
  | "planName"
  | "bodyClassName"
  | "features"
  | "price"
  | "trialText"
  | "ctaLabel"
  | "ctaHref"
>;

type PriceSectionThreeTab = {
  id: string;
  label: string;
  active?: boolean;
  plans: PriceSectionThreePlan[];
};

export type PriceSectionThreeProps = {
  id?: string;
  className?: string;
  tabsClassName?: string;
  tableAreaClassName?: string;
  tabs?: PriceSectionThreeTab[];
};

const defaultTabs: PriceSectionThreeTab[] = [];

export function PriceSectionThree({
  id,
  className = "",
  tabsClassName = "nav nav-tabs justify-content-center border-0 pricing-nav-three wow fadeInUp",
  tableAreaClassName = "pricing-table-area-three mt-160 lg-mt-100 xs-mt-60 wow fadeInUp",
  tabs = defaultTabs,
}: PriceSectionThreeProps) {
  return (
    <div id={id} className={`pricing-section-three position-relative ${className}`.trim()}>
      <div className="container">
        <ul
          className={tabsClassName}
          role="tablist"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {tabs.map((tab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button
                className={`nav-link${tab.active ? " active" : ""}`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.id}`}
                type="button"
                role="tab"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className={tableAreaClassName}
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="tab-content">
            {tabs.map((tab) => {
              const columnClassName =
                tab.plans.length === 3 ? "col-lg-4 col-sm-6" : "col-lg-3 col-sm-6";

              return (
                <div
                  key={tab.id}
                  className={`tab-pane${tab.active ? " show active" : ""}`}
                  id={tab.id}
                >
                  <Row className="gx-0 align-items-center">
                    {tab.plans.map((plan) => (
                      <Column
                        className={columnClassName}
                        key={`${tab.id}-${plan.planName}`}
                      >
                        <PricingPlanCard
                          {...plan}
                          featureKeyPrefix={`${tab.id}-${plan.planName}`}
                        />
                      </Column>
                    ))}
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="shapes shape-one rounded-circle" />
      <div className="shapes shape-two rounded-circle" />
    </div>
  );
}
