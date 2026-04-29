import Link from "next/link";

type BlogMetaThreeLink = {
  href: string;
  label: string;
};

type BlogMetaThreeProps = {
  date: string;
  title: string;
  link: BlogMetaThreeLink;
  className?: string;
};

export function BlogMetaThree({
  date,
  title,
  link,
  className = "",
}: BlogMetaThreeProps) {
  return (
    <article className={`blog-meta-three text-style ${className}`.trim()}>
      <div className="post-data">
        <div className="post-date opacity-75 text-uppercase">{date}</div>
        <Link href={link.href} className="mt-10 mb-25 lg-mb-20">
          <h4 className="tran3s blog-title xl tx-dark">{title}</h4>
        </Link>
        <div>
          <Link href={link.href} className="read-btn-two fw-500 tran3s">
            {link.label}
          </Link>
        </div>
      </div>
    </article>
  );
}
