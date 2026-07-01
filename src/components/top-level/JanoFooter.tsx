import { Row } from "../Row";
import { Column } from "../Column";
import { FooterBrandIntro } from "../FooterBrandIntro";
import type { FooterBrandIntroProps } from "../FooterBrandIntro";
import { FooterLinkColumn } from "../FooterLinkColumn";
import { FooterNewsletter } from "../FooterNewsletter";
import { FooterLegalLinks } from "../FooterLegalLinks";
import { FooterSocialLinks } from "../FooterSocialLinks";
import { FooterCopyright } from "../FooterCopyright";

export type JanoFooterLink = {
  label: string;
  href: string;
  className?: string;
};

export type JanoFooterColumn = {
  title: string;
  className: string;
  links: JanoFooterLink[];
};

type JanoFooterProps = {
  brand?: FooterBrandIntroProps["brand"];
  columns?: JanoFooterColumn[];
  newsletterTitle?: string;
  newsletterSubtitle?: string;
  newsletterPlaceholder?: string;
  newsletterSubmitLabel?: string;
  newsletterHelperText?: string;
  paymentStripSrc?: string;
  paymentStripAlt?: string;
  newsletterAction?: (formData: FormData) => void | Promise<void>;
  newsletterMessage?: string;
  newsletterError?: boolean;
  legalLinks?: JanoFooterLink[];
  socialLinks?: JanoFooterLink[];
  copyrightText?: string;
};

export function JanoFooter({
  brand,
  columns = [],
  newsletterTitle = "Newsletter",
  newsletterSubtitle = "Join our newsletter",
  newsletterPlaceholder = "Enter your email",
  newsletterSubmitLabel = "Sign Up",
  newsletterHelperText = "We only send interesting and relevant emails.",
  paymentStripSrc,
  paymentStripAlt = "Accepted payment methods",
  newsletterAction,
  newsletterMessage,
  newsletterError = false,
  legalLinks = [],
  socialLinks = [],
  copyrightText = `Copyright © ${new Date().getFullYear()} All rights reserved.`,
}: JanoFooterProps) {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-2 footer-intro mb-40">
            <FooterBrandIntro brand={brand} />
          </div>
          {columns.map((column) => (
            <div className={column.className} key={column.title}>
              <FooterLinkColumn title={column.title} links={column.links} />
            </div>
          ))}
          <div
            className="col-xl-4 col-lg-5 mb-30 ps-xxl-5 form-widget"
            id="newsletter"
          >
            <FooterNewsletter
              newsletterTitle={newsletterTitle}
              newsletterSubtitle={newsletterSubtitle}
              newsletterPlaceholder={newsletterPlaceholder}
              newsletterSubmitLabel={newsletterSubmitLabel}
              newsletterHelperText={newsletterHelperText}
              paymentStripSrc={paymentStripSrc}
              paymentStripAlt={paymentStripAlt}
              newsletterAction={newsletterAction}
              newsletterMessage={newsletterMessage}
              newsletterError={newsletterError}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom-footer">
          <Row>
            <Column className="col-lg-4 order-lg-0 mt-15">
              <FooterLegalLinks legalLinks={legalLinks} />
            </Column>
            <Column className="col-lg-4 order-lg-2 mt-15">
              <FooterSocialLinks socialLinks={socialLinks} />
            </Column>
            <Column className="col-lg-4 order-lg-1 mt-15">
              <FooterCopyright copyrightText={copyrightText} />
            </Column>
          </Row>
        </div>
      </div>
      <img
        src="/jano/images/shape/shape_158.svg"
        alt=""
        className="lazy-img shapes shape-one"
      />
    </div>
  );
}
