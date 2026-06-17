import { HeroBannerTwelveContent } from "../HeroBannerTwelveContent";
import { HeroBannerTwelveMedia } from "../HeroBannerTwelveMedia";

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
  mediaImageSrc?: string;
  mediaImageAlt?: string;
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
  mediaImageSrc = "jano/images/assets/ils_12.svg",
  mediaImageAlt = "Hero illustration",
}: Props) {
  return (
    <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <HeroBannerTwelveContent
              title={title}
              description={description}
              primaryCtaLabel={primaryCtaLabel}
              primaryCtaHref={primaryCtaHref}
              secondaryCtaLabel={secondaryCtaLabel}
              secondaryCtaHref={secondaryCtaHref}
            />
          </div>
          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end wow fadeInRight"
            style={{ visibility: "visible", animationName: "fadeInRight" }}
          >
            <HeroBannerTwelveMedia
              firstStat={firstStat}
              secondStat={secondStat}
              studentStat={studentStat}
              avatars={avatars}
              mediaImageSrc={mediaImageSrc}
              mediaImageAlt={mediaImageAlt}
            />
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
