export type FooterLegalLink = {
  label: string;
  href: string;
  className?: string;
};

export type FooterLegalLinksProps = {
  legalLinks: FooterLegalLink[];
};

export function FooterLegalLinks({ legalLinks }: FooterLegalLinksProps) {
  return (
    <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
      {legalLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} className={link.className}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
