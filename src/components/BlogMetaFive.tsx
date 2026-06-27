import Link from "next/link";

export type BlogMetaFiveProps = {
  tag: string;
  title: string;
  dateLabel: string;
  date: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

export function BlogMetaFive({
  tag,
  title,
  dateLabel,
  date,
  href,
  imageSrc,
  imageAlt,
  className = "",
}: BlogMetaFiveProps) {
  return (
    <article
      className={`blog-meta-five d-flex flex-column position-relative tran3s mb-60 lg-mb-50 ${className}`.trim()}
    >
      <div>
        <Link href={href} className="tag text-uppercase fw-500 tran3s">
          {tag}
        </Link>
      </div>
      <div className="post-data mt-30 mb-100 lg-mb-50">
        <Link href={href}>
          <h4 className="tran3s blog-title">{title}</h4>
        </Link>
      </div>
      {imageSrc && (
        <div className="mt-20 mb-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={imageAlt ?? ""} width={160} height={160} />
        </div>
      )}
      <div className="blog-footer d-flex align-items-center justify-content-between mt-auto">
        <div className="blog-date fw-500 tx-dark">
          {dateLabel} –{" "}
          <Link href={href} className="fw-normal tran3s">
            {date}
          </Link>
        </div>
        <Link href={href} className="read-more tran3s">
          <i className="bi bi-arrow-up-right" />
        </Link>
      </div>
    </article>
  );
}
