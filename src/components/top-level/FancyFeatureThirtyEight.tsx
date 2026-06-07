import type { ReactNode } from "react";
import {
  CheckmarkList,
  type CheckmarkColor,
  type CheckmarkListItem,
} from "../CheckmarkList";

type FeatureButton = {
  href: string;
  labelPrefix: string;
  label: string;
  className: string;
  iconAlt?: string;
  iconClassName?: string;
};

type Props = {
  className?: string;
  sectionLabel?: string;
  title?: ReactNode;
  description?: ReactNode;
  items?: readonly CheckmarkListItem[];
  checkColor?: CheckmarkColor;
  buttons?: FeatureButton[];
  mainImageSrc?: string;
  mainImageAlt?: string;
  screenImageSrc?: string;
  screenImageAlt?: string;
  shapeOneSrc?: string;
  shapeOneAlt?: string;
  shapeTwoSrc?: string;
  shapeTwoAlt?: string;
  contentClassName?: string;
  illustrationClassName?: string;
};

const defaultButtons: FeatureButton[] = [
  {
    href: "#",
    labelPrefix: "Get it on",
    label: "Google play",
    className: "windows-button",
  },
  {
    href: "#",
    labelPrefix: "Get it on",
    label: "App store",
    className: "ios-button",
  },
];

export default function FancyFeatureThirtyEight({
  className = "",
  sectionLabel = "MOBILE APP",
  title = "Download our Jano Application.",
  description = "Get control of all your insurance needs anywhere, anytime",
  items = [
    "Compare different insurance Item",
    "Buy, store and share all your policies online",
    "Email & Live chat.",
  ],
  checkColor = "pink",
  buttons = defaultButtons,
  mainImageSrc = "images/media/img_57.png",
  mainImageAlt = "",
  screenImageSrc = "images/media/img_56.png",
  screenImageAlt = "",
  shapeOneSrc = "images/shape/shape_139.svg",
  shapeOneAlt = "",
  shapeTwoSrc = "images/shape/shape_140.svg",
  shapeTwoAlt = "",
  contentClassName = "block-style-seven aos-init aos-animate",
  illustrationClassName = "illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80",
}: Props) {
  return (
    <div className={`fancy-feature-thirtyEight mt-140 lg-mt-100 ${className}`.trim()}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={contentClassName} data-aos="fade-right">
              <div className="title-style-one">
                <div className="sc-title text-uppercase">{sectionLabel}</div>
                <h2 className="main-title fw-500 tx-dark m0">{title}</h2>
              </div>
              <p className="fs-20 pt-30 pb-30 lg-pb-20">{description}</p>
              <CheckmarkList items={items} checkColor={checkColor} />
              <div className="d-sm-flex align-items-center platform-button-group-three mt-55 lg-mt-30">
                {buttons.map((button) => (
                  <a
                    key={`${button.label}-${button.href}`}
                    href={button.href}
                    className={`d-flex align-items-center ${button.className}`}
                  >
                    {button.iconClassName ? (
                      <i
                        aria-hidden="true"
                        className={`${button.iconClassName} icon`}
                      />
                    ) : (
                      <img
                        src={
                          button.className === "ios-button"
                            ? "/jano/images/icon/apple-black.svg"
                            : "/jano/images/icon/playstore.svg"
                        }
                        alt={button.iconAlt ?? ""}
                        className="lazy-img icon"
                      />
                    )}
                    <div>
                      <span>{button.labelPrefix}</span>
                      <strong>{button.label}</strong>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left">
            <div className={illustrationClassName}>
              <img
                src={mainImageSrc}
                alt={mainImageAlt}
                className="lazy-img main-img ms-auto"
              />
              <img
                src={screenImageSrc}
                alt={screenImageAlt}
                className="lazy-img screen-two"
              />
              {shapeOneSrc ? (
                <img
                  src={shapeOneSrc}
                  alt={shapeOneAlt}
                  className="lazy-img shapes shape-one"
                />
              ) : null}
              {shapeTwoSrc ? (
                <img
                  src={shapeTwoSrc}
                  alt={shapeTwoAlt}
                  className="lazy-img shapes shape-two"
                />
              ) : null}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
