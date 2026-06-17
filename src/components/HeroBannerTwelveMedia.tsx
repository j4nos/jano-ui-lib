type HeroStat = {
  value: string;
  label: string;
};

type HeroStudentStat = {
  label: string;
  href?: string;
};

type HeroAvatar = {
  imageUrl?: string | null;
  name: string;
};

export type HeroBannerTwelveMediaProps = {
  firstStat?: HeroStat;
  secondStat?: HeroStat;
  studentStat?: HeroStudentStat;
  avatars?: HeroAvatar[];
  mediaImageSrc?: string;
  mediaImageAlt?: string;
};

export function HeroBannerTwelveMedia({
  firstStat = { value: "120k+", label: "Online Videos" },
  secondStat = { value: "200+", label: "Categories" },
  studentStat = { label: "80k+ Students" },
  avatars = [],
  mediaImageSrc = "jano/images/assets/ils_12.svg",
  mediaImageAlt = "Hero illustration",
}: HeroBannerTwelveMediaProps) {
  return (
    <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
      <img
        src="jano/images/assets/bg-12.png"
        alt=""
        className="lazy-img"
        style={{}}
      />
      <div className="media-img">
        {mediaImageSrc ? (
          <img
            src={mediaImageSrc}
            alt={mediaImageAlt}
            className="lazy-img"
            style={{}}
          />
        ) : null}
      </div>
      <div
        className="card-style card-one d-flex flex-column justify-content-center align-items-center wow fadeInLeft"
        data-wow-delay="0.1"
        style={{ visibility: "visible", animationName: "fadeInLeft" }}
      >
        <h4>{firstStat.value}</h4>
        <p>{firstStat.label}</p>
      </div>{" "}
      <div
        className="card-style card-two d-flex flex-column justify-content-center align-items-center wow fadeInRight"
        data-wow-delay="0.2"
        style={{ visibility: "visible", animationName: "fadeInRight" }}
      >
        <h4>{secondStat.value}</h4>
        <p>{secondStat.label}</p>
      </div>{" "}
      {studentStat.href ? (
        <a
          href={studentStat.href}
          className="card-style card-three d-flex flex-column justify-content-center align-items-center wow fadeInRight"
          data-wow-delay="0.3"
          style={{ visibility: "visible", animationName: "fadeInRight", textDecoration: "none", color: "inherit" }}
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
        </a>
      ) : (
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
        </div>
      )}{" "}
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
  );
}
