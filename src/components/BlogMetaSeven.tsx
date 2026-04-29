import Link from "next/link";

type BlogMetaSevenLink = {
  href: string;
  label: string;
};

type BlogMetaSevenProps = {
  tag: string;
  title: string;
  ctaLabel: string;
  link: BlogMetaSevenLink;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function BlogMetaSeven({
  tag,
  title,
  ctaLabel,
  link,
  imageSrc,
  imageAlt = "",
  className = "",
}: BlogMetaSevenProps) {
  return (
    <article className={`blog-meta-seven ${className}`.trim()}>
      {imageSrc ? (
        <figure
          className="post-img m0"
          style={{
            aspectRatio: "466 / 338",
            overflow: "hidden",
            borderRadius: 10,
          }}
        >
          <Link
            href={link.href}
            className="w-100 d-block"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-100 tran4s"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />
          </Link>
        </figure>
      ) : null}
      <div className={`post-data ${imageSrc ? "mt-30 lg-mt-20" : ""}`.trim()}>
        <div className="post-tag text-uppercase">{tag}</div>
        <Link href={link.href} className="mt-10 mb-15">
          <h4 className="tran3s blog-title tx-dark">{title}</h4>
        </Link>
        <div>
          <Link
            href={link.href}
            className="read-btn fw-500 tran3s d-flex align-items-center justify-content-between"
          >
            <span>{ctaLabel}</span>
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
