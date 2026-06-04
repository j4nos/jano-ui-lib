type PriceSectionThreePlan = {
  iconSrc: string;
  iconAlt?: string;
  columnClassName?: string;
  planClassName?: string;
  planName: string;
  bodyClassName?: string;
  features: string[];
  price: string;
  trialText: string;
  ctaLabel: string;
  ctaHref?: string;
};

type PriceSectionThreeTab = {
  id: string;
  label: string;
  active?: boolean;
  plans: PriceSectionThreePlan[];
};

export type PriceSectionThreeProps = {
  className?: string;
  tabsClassName?: string;
  tableAreaClassName?: string;
  tabs?: PriceSectionThreeTab[];
};

const defaultTabs: PriceSectionThreeTab[] = [];

export function PriceSectionThree({
  className = "",
  tabsClassName = "nav nav-tabs justify-content-center border-0 pricing-nav-three wow fadeInUp",
  tableAreaClassName = "pricing-table-area-three mt-160 lg-mt-100 xs-mt-60 wow fadeInUp",
  tabs = defaultTabs,
}: PriceSectionThreeProps) {
  return (
    <div className={`pricing-section-three position-relative ${className}`.trim()}>
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
                  <div className="row gx-0 align-items-center">
                    {tab.plans.map((plan) => (
                      <div className={columnClassName} key={`${tab.id}-${plan.planName}`}>
                        <div
                          className={`pr-column${plan.columnClassName ? ` ${plan.columnClassName}` : ""}`}
                        >
                          <img src={plan.iconSrc} alt={plan.iconAlt ?? ""} className="icon" />
                          <div
                            className={`plan tx-dark${plan.planClassName ? ` ${plan.planClassName}` : ""}`}
                          >
                            {plan.planName}
                          </div>
                          <div
                            className={`pr-body${plan.bodyClassName ? ` ${plan.bodyClassName}` : ""}`}
                          >
                            <ul className="style-none text-start">
                              {plan.features.map((feature, index) => (
                                <li key={`${tab.id}-${plan.planName}-${index}`}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="pr-footer pt-45 lg-pt-30">
                            <div className="price tx-dark">{plan.price}</div>
                            <div className="trial-text fs-17 opacity-75 mb-30">
                              {plan.trialText}
                            </div>
                            <a href={plan.ctaHref ?? "#"} className="btn-twelve fw-500 tran3s">
                              {plan.ctaLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
