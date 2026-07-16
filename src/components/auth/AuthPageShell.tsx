"use client";

import type { ReactNode } from "react";

type AuthPageShellProps = {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
  /** Bottom-right illustration. Defaults to the Jano theme asset. */
  illustrationOneSrc?: string;
  /** Bottom-left illustration. Defaults to the Jano theme asset. */
  illustrationTwoSrc?: string;
  /**
   * Footer copyright line. Defaults to the original Jano theme text so
   * existing consumers don't need to change anything; pass this to brand
   * it for your own product.
   */
  copyrightText?: string;
};

export function AuthPageShell({
  title,
  subtitle,
  children,
  illustrationOneSrc = "/jano/images/assets/ils_11.png",
  illustrationTwoSrc = "/jano/images/assets/ils_12.png",
  copyrightText = "Copyright @2026 Snoopyon.",
}: AuthPageShellProps) {
  return (
    <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
      <div className="form-wrapper position-relative m-auto">
        <div className="text-center">
          <h2 className="tx-dark mb-30 lg-mb-10">{title}</h2>
          <p className="fs-20 tx-dark">{subtitle}</p>
        </div>
        {children}
      </div>
      <p className="mt-auto pt-50">{copyrightText}</p>
      <img
        src={illustrationOneSrc}
        alt="illustration"
        className="lazy-img illustration-one"
        style={{ pointerEvents: "none" }}
      />
      <img
        src={illustrationTwoSrc}
        alt="illustration"
        className="lazy-img illustration-two"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
