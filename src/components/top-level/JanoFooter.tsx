import type { ReactNode } from "react";
import { FormSubmitButton } from "../FormSubmitButton";

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
  brand?: ReactNode;
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
            <div className="logo">{brand}</div>
          </div>
          {columns.map((column) => (
            <div className={column.className} key={column.title}>
              <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
              <ul className="footer-nav-link style-none">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href} className={link.className}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div
            className="col-xl-4 col-lg-5 mb-30 ps-xxl-5 form-widget"
            id="newsletter"
          >
            <h5 className="footer-title tx-dark fw-normal">{newsletterTitle}</h5>
            <h6 className="pt-15 pb-20 md-pt-10">{newsletterSubtitle}</h6>
            <form action={newsletterAction} className="position-relative">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                name="email"
                required
              />
              <FormSubmitButton
                variant="bare"
                withTopMargin={false}
                className="position-absolute"
              >
                {newsletterSubmitLabel}
              </FormSubmitButton>
            </form>
            {newsletterMessage ? (
              <div
                className={`fs-14 mt-10 ${newsletterError ? "tx-dark" : "opacity-75"}`}
              >
                {newsletterMessage}
              </div>
            ) : null}
            <div className="fs-14 mt-10 opacity-75">{newsletterHelperText}</div>
            {paymentStripSrc ? (
              <div className="mt-25">
                <img
                  src={paymentStripSrc}
                  alt={paymentStripAlt}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom-footer">
          <div className="row">
            <div className="col-lg-4 order-lg-0 mt-15">
              <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={link.className}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2 mt-15">
              <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} aria-label={link.label}>
                      {link.className ? <i className={link.className} /> : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 order-lg-1 mt-15">
              <p className="copyright text-center m0">{copyrightText}</p>
            </div>
          </div>
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
