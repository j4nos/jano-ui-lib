"use client";

import Link from "next/link";

export type BrandWordmarkProps = {
  href?: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  textColorClassName?: string;
  fontSize?: string;
  gapClassName?: string;
  className?: string;
  ariaLabel?: string;
};

export function BrandWordmark({
  href,
  text = "Brand",
  imageSrc,
  imageAlt = "",
  imageWidth = 48,
  imageHeight = 48,
  textColorClassName = "tx-dark",
  fontSize = "30px",
  gapClassName = "gap-2",
  className = "",
  ariaLabel = "Brand home",
}: BrandWordmarkProps) {
  const content = (
    <>
      {imageSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imageSrc}
          alt={imageAlt}
          aria-hidden={imageAlt ? undefined : "true"}
          width={imageWidth}
          height={imageHeight}
          style={{
            width: imageWidth,
            height: imageHeight,
            objectFit: "contain",
            display: "block",
          }}
        />
      ) : null}
      <span
        className={`m-0 ${textColorClassName}`}
        style={{
          fontFamily: '"Theano Didot", Georgia, "Times New Roman", serif',
          fontSize,
          lineHeight: 1,
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </>
  );

  const classNameValue =
    `d-inline-flex align-items-center ${gapClassName} ${className}`.trim();

  return href ? (
    <Link href={href} className={classNameValue} aria-label={ariaLabel}>
      {content}
    </Link>
  ) : (
    <span className={classNameValue} aria-label={ariaLabel}>
      {content}
    </span>
  );
}
