export type FooterLinkColumnLink = {
  label: string;
  href: string;
  className?: string;
};

export type FooterLinkColumnProps = {
  title: string;
  links: FooterLinkColumnLink[];
};

export function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <>
      <h5 className="footer-title tx-dark fw-normal">{title}</h5>
      <ul className="footer-nav-link style-none">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a href={link.href} className={link.className}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
