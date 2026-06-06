type CategoryItem = {
  title: string;
  subtitle: string;
  href?: string;
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
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[0].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_127.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[0].title}
                </h4>
                <p>{categories[0].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[1].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_128.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[1].title}
                </h4>
                <p>{categories[1].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[2].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_129.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[2].title}
                </h4>
                <p>{categories[2].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[3].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_130.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[3].title}
                </h4>
                <p>{categories[3].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[4].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_131.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[4].title}
                </h4>
                <p>{categories[4].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[5].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_132.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[5].title}
                </h4>
                <p>{categories[5].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={categories[6].href ?? "#"}
                className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
              >
                <div className="icon d-flex align-items-end justify-content-center">
                  <img
                    src="jano/images/icon/icon_133.svg"
                    alt=""
                    className="lazy-img"
                    style={{}}
                  />
                </div>
                <h4 className="tx-dark mt-45 lg-mt-30">
                  {categories[6].title}
                </h4>
                <p>{categories[6].subtitle}</p>
              </a>{" "}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
              <a
                href={moreCategory.href ?? "#"}
                className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
              >
                <h3>{moreCategory.value}</h3>
                <p className="pb-20">{moreCategory.label}</p>
                <img
                  src="jano/images/icon/icon_134.svg"
                  alt=""
                  className="m-auto"
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
