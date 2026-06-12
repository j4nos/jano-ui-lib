export type FooterSocialLink = {
  label: string;
  href: string;
  className?: string;
};

export type FooterSocialLinksProps = {
  socialLinks: FooterSocialLink[];
};

export function FooterSocialLinks({ socialLinks }: FooterSocialLinksProps) {
  return (
    <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} aria-label={link.label}>
            {link.className ? <i className={link.className} /> : link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
