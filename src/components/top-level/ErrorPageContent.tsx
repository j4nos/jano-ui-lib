import type { ReactNode } from "react";

export type ErrorPageContentImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export type ErrorPageContentProps = {
  title?: ReactNode;
  description?: ReactNode;
  linkLabel?: ReactNode;
  linkHref?: string;
  image?: ErrorPageContentImage;
  shape?: ErrorPageContentImage | null;
  className?: string;
};

const DEFAULT_IMAGE: ErrorPageContentImage = {
  src: "/jano/images/assets/ils_06.svg",
  alt: "",
  width: 800,
  height: 522,
  className: "m-auto",
};

const DEFAULT_SHAPE: ErrorPageContentImage = {
  src: "/jano/images/shape/shape_178.svg",
  alt: "shape",
  width: 1915,
  height: 674,
  className: "shapes shape-one w-100",
};

export function ErrorPageContent({
  title = "Opps! you’r on the wrong place.",
  description = "Can not find what you need? Take a moment and do a search below or start from our Homepage.",
  linkLabel = "Back to home",
  linkHref = "/",
  image = DEFAULT_IMAGE,
  shape = DEFAULT_SHAPE,
  className,
}: ErrorPageContentProps = {}) {
  const rootClassName = [
    "error-page-content d-flex align-items-center justify-content-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-lg-7 m-auto">
            <h3>{title}</h3>
            <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">{description}</p>
            <a className="btn-twentyOne fw-500 tran3s" href={linkHref}>
              {linkLabel}
            </a>
          </div>
        </div>
        {image && (
          <img
            alt={image.alt ?? ""}
            loading="lazy"
            width={image.width}
            height={image.height}
            decoding="async"
            data-nimg={1}
            className={image.className ?? "m-auto"}
            style={{ color: "transparent" }}
            src={image.src}
          />
        )}
      </div>
      {shape && (
        <img
          alt={shape.alt ?? ""}
          loading="lazy"
          width={shape.width}
          height={shape.height}
          decoding="async"
          data-nimg={1}
          className={shape.className ?? "shapes shape-one w-100"}
          style={{ color: "transparent" }}
          src={shape.src}
        />
      )}
    </div>
  );
}
