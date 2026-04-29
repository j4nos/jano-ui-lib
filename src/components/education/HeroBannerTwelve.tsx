type HeroStat = {
  value: string;
  label: string;
};

type HeroStudentStat = {
  label: string;
};

type HeroAvatar = {
  imageUrl?: string | null;
  name: string;
};

type Props = {
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  firstStat?: HeroStat;
  secondStat?: HeroStat;
  studentStat?: HeroStudentStat;
  avatars?: HeroAvatar[];
};

export default function HeroBannerTwelve({
  title = "Start learning from our top experts.",
  description = "Unlock your potential with unlimited short courses & earn certificates to boost your CV.",
  primaryCtaLabel = "Explore all Courses",
  primaryCtaHref = "#",
  secondaryCtaLabel = "Join for Free Now!",
  secondaryCtaHref = "#",
  firstStat = { value: "120k+", label: "Online Videos" },
  secondStat = { value: "200+", label: "Categories" },
  studentStat = { label: "80k+ Students" },
  avatars = [],
}: Props) {
  return (
    <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div
              className="text-wrapper wow fadeInLeft"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <h1 className="hero-heading fw-500 tx-dark">{title}</h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                {description}
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href={primaryCtaHref}
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>{primaryCtaLabel}</span>
                  <img
                    src="jano/images/icon/icon_123.svg"
                    alt=""
                    className="ms-3"
                  />
                </a>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href={secondaryCtaHref} className="fw-500 tran3s">
                    {secondaryCtaLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end wow fadeInRight"
            style={{ visibility: "visible", animationName: "fadeInRight" }}
          >
            <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
              <img
                src="jano/images/assets/bg-12.png"
                alt=""
                className="lazy-img"
                style={{}}
              />
              <div className="media-img">
                <img
                  src="jano/images/media/c6da3ddb-8df9-429e-aebd-dc7126933d3f.png"
                  alt=""
                  className="lazy-img"
                  style={{}}
                />
              </div>
              <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center wow fadeInLeft"
                data-wow-delay="0.1"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <h4>{firstStat.value}</h4>
                <p>{firstStat.label}</p>
              </div>{" "}
              {/* /.card-one */}
              <div
                className="card-style card-two d-flex flex-column justify-content-center align-items-center wow fadeInRight"
                data-wow-delay="0.2"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <h4>{secondStat.value}</h4>
                <p>{secondStat.label}</p>
              </div>{" "}
              {/* /.card-one */}
              <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center wow fadeInRight"
                data-wow-delay="0.3"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <h5>{studentStat.label}</h5>
                <div className="avatar d-flex align-items-center">
                  {avatars.slice(0, 4).map((avatar) =>
                    avatar.imageUrl ? (
                      <img
                        key={avatar.name}
                        src={avatar.imageUrl}
                        alt={avatar.name}
                        title={avatar.name}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <span
                        key={avatar.name}
                        className="avatar_image avatar_fallback"
                        title={avatar.name}
                      >
                        {avatar.name
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((part) => part[0]?.toUpperCase())
                          .join("")}
                      </span>
                    ),
                  )}
                  <span className="avatar_image avatar_fallback">
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </div>
              </div>{" "}
              {/* /.card-one */}
              <img
                src="jano/images/shape/shape_146.svg"
                alt=""
                className="shapes shape-one lazy-img"
                style={{}}
              />
              <img
                src="jano/images/shape/shape_147.svg"
                alt=""
                className="shapes shape-two lazy-img"
                style={{}}
              />
            </div>
          </div>
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
}
