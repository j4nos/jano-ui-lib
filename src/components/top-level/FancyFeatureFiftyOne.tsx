import type { ReactNode } from "react";

export type FancyFeatureFiftyOneShape = {
  /** Final shape image (data-src for lazy loading). */
  src: string;
  /** Placeholder shown until the lazy image loads. */
  lazySrc?: string;
  alt?: string;
  className?: string;
};

type FancyFeatureFiftyOneProps = {
  subtitle?: ReactNode;
  title?: ReactNode;
  /** Decorative shape rendered at the bottom. Pass `null` to hide it. */
  shape?: FancyFeatureFiftyOneShape | null;
  className?: string;
};

const DEFAULT_SHAPE: FancyFeatureFiftyOneShape = {
  src: "jano/images/shape/shape_172.svg",
  lazySrc: "jano/images/lazy.svg",
  alt: "",
  className: "lazy-img shapes shape-two",
};

export function FancyFeatureFiftyOne({
  subtitle = "UI/UX Design",
  title = "Redpen branding & UI design.",
  shape = DEFAULT_SHAPE,
  className,
}: FancyFeatureFiftyOneProps) {
  const rootClassName = [
    "fancy-feature-fiftyOne position-relative mt-200",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 wow fadeInLeft">
            <div className="title-style-five mb-65 lg-mb-40">
              {subtitle != null && (
                <div className="sc-title-two fst-italic position-relative">
                  {subtitle}
                </div>
              )}
              {title != null && (
                <h2 className="main-title fw-500 tx-dark">{title}</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      {shape && (
        <img
          src={shape.lazySrc ?? shape.src}
          data-src={shape.src}
          alt={shape.alt ?? ""}
          className={shape.className ?? "lazy-img shapes shape-two"}
        />
      )}
    </div>
  );
}
